import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navigation.css";

class MainNavigation extends Component {
  handleChangePage(id) {
    this.props.changePage(id);
  }
  render() {
    return (
      <div className="main-nav">
        <NavLink
          to="/home"
          onClick={() => this.handleChangePage(0)}
          className="main-nav-link"
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => this.handleChangePage(1)}
          className="main-nav-link"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => this.handleChangePage(2)}
          className="main-nav-link"
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => this.handleChangePage(3)}
          className="main-nav-link"
        >
          CONTACT
        </NavLink>
      </div>
    );
  }
}

export default MainNavigation;
