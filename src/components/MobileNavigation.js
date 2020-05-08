import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// change links to components and proper react-router
class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
    };
  }
  toggleMobileMenu() {
    const { mobileMenu } = this.state;
    this.setState({
      mobileMenu: !mobileMenu,
    });
  }
  pageTitle() {
    const { pageId } = this.props;
    if (pageId === 0) {
      return <span>Home</span>;
    } else if (pageId === 1) {
      return <span>About</span>;
    } else if (pageId === 2) {
      return <span>Projects</span>;
    } else if (pageId === 3) {
      return <span>Contact</span>;
    }
  }
  handleChangePage(id) {
    this.props.changePage(id);
  }
  handlePageTitle() {
    this.props.pageTitle();
  }
  render() {
    const { mobileMenu } = this.state;
    return (
      <div className="mobile-nav">
        <div
          className="page-title-menu"
          onClick={() => this.toggleMobileMenu()}
        >
          {this.pageTitle()}
        </div>
        <div className={`mobile-menu${mobileMenu === true ? "-active" : ""}`}>
          <div className="mobile-menu-links">
            <NavLink to="/home" onClick={() => this.handleChangePage(0)}>
              HOME
            </NavLink>
            <NavLink to="/about" onClick={() => this.handleChangePage(1)}>
              ABOUT
            </NavLink>
            <NavLink to="/projects" onClick={() => this.handleChangePage(2)}>
              PROJECTS
            </NavLink>
            <NavLink to="/contact" onClick={() => this.handleChangePage(3)}>
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNavigation;
