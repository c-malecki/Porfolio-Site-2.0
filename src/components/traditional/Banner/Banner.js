import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const Banner = () => {
  const { toFixed } = useContext(AppContext);
  return (
    <div
      className={`tradition-banner ${toFixed ? "adjustToHeader" : ""}`}
      id="home"
    >
      <span>Super cool banner coming soon!</span>
    </div>
  );
};
