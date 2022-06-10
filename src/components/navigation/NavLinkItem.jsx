import { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinkItem = ({ link, name, selected, onClick }) => {

  return (
    <>
      <motion.div
        className="menu-item"
        onClick={onClick}
        animate={{ opacity: selected ? 1 : 0.5 }}
        whileHover={{
          opacity: 1,
        }}
      >
        <NavLink to={`/${link}`}>{name}</NavLink>

        {selected && <motion.div className="underline" layoutId="underline" />}
      </motion.div>
    </>
  );
};

export default NavLinkItem;
