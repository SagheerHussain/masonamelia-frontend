import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ items = [], className, onMouseLeave }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleMouseLeave = () => {
    setIsClosing(true);
    setTimeout(() => {
      onMouseLeave(); // trigger parent hide logic after animation
    }, 300); // duration must match CSS
  };

  return (
    <div
      className={`absolute top-[180%] ${className} mt-2 rounded-lg min-w-[200px] ${
        isClosing ? "dropdown-animate-out" : "dropdown-animate-in"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="glass-container flex flex-col justify-center glass-container--rounded p-2"
        style={{ borderRadius: "10px" }}
      >
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>

        <div
          className="glass-content glass-content--inline flex flex-col z-[99999]"
          style={{ alignItems: "start", justifyContent: "start" }}
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="uppercase block px-4 py-4 my-2 text-white duration-150 transition hover:text-tertiary_color"
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
