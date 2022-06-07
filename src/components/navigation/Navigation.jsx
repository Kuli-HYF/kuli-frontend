import { useState } from "react";
import "./navigation.css";

import NavLinks from "./Navlinks";

const Navigation = () => {
  
  return (
    <nav className="navigation-container">
      <NavLinks />
    </nav>
  );
};

export default Navigation;
