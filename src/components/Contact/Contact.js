import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import ReactMarkdown from "react-markdown";
import { EmailForm } from "./EmailForm/EmailForm";

export const Contact = () => {
  const { pageContent } = useContext(ContentContext);
  const { contactCaption } = pageContent[0];
  return (
    <div className="contact-container">
      <div className="contact-row">
        <ReactMarkdown>{contactCaption}</ReactMarkdown>
        <div className="contact-form-container">
          <EmailForm />
        </div>
      </div>
    </div>
  );
};
