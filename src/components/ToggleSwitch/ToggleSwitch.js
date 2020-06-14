import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const ToggleSwitch = () => {
  const { layout, changeLayout, changeToggle, toggle } = useContext(AppContext);
  const handleMethod = () => {
    layout === true ? changeToggle(0) : changeToggle(1);
    changeLayout();
  };
  return (
    <input
      type="range"
      min={0}
      max={1}
      value={toggle}
      onChange={handleMethod}
      readOnly
    />
  );
};
