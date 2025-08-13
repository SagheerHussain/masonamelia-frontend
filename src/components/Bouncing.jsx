import React from "react";
import { motion } from "framer-motion";

const ballStyle = {
  display: "block",
  width: "5rem",
  height: "5rem",
  backgroundColor: "black",
  borderRadius: "50%"
};

export default function Bouncing() {
  return (
    <div
      style={{
        width: "5rem",
        height: "5rem",
        display: "flex",
        justifyContent: "space-around",
        overflow: "visible"
      }}
    >
      <motion.span
        style={ballStyle}
        animate={{
          y: [50, -50],
          backgroundColor: ["#ff6699", "#6666ff"]
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.4,
            ease: "easeOut"
          },
          backgroundColor: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.4,
            ease: "easeOut",
            repeatDelay: 0.8
          }
        }}
      />
    </div>
  );
}
