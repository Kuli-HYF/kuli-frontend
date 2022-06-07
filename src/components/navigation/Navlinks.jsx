import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";

const NavLinks = () => {
  return (
    <>
      <Link to={"/"}>
        <img src={logo} className="nav-logo" alt="logo"></img>
      </Link>
      <ul className="nav-list">
        <li>
          <NavLink to={"/badges"}>Badges</NavLink>
        </li>
        <li>
          <NavLink to={"/companies"}>Companies</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
