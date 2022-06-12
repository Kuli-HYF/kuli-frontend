import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { navLinks } from "./NavData";

import Hamburger from "./Hamburger";

const NavLinksMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 20,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.07,
        bounce: 0,
      },
    },
    closed: {
      top: "-80vh",
    },
  };

  return (
    <>
      <Hamburger isOpen={isOpen} toggle={() => setOpen(!isOpen)} />

      <motion.ul
        className="nav-list-mobile"
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        {navLinks.map(({ name, link }, i) => (
          <motion.li key={i} variants={linkVariants}>
            <NavLink
              to={`${link}`}
              style={({ isActive }) => (isActive ? { opacity: "1" } : {})}
            >
              {name}
              {pathname === link && (
                <motion.span
                  className="underline"
                  layoutId="underline"
                ></motion.span>
              )}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default NavLinksMobile;
