import React from "react";
import { EmailForm } from "./EmailForm/EmailForm";

export const Contact = () => {
  return (
    <div className="contact-container">
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
