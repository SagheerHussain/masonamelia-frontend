import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import ShinyText from "./ui/ShinyText";
import useMediaQuery from "@mui/material/useMediaQuery";

const Skynet = () => {
  const media = useMediaQuery("(max-width: 767px)");

  return (
    <section className="h-[90vh]">
      {/* Background Image Right Side */}
      <div className="px-5 container flex flex-col justify-center h-full ">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
          className="text-white md:text-start text-center text-[2rem] md:text-[3rem] lg:text-[3rem] xl:text-6xl md:max-w-md lg:max-w-2xl"
          style={{ lineHeight: "1.1" }}
        >
          Smarter Pricing{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            with SkyNet
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
          className="max-w-xl flex justify-start mt-4"
        >
          <ShinyText
            isTextCenter={media ? true : false}
            text={
              location.pathname === "/brokerage"
                ? "Mason Amelia makes aircraft deals seamless and strategic. We handle the process—so you can focus on results."
                : "Mason Amelia streamlines aircraft deals with clarity and confidence. Buy or sell, we make it seamless."
            }
            disabled={false}
            speed={5}
            className="text-lg md:text-xl"
          />
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.5, delay: 0.3 }}
          className="mt-8 mx-auto md:mx-0 z-[0]"
        >
          <Button buttonLabel="Get Started" onClick="/contact" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skynet;
