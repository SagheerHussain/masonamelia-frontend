import React from "react";
import banner from "/images/intro/banner.png";
import Button from "./Button";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <section className="relative w-screen md:h-screen py-20 bg-black text-white flex items-center z-[0] overflow-x-hidden">
        {/* Background Image Right Side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #15161c 40%, rgba(21, 22, 28,0.3)), url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Content */}
        <div className="container relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center h-full px-5">
          <div className="md:w-1/2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="tag-container"
            >
              <div className="tag-left-arrow"></div>
              <div className="flex items-center gap-2 px-4 py-[9px] bg-[#222] text-white text-sm font-semibold">
                <span className="w-2 h-2 bg-[#fff] rounded-full"></span>
                Who We Are
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-7xl font-bold text-white lg:max-w-[25rem] xl:max-w-[30rem] 2xl:max-w-xl "
              style={{ lineHeight: "1.1" }}
            >
              Charting a new flight as a{" "}
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                global leader in aviation
              </span>
            </motion.h2>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button buttonLabel="Meet the Team" onClick="/team" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
