import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="
    ">
      {/* SVG filter definition */}
      <svg style={{ display: "none" }}>
        <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="container py-4 md:flex hidden justify-center 2xl:pe-6 pe-2">
        <div className="glass-container glass-container--rounded py-1" style={{ borderRadius: "5px" }}>
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>

          <div className="glass-content glass-content--inline justify-center">
            <div className="flex items-center w-full px-0 py-0">
              {/* Input */}
              <input
                type="text"
                placeholder="Search Jets"
                className="flex-grow bg-transparent outline-none text-white placeholder-white/70"
              />

              {/* Button */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-tertiary_color hover:bg-tertiary_color/80 transition">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
