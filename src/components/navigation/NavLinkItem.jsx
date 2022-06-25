import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NavLinkItem = ({ link, name }) => {
  const variants = {
    visible: { opacity: 1, transition: {duration: 0.55} },
    hidden: { opacity: 0 }
  };
  const { pathname } = useLocation();



  return (
    <>
      <motion.div
        className="menu-item"
        whileHover={{
          opacity: 1,
        }}
      >
        <NavLink
          to={`${link}`}
          style={({ isActive }) => (isActive ? { opacity: "1" } : {})}
        >
          {name}
          {pathname === link && (
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variants}
              className="underline"
              // layoutId="underline"
            ></motion.span>
          )}
        </NavLink>
      </motion.div>
    </>
  );
};

export default NavLinkItem;
