import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const Navbar = () => {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className=" container navbar p-4">
      <div className="navbar-header">
        <div className="navbar-brand">
          <h1 className="is-size-1 title has-text-darkgrey">Mindtales</h1>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link href="/">
            <a className="navbar-item is-size-4">Home</a>
          </Link>

          <Link href="/about">
            <a className="navbar-item is-size-4">About</a>
          </Link>

          <Link href="/contact">
            <a className="navbar-item is-size-4">Contact</a>
          </Link>

          <div className="navbar-item">
            <div className="buttons">
              <p
                onClick={login}
                className="button is-link is-outlined is-rounded"
              >
                <strong>Login/Signup</strong>
              </p>
              <p
                onClick={logout}
                className="button is-danger is-outlined is-rounded"
              >
                <strong>Logout</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
