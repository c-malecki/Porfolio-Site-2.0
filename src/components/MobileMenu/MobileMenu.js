import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { ToggleSwitch } from "../index";

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
        <NavLink to="/home" onClick={() => changePage(0)}>
          HOME
        </NavLink>
        <NavLink to="/about" onClick={() => changePage(1)}>
          ABOUT
        </NavLink>
        <NavLink to="/projects" onClick={() => changePage(2)}>
          PROJECTS
        </NavLink>
        <NavLink to="/contact" onClick={() => changePage(3)}>
          CONTACT
        </NavLink>
        <div className="toggleswitch-mobile-menu">
          <span>Back to boring!</span>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
};
