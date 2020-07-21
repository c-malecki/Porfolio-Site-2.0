import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const HashLinksNav = () => {
  return (
    <div className="HashLinksNav-container">
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
      <Link to="/blog">Blog</Link>
    </div>
  );
};
