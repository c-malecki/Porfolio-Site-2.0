import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const MobileMenu = (props) => {
  const { changePage } = useContext(AppContext);
  return (
    <div
      className={`mobile-menu-container${
        props.isOpen ? " is-open-container" : ""
      }`}
    >
      <div
        className={`mobile-menu-links${props.isOpen ? " is-open-menu" : ""}`}
      >
        <NavLink to="/fun" onClick={() => changePage(0)}>
          HOME
        </NavLink>
        <NavLink to="/fun/about" onClick={() => changePage(1)}>
          ABOUT
        </NavLink>
        <NavLink to="/fun/projects" onClick={() => changePage(2)}>
          PROJECTS
        </NavLink>
        <NavLink to="/fun/contact" onClick={() => changePage(3)}>
          CONTACT
        </NavLink>

        <span>
          <Link to="/">Traditional</Link>
        </span>
      </div>
    </div>
  );
};
