import React from "react";
import { EmailForm } from "../../components/index";

export const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-column">
        <h2 className="contact-heading">
          Do you like what you see? Shoot me a message with any questions or
          feedback. I'd be happy to hear from you.
        </h2>

        <EmailForm />

        <div className="contact-social">
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
        </div>
      </div>
    </div>
  );
};
