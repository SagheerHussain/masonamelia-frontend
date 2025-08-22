import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import cta from "/images/showroom/cta.jpg";
import Button from "./Button";

const CTA = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // when section enters bottom → leaves top
  });

  // Interpolate scroll to scale and opacity
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [0, 1, 1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#111218] h-[200vh] lg:h-[200vh] w-full">
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 h-screen w-full flex items-center justify-center rounded-[50px] overflow-hidden"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center z-10"
          style={{
            backgroundImage: `url(${cta})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 z-[-1]"></div>
          <div className="text-center text-white px-4 z-[5]">
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-6xl font-bold mb-4">
              Ready for{" "}
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                Takeoff ?
              </span>
            </h2>
            <p className="text-base md:text-xl mb-6 mx-auto max-w-2xl">
              Partner with industry leaders in aviation solutions tailored for
              precision and performance. Connect with us to elevate your mission
              to new heights.
            </p>
            <div className="flex justify-center">
              <Button buttonLabel="Contact Us" onClick="/contact" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
