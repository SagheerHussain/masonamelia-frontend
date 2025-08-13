import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const blogData = [
  {
    id: 1,
    title: "Light Jet, Heavy Demand: The Citation Mustang’s Comeback",
    date: "July 3, 2025",
    image:
      "https://www.jetaviva.com/wp-content/uploads/2025/07/Timon-Huber-Blog_Hero-2048x1040.jpg",
  },
  {
    id: 2,
    title: "Next-Level Trainer: What Makes the DA40 NG Stand Out",
    date: "July 3, 2025",
    image:
      "https://www.jetaviva.com/wp-content/uploads/2025/07/HERO-2-Max-Oberbroeckling-Blog-2048x1040.jpg",
  },
  {
    id: 3,
    title: "Navigating Today's Jet Market: What Buyers Are Really Looking For",
    date: "June 19, 2025",
    image:
      "https://www.jetaviva.com/wp-content/uploads/2025/06/Raphael-DC-Fly-in-Blog-Hero-2-2048x1040.jpg",
  },
];

const LatestJets = () => {
  return (
    <section id="latestJets" className="bg-white py-20">
      <div className="container px-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="tag-container mb-4"
        >
          <div className="tag-left-arrow"></div>
          <div className="flex items-center gap-2 px-4 py-[9px] bg-[#222] text-white text-sm font-semibold">
            <span className="w-2 h-2 bg-[#fff] rounded-full"></span>
            Latest Jets
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-6xl font-semibold mb-10 text-black max-w-2xl"
          style={{ lineHeight: "1.2" }}
        >
          Next-Gen Jets:{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            Power, Performance & Prestige
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT BIG ARTICLE */}
          <div className="flex flex-col">
            <div className="relative w-full flex items-center justify-center mb-8 z-[0]">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:block hidden w-[22rem] h-[22rem] xl:w-[28rem] xl:h-[28rem] bg-[#bee0fec1] rounded-full absolute lg:-left-2 xl:-left-10 z-0"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="h-[320px] md:w-[22rem] md:h-[22rem] xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden relative z-10 border-8 border-[#fff]"
              >
                <img
                  src="https://www.jetaviva.com/wp-content/uploads/2025/07/Jim-Lewis-Blog-Hero-2048x1040.jpg"
                  alt="Hero Jet"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-4xl text-black max-w-xl"
            >
              Premier Precision: Why the Premier 1A Remains a Top Acquisition
              Target
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-gray-600 text-lg mt-2 mb-6"
            >
              July 3, 2025
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button
                buttonLabel="Read More"
                onClick="/showroom"
                bgColor="111218"
                arrowColor="#111218"
                txtColor="text-[#fff]"
                borderColor="border-gray-200"
                fillColor="fill-gray-200"
              />
            </motion.div>
          </div>

          {/* RIGHT SMALL ARTICLES */}
          <div className="flex flex-col divide-y divide-gray-300 ">
            {blogData.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-6 first:pt-0 last:pb-0"
              >
                <motion.img
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <div>
                  <motion.h4
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-base md:text-lg lg:text-xl font-normal md:font-medium text-black"
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-md text-[#222] mt-1"
                  >
                    {item.date}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestJets;
