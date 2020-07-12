import React from "react";
import { EmailForm } from "../index";

export const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-row">
        <p>
          Do you like what you see? Shoot me a message with any questions or
          feedback. I'd be happy to hear from you.
        </p>
        <div className="contact-form-container">
          <EmailForm />
        </div>
      </div>
    </div>
  );
};
