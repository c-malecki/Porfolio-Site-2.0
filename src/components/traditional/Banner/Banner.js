import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../../context/AppContext";
import { Circle, Sky, Grass } from "./index";
import { Temp } from "./temp/temp";

export const Banner = () => {
  const [mousePos, setMousePos] = useState({
    x: 750,
    y: 240,
  });
  const { toFixed } = useContext(AppContext);
  const handleMousePos = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  const inner = useRef();
  useEffect(() => {
    if (inner) {
      const el = inner.current;
      el.addEventListener("mousemove", (e) => handleMousePos(e));
      el.addEventListener("touchmove", (e) => handleMousePos(e));
      return () => {
        el.removeEventListener("mousemove", (e) => handleMousePos(e));
        el.addEventListener("touchmove", (e) => handleMousePos(e));
      };
    }
  }, []);
  return (
    <div
      className={`tradition-banner ${toFixed ? "adjustToHeader" : ""}`}
      id="home"
    >
      <div className="banner-inner-container" ref={inner}>
        <Circle x={mousePos.x} y={mousePos.y} />
        <Sky />
        <Grass />
        <Temp />
      </div>
    </div>
  );
};
