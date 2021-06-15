import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="container">
      <div className="columns is-centered">
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: -20, type: "spring" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.5,
          }}
          src="/404.svg"
          className="notfoundimage mt-4"
        />
      </div>

      <p className="is-size-1 title has-text-darkgrey has-text-centered">
        OOPS... Page not found
      </p>
    </div>
  );
};

export default NotFound;
