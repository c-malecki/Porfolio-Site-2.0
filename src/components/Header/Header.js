import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { MobileMenuButton } from "./MobileMenuButton/MobileMenuButton";
import { HashLinksNav } from "./HashLinksNav/HashLinksNav";
import { MobileNav } from "./MobileNav/MobileNav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { changeToFixed, toFixed, elRef } = useContext(AppContext);
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
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`Header-container ${toFixed ? "fixed" : ""}`}>
      <div className="Header-content">
        <HashLinksNav />
        <MobileMenuButton toggle={toggleMenu} isOpen={isOpen} />
      </div>
      <MobileNav isOpen={isOpen} />
    </div>
  );
};
