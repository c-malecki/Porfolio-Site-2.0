import React, { useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const MobileNav = (props) => {
  const { isOpen, toggle, menuButton } = props;
  const mobileNav = useRef(null);
  useEffect(() => {
    const mRef = mobileNav.current;
    if (mobileNav) {
      const menuBlur = (event) => {
        if (
          isOpen &&
          !mRef.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {
          toggle();
        }
      };
      document.addEventListener("touchend", menuBlur);
      return () => {
        document.removeEventListener("touchend", menuBlur);
      };
    }
  }, [isOpen, toggle, menuButton]);
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
        <Link to="blog">Blog</Link>
      </div>
    </div>
  );
};
