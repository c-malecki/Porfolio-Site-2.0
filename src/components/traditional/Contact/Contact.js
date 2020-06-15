import React from "react";
import { TraditionalEmailForm } from "../../index";

export const Contact = () => {
  return (
    <div className="traditional-contact" id="contact">
      <h2 className="section-heading">Contact</h2>
      <div className="traditional-contact-row">
        <span>
          Do you like what you see? Shoot me a message with any questions or
          feedback. I'd be happy to hear from you.
        </span>
        <div className="contact-form-container">
          <TraditionalEmailForm />
        </div>
      </div>
    </div>
  );
};
