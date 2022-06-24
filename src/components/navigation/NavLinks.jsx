import { navLinks } from "./NavData";
import NavLinkItem from "./NavLinkItem";
import { useGlobalState } from "../../global";
import { navLinksLogIn } from "./NavDataLogIn";

const NavLinks = () => {
  const login = useGlobalState("userLoggedIn");

  return (
    <>
      {!login[0].id ? (
        <ul className="nav-list">
          {navLinks.map(({ name, link }, i) => (
            <NavLinkItem name={name} link={link} key={i} />
          ))}
        </ul>
      ) : (
        <ul className="nav-list">
          {navLinksLogIn.map(({ name, link }, i) => (
            <NavLinkItem name={name} link={link} key={i} />
          ))}
        </ul>
      )}
    </>
  );
};

export default NavLinks;
