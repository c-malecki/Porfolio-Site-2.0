import React from "react";

export const Circle = (props) => {
  const { x, y } = props;
  return (
    <div
      className="circle-container"
      style={{
        left: x,
        top: y,
      }}
    />
  );
};
