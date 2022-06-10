import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NavLinkItem = ({ link, name, selected, onClick }) => {

  // const {pathname} = useLocation();
  // console.log(pathname)
  // console.log("link" + link)

  const {location} = useLocation(); 


  return (
    <>
      <motion.div
        className="menu-item"
        onClick={onClick}
        animate={{ opacity: selected ? 1 : 0.6 }}
        whileHover={{
          opacity: 1,
        }}
      >
        <NavLink to={`/${link}`} >{name}</NavLink>
        
        {/* style={({ isActive }) => isActive ? {color: 'green'} : {}} */}

        {selected && <motion.div className="underline" layoutId="underline" />}
      </motion.div>
    </>
  );
};

export default NavLinkItem;
