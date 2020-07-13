import React, { useEffect, useRef } from "react";

export const MobileMenuButton = (props) => {
  const { isOpen, getRef } = props;
  const menuButton = useRef(null);
  useEffect(() => {
    const bRef = menuButton.current;
    getRef(bRef);
  });
  return (
    <div className="MobileMenuButton-container" ref={menuButton}>
      {!isOpen ? (
        <i className="fas fa-bars" onClick={() => props.toggle()}></i>
      ) : (
        <i className="fas fa-times" onClick={() => props.toggle()}></i>
      )}
    </div>
  );
};
