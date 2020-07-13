import React, { useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export const MobileNav = (props) => {
  const { isOpen, toggle } = props;
  const mobileNav = useRef(null);
  useEffect(() => {
    const mRef = mobileNav.current;
    if (mobileNav) {
      const menuBlur = (event) => {
        if (isOpen && !mRef.contains(event.target)) {
          toggle();
        }
      };
      document.addEventListener("touchend", menuBlur);
      return () => {
        document.removeEventListener("touchend", menuBlur);
      };
    }
  }, [isOpen, toggle]);
  return (
    <div
      className={`MobileNav-container ${isOpen ? "open-mobile" : ""}`}
      ref={mobileNav}
    >
      <div className="MobileNav-content">
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
  );
};
