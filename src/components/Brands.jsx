import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

import branOne from "/images/brands/cirrus.avif";
import branTwo from "/images/brands/tbm.avif";
import branThree from "/images/brands/pilatus.avif";
import branFour from "/images/brands/epic.avif";
import branFive from "/images/brands/diamond.avif";
import branSix from "/images/brands/beechcraft.avif";

const Brands = () => {
  const brands = [branOne, branTwo, branThree, branFour, branFive, branSix];
  const baseImages = [...brands, ...brands];

  const xRef = useRef(0);
  const containerRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useAnimationFrame((t, delta) => {
    if (containerRef.current && !isHovered) {
      xRef.current -= 0.05 * delta; // Adjust speed
      containerRef.current.style.transform = `translateX(${xRef.current}px)`;

      const containerWidth = containerRef.current.scrollWidth / 2;
      if (Math.abs(xRef.current) >= containerWidth) {
        xRef.current = 0;
      }
    }
  });

  return (
    <section className="w-full overflow-x-hidden bg-[#111218] py-4">
      <div
        className="w-max flex"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {baseImages.map((img, index) => {
          
            let scale = 1;
            if (isHovered && hoveredIndex === index) {
              scale = 1.3;
            }
          
          return (
            <motion.img
              key={index}
              src={img}
              alt={`brand-${index}`}
              draggable={false}
              className="w-40 h-24 object-contain mx-12"
              style={{ filter: "brightness(0) invert(1)" }}
              onMouseEnter={() => setHoveredIndex(index)}
              animate={{ scale }}
              transition={{ duration: 0.4 }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
