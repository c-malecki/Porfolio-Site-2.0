import React, { useState, useContext, useEffect } from "react";
import { TraditionalMobileMenu } from "../../index";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { changePage, changeToFixed, toFixed, elRef } = useContext(AppContext);
  useEffect(() => {
    const handleYScroll = () => {
      const targetPos = elRef.offsetTop;
      const curPosition = window.pageYOffset;
      changeToFixed(curPosition > targetPos);
    };
    window.addEventListener("scroll", handleYScroll);
    return () => {
      window.removeEventListener("scroll", handleYScroll);
    };
  }, [elRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`header-z ${toFixed ? "fixed" : ""}`}>
      <div className="header-container">
        <div className="toggle-container">
          <span>
            Make it{" "}
            <Link to="/fun" onClick={() => changePage(0)}>
              fun!
            </Link>
          </span>
        </div>
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
          <TraditionalMobileMenu toggle={toggleMenu} isOpen={isOpen} />
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
