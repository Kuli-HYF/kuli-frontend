import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { navLinks } from "./NavData";

import NavLinkItem from "./NavLinkItem";

const NavLinks = () => {
  const [selected, setSelected] = useState(0);

  const currentLink = useRef;

  return (
    <>
      <ul className="nav-list">
        {navLinks.map(({ name, link }, i) => (
          <NavLinkItem
            name={name}
            link={link}
            key={i}
            selected={currentLink.current === i}
            onClick={() => {
              setSelected(i);

              currentLink.current = i;
            }}
          />
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
