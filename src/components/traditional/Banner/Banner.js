import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { CenterName } from "./CenterName/CenterName";

export const Banner = () => {
  const { toFixed } = useContext(AppContext);
  return (
    <div
      className={`tradition-banner ${toFixed ? "adjustToHeader" : ""}`}
      id="home"
    >
      <div className="banner-inner-container">
        <CenterName />
      </div>
    </div>
  );
};
