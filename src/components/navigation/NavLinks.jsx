import { navLinks } from "./NavData";
import NavLinkItem from "./NavLinkItem";

const NavLinks = () => {
  return (
    <>
      <ul className="nav-list">
        {navLinks.map(({ name, link }, i) => (
          <NavLinkItem name={name} link={link} key={i} />
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
