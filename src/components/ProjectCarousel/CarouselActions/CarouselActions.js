import React from "react";
import "./CarouselActions.scss";

export const CarouselActions = (props) => {
  const { arrowLeft, arrowRight, disabled, title } = props;
  return (
    <div className="CarouselActions-container">
      <button
        className="CarouselActions-left"
        disabled={disabled}
        onClick={arrowLeft}
      >{`<`}</button>
      <h3 className="CarouselActions-title">{title}</h3>
      <button
        className="CarouselActions-right"
        disabled={disabled}
        onClick={arrowRight}
      >{`>`}</button>
    </div>
  );
};
