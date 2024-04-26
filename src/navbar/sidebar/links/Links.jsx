import { BrowserRouter as Router, Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: {
    Transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "Services", "Future-Enhancement", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {item === "About" ? (
            <Link to="/about">{item}</Link>
          ) : (
            <a href={`#${item}`}>{item}</a>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
