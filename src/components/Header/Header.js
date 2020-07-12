import React, { useState, useContext, useEffect } from "react";
import { MobileMenuButton } from "../index";
import { HashLink } from "react-router-hash-link";
import { AppContext } from "../../context/AppContext";

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
    <div className={`header-z ${toFixed ? "fixed" : ""}`}>
      <div className="header-container">
        <div className="hash-links-container">
          <div className="hash-links-menu">
            <HashLink smooth to="/#home">
              Home
            </HashLink>
            <HashLink smooth to="/#about">
              About
            </HashLink>
            <HashLink smooth to="/#projects">
              Projects
            </HashLink>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </div>
        </div>
        <div className="traditional-mobile-menu-container">
          <MobileMenuButton toggle={toggleMenu} isOpen={isOpen} />
        </div>
      </div>
      <div
        className={`hash-links-container-mobile ${
          isOpen ? "open-container" : ""
        }`}
      >
        <div className={`hash-links-menu-mobile ${isOpen ? "open-menu" : ""}`}>
          <HashLink smooth to="/#home">
            Home
          </HashLink>
          <HashLink smooth to="/#about">
            About
          </HashLink>
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </div>
      </div>
    </div>
  );
};
