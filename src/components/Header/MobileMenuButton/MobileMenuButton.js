import React from "react";

export const MobileMenuButton = (props) => {
  return (
    <div className="MobileMenuButton-container">
      {!props.isOpen ? (
        <i className="fas fa-bars" onClick={() => props.toggle()}></i>
      ) : (
        <i className="fas fa-times" onClick={() => props.toggle()}></i>
      )}
    </div>
  );
};
