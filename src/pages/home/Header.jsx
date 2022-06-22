import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/logo.png";

import { Button } from "../../components/button/Button";

const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      className="header-content"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div className="header-logo-container" variants={item}>
        <motion.img src={logo} className="logo" alt="logo"></motion.img>
      </motion.div>
      <motion.div className="header-title-container" variants={item}>
        <h1 className="header-title">
          Kuli is a place for finding opportunities and sharing insights about
          local companies committed to gender equality.
        </h1>
      </motion.div>
      <motion.div className="header-paragraph-container" variants={item}>
        <p className="header-paragraph">
          Our mission is to support diverse talent and provide opportunities to
          expand their network, and help local companies build diverse teams
          where everyone can feel engaged and included.
        </p>
      </motion.div>

      <motion.div className="header-buttons-container" variants={item}>
        <Link to={"/questionnaire"}>
          <Button title="Award Badges" color="home-button dark-pink" />
        </Link>
        <Link to={"/companies"}>
          <Button title="Explore Companies" color="home-button dark-pink" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Header;
