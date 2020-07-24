import React from "react";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/christopher-malecki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/c-malecki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square" aria-hidden="true" />
        </a>
        <a
          href="https://twitter.com/ChrisMalecki1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square" aria-hidden="true" />
        </a>
      </div>
      <span>Chris Malecki ©2020</span>
    </div>
  );
};
