import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Banner = () => {
  const { toFixed } = useContext(AppContext);
  return (
    <div
      className={`banner-container ${toFixed ? "adjustToHeader" : ""}`}
      id="home"
    >
      <div className="banner-inner">
        <div className="diamond">
          <span>welcome</span>
        </div>
      </div>
    </div>
  );
};
