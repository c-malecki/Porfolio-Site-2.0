import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const Banner = () => {
  const { toFixed } = useContext(AppContext);

  return (
    <div
      className={`tradition-banner ${toFixed ? "adjustToHeader" : ""}`}
      id="home"
    >
      <div className="banner-inner-container">
        <div className="diamond">
          <span>welcome</span>
        </div>
      </div>
    </div>
  );
};
