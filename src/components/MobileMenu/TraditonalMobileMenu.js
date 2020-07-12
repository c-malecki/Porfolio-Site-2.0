import React from "react";

export const TraditionalMobileMenu = (props) => {
  return (
    <div className="traditional-mobile-menu">
      {!props.isOpen ? (
        <i className="fas fa-bars" onClick={() => props.toggle()}></i>
      ) : (
        <i className="fas fa-times" onClick={() => props.toggle()}></i>
      )}
    </div>
  );
};
