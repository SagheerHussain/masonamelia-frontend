import React from "react";
import { motion } from "framer-motion";

const ServiceBannerContent = ({ highlightTitle, title, description }) => {
  return (
    <>
      <section id="banner_content" className="flex items-center h-full md:h-[70vh] lg:h-screen xl:h-[70vh] pb-[5rem]">
        <div className="container">
          <div className={`glass-container w-full p-4 md:p-10`}>
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content h-full flex flex-col p-4 md:p-8">
              <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 30, duration: 0.5 }}
                className="text-[1.6rem] md:text-[2.5rem] lg:text-[3rem] xl:text-6xl text-white"
                style={{ lineHeight: "1.2" }}
              >
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  {highlightTitle}
                </span>{" "}
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 30, duration: 0.5, delay: 0.2 }}
                className="text-white text-sm md:text-lg font-light  mt-5 text-center"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBannerContent;
