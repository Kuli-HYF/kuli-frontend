import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./Media";

import "./navigation.css";

import Logo from "./Logo";
// import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <nav className="navigation-container">
      <Logo />
      {!isMobile && <NavLinks />}
      {isMobile && <NavLinksMobile />}
    </nav>
  );
};

export default Navigation;
