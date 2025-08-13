import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const BlogHeader = () => {
  return (
    <>
      <header
        id="header"
        className="relative w-full h-screen bg-cover bg-center z-[10]"
        style={{
          backgroundImage: `linear-gradient(to right, #15161c 40%, rgba(21, 22, 28,0.3)), url(https://cdn.prod.website-files.com/64c2db8601707a81c0d28ff5/64eb9b0110008b830a74c25a_SJ%20Recruiting%2032.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="px-5 container flex flex-col justify-center h-full ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
            className="text-white md:text-start text-center text-[2rem] md:text-[3rem] lg:text-[3rem] xl:text-6xl md:max-w-md lg:max-w-2xl"
            style={{ lineHeight: "1.1" }}
          >
            Pricing Intelligence{" "}
            <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
              Reimagined with SkyNet
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.5,
              delay: 0.3,
            }}
            className="mt-8 text-center md:text-start z-[0]"
          >
            <Button buttonLabel="Get Started" onClick="/contact" />
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default BlogHeader;
