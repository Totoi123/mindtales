import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });

    netlifyIdentity.on("init", (user) => {
      setUser(user);
      setAuthReady(true);
      console.log("init event");
    });
    //init netlify identity connection
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
      netlifyIdentity.off("init");
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const values = { user, login, logout, authReady };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
