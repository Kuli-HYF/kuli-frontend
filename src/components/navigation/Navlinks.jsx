import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <ul className="nav-list">
        <li>
          <NavLink to={"/badges"}>Badges</NavLink>
        </li>
        <li>
          <NavLink to={"/companies"}>Companies</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>About Us</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Login</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
