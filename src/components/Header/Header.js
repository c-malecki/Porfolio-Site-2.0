import React, { useState } from "react";
import { MobileMenuButton } from "./MobileMenuButton/MobileMenuButton";
import { HashLinksNav } from "./HashLinksNav/HashLinksNav";
import { MobileNav } from "./MobileNav/MobileNav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuButtonRef, setMenuButtonRef] = useState(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Header-container">
      <div className="Header-content">
        <HashLinksNav />
        <MobileMenuButton
          toggle={toggleMenu}
          isOpen={isOpen}
          getRef={setMenuButtonRef}
        />
      </div>
      <MobileNav
        isOpen={isOpen}
        toggle={toggleMenu}
        menuButton={menuButtonRef}
      />
    </div>
  );
};
