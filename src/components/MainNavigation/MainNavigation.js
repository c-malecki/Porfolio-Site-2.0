import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { ToggleSwitch } from "../index";

export const MainNavigation = () => {
  const { changePage } = useContext(AppContext);
  const handleChangePage = (id) => {
    changePage(id);
  };
  return (
    <div className="main-nav">
      <span>
        Traditional <ToggleSwitch />
      </span>

      <NavLink
        to="/home"
        onClick={() => handleChangePage(0)}
        className="main-nav-link"
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => handleChangePage(1)}
        className="main-nav-link"
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/projects"
        onClick={() => handleChangePage(2)}
        className="main-nav-link"
      >
        PROJECTS
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => handleChangePage(3)}
        className="main-nav-link"
      >
        CONTACT
      </NavLink>
    </div>
  );
};
