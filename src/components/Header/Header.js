import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { MobileMenuButton } from "./MobileMenuButton/MobileMenuButton";
import { HashLinksNav } from "./HashLinksNav/HashLinksNav";
import { MobileNav } from "./MobileNav/MobileNav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuButtonRef, setMenuButtonRef] = useState(null);
  const { changeToFixed, toFixed, elRef } = useContext(AppContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (elRef) {
      const handleYScroll = () => {
        const targetPos = elRef.offsetTop;
        const curPosition = window.pageYOffset;
        changeToFixed(curPosition > targetPos);
      };
      window.addEventListener("scroll", handleYScroll);
      return () => {
        window.removeEventListener("scroll", handleYScroll);
      };
    }
  }, [elRef, changeToFixed]);
  return (
    <div className={`Header-container ${toFixed ? "fixed" : ""}`}>
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
