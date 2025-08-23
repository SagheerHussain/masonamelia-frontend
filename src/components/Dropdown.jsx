import React from "react";
import { Link } from "react-router-dom";

/**
 * Props:
 * - items: [{ text, link }]
 * - className: extra classes for positioning
 * - isClosing: boolean
 * - onMouseEnter / onMouseLeave: to control parent timers
 */
const Dropdown = ({ items = [], className = "", isClosing, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`mt-2 rounded-lg min-w-[220px] ${isClosing ? "dropdown-animate-out" : "dropdown-animate-in"} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ transformOrigin: "top center" }}
    >
      <div className="glass-container flex flex-col justify-center glass-container--rounded p-2" style={{ borderRadius: "10px" }}>
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>

        <div className="glass-content glass-content--inline flex flex-col z-[99999]" style={{ alignItems: "start", justifyContent: "start" }}>
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="uppercase block px-4 py-3 my-1 text-white duration-150 transition hover:text-tertiary_color"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
