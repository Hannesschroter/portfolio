import React, { useRef, useState } from "react";
import "./spotlight.module.css";

export const InputSpotlightBorderCSS = () => {
  const divRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="input-wrapper relative">
      <div 
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="base-input"
      />
      <div
        ref={divRef}
        style={{
          border: "2px solid rgb(247 171 10 / 0.6)",
          opacity,
          WebkitMaskImage: `radial-gradient(30% 150px at ${position.x}px ${position.y}px, black 50%, transparent)`,
        }}
        aria-hidden="true"
        className="overlay-input"
      />
    </div>
  );
};