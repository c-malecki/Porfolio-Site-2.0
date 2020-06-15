import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const MainNavigation = () => {
  const { changePage } = useContext(AppContext);
  return (
    <div className="main-nav">
      <span>
        <Link to="/">Traditional</Link>
      </span>
      <NavLink
        exact
        to="/fun"
        className="main-nav-link"
        onClick={() => changePage(0)}
      >
        HOME
      </NavLink>
      <NavLink
        to="/fun/about"
        className="main-nav-link"
        onClick={() => changePage(1)}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/fun/projects"
        className="main-nav-link"
        onClick={() => changePage(2)}
      >
        PROJECTS
      </NavLink>
      <NavLink
        to="/fun/contact"
        className="main-nav-link"
        onClick={() => changePage(3)}
      >
        CONTACT
      </NavLink>
    </div>
  );
};
