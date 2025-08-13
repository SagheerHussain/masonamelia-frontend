import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categoryGradients = {
  acquired: ["from-[#3b82f6]", "to-[#7eb0fc]"],
  "coming-soon": ["from-[#9333ea]", "to-[#c084fc]"],
  "for-sale": ["from-[#6bfc3f]", "to-[#a5fc8a]"],
  "off-market": ["from-[#4e54fc]", "to-[#8f93fc]"],
  "sale-pending": ["from-[#9a2c3a]", "to-[#ce93d8]"],
  sold: ["from-[#ff0000]", "to-[#fc6262]"],
  wanted: ["from-[#f97316]", "to-[#fb923c]"],
};

const Card = ({ detail }) => {
  const categoryName = detail?.category?.toLowerCase() || "";
  const gradient = categoryGradients[categoryName] || ["from-[#ff8a41]", "to-[#fca168]"];

  return (
    <Link to={`/showroom/${detail._id}`}>
      <motion.div
        className="relative card rounded-lg overflow-hidden shadow-lg"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={`absolute top-6 -right-14 w-48 text-center rotate-45 bg-gradient-to-r ${gradient[0]} ${gradient[1]} ${
            categoryName === "for-sale" ? "text-black" : "text-white"
          } font-medium py-1 shadow-lg`}
        >
          <h1 className="text-[.8rem]">
            {detail?.category?.split("-").map((w) => w.toUpperCase()).join(" ")}
          </h1>
        </div>

        <div className="card-img">
          <img
            src={detail?.image || ""}
            alt={detail?.title || "aircraft"}
            className="w-full min-h-[225px] object-cover rounded-2xl"
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="py-4 px-5 relative mt-2">
          <div
            className="liquid-glass--edge"
            style={{
              boxShadow:
                "inset 3px 3px 3px 0 rgba(255, 255, 255, .05), inset -3px -3px 3px 0 rgba(255, 255, 255, .05)",
            }}
          />
          <h3 className="text-white text-lg mb-2 text-start">{detail?.title}</h3>
          <p className="text-white text-[.8rem] text-start">
            {detail?.description?.slice(0, 50)}...
          </p>

          <div className="price pt-3 text-start">
            <span className="text-tertiary_color text-[1.2rem]">
              $ {detail?.price?.toLocaleString()}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="w-[33%] flex flex-col items-center gap-2 bg-[#171921] py-2 rounded-lg">
              <span className="text-white xl:text-[.8rem] lg:text-[.6rem] text-[.8rem]">Airframe</span>
              <span className="text-white xl:text-[.8rem] lg:text-[.6rem] text-[.8rem]">{detail?.airframe}</span>
            </div>
            <div className="w-[33%] flex flex-col items-center gap-2 bg-[#171921] py-2 rounded-lg">
              <span className="text-white xl:text-[.8rem] lg:text-[.6rem] text-[.8rem]">Engine</span>
              <span className="text-white xl:text-[.8rem] lg:text-[.6rem] text-[.8rem]">{detail?.engine}</span>
            </div>
            <div className="w-[33%] flex flex-col items-center gap-2 bg-[#171921] py-2 rounded-lg">
              <span className="text-white xl:text-[.8rem] lg:text-[.6rem] text-[.8rem]">Propeller</span>
              <span className="text-white xl:text-[.8rem] lg:text-[.6rem] text-[.8rem]">{detail?.propeller}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default React.memo(Card);
