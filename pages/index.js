import Head from "next/head";
import { motion } from "framer-motion";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const HomePage = () => {
  const { user, login } = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>Mindtales | Home</title>
      </Head>
      <section className="section is-medium">
        <div className="container">
          <div className="columns is-vcentered is-8">
            <div className="column is-8">
              <h1 className="is-size-1 title has-text-grey-dark">Mindtales</h1>
              <p className="is-size-3 subtitle has-text-grey">
                Enjoy your perspective
              </p>
              <p className="is-size-5 has-text-justified">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                rem illo possimus, ratione nisi magni iure voluptatum impedit
                ipsam quas consequatur beatae, voluptatem libero ab? Alias
                maiores voluptates hic nesciunt!
              </p>
              {!user && (
                <motion.button
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.5, type: "spring", stiffness: 150 }}
                  className="button is-rounded is-primary is-size-5 title mt-2"
                  onClick={login}
                >
                  Get Started
                </motion.button>
              )}
            </div>
            <div className="column is-5">
              <motion.img
                initial={{ y: 0 }}
                animate={{ y: -20, type: "spring" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1.5,
                }}
                src="/mindtales.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
