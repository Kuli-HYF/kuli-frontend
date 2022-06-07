import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { motion, useCycle } from "framer-motion";

import logo from "../../assets/logo.png";

const NavLinks = () => {
  const [navOpen, setNavOpen] = useState(false);

  // useEffect(() => {
  //   setNavOpen(false);
  // }, []);

  const variants = {
    opened: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -30 },
  };

  // const [animate, toggle] = useCycle( {opacity: 1, y: 0},
  //    {opacity: 1, y: -20})

  return (
    <>
      <div className="nav-logo-container">
        <Link to={"/"}>
          <img src={logo} className="nav-logo" alt="Kuli logo"></img>
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setNavOpen((navOpen) => !navOpen);
            // toggle();
          }}
        ></button>
      </div>

      <ul className={navOpen ? "nav-list closed" : "nav-list"}>
        <motion.li>
          <NavLink to={"/badges"}>Badges</NavLink>
        </motion.li>
        <motion.li>
          <NavLink to={"/companies"}>Companies</NavLink>
        </motion.li>
      </ul>

      <ul className={navOpen ? "nav-list open" : "nav-list closed"}>
        <motion.li
          animate={navOpen ? "opened" : "closed"}
          transition={{delay: 0.05}}
          variants={variants}
        >
          <NavLink to={"/badges"}>Badges</NavLink>
        </motion.li>
        <motion.li
          animate={navOpen ? "opened" : "closed"}
          transition={{delay: 0.10}}

          variants={variants}
        >
          <NavLink to={"/companies"}>Companies</NavLink>
        </motion.li>
      </ul>
    </>
  );
};

export default NavLinks;
