import { useState } from "react";
import { navLinks } from "./NavData";

import NavLinkItem from "./NavLinkItem";

const NavLinks = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <ul className="nav-list">
        {navLinks.map(({ name, link }, i) => (
          <NavLinkItem
            name={name}
            link={link}
            key={i}
            selected={selected === i}
            onClick={() => setSelected(i)}
          />
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
