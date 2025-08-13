import {
  FaUserAlt,
  FaBriefcase,
  FaPlayCircle,
  FaGlobeAmericas,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import SpotlightCard from "./ui/SpotlightEffect";
import Button from "./Button";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaUserAlt className="text-4xl mb-5 text-tertiary_color" />,
    title: "Personal Commitment",
    desc: (
      <>
        Our name is our promise. Every client and aircraft receives the same
        dedication, integrity, and personal care from start to finish, building
        lasting trust. We are delivering exceptional results.
      </>
    ),
  },
  {
    icon: <FaBriefcase className="text-4xl mb-5 text-tertiary_color" />,
    title: "Unmatched Experience",
    desc: (
      <>
        With decades in aviation and hundreds of transactions, our expertise
        ensures every client receives knowledgeable guidance and outstanding
        results, every time.
      </>
    ),
  },
  {
    icon: <FaPlayCircle className="text-4xl mb-5 text-tertiary_color" />,
    title: "Modern Marketing",
    desc: (
      <>
        Our YouTube channel, “Looking for Higher,” transforms aircraft
        sales—delivering innovative marketing, expert insights, and powerful
        reach to connect with buyers nationwide today.
      </>
    ),
  },
  {
    icon: <FaGlobeAmericas className="text-4xl mb-5 text-tertiary_color" />,
    title: "Coast-to-Coast Presence",
    desc: (
      <>
        With a nationwide team, Mason Amelia represents aircraft and clients
        from coast to coast, delivering truly personalized service and expert
        attention wherever you are.
      </>
    ),
  },
  {
    icon: <FaShieldAlt className="text-4xl mb-5 text-tertiary_color" />,
    title: "Transparent Process",
    desc: (
      <>
        Honesty and transparency are at our core. We guide you with clear
        communication and open-book integrity at every step of your aircraft
        journey. We are committed to building trust.
      </>
    ),
  },
  {
    icon: <FaLightbulb className="text-4xl mb-5 text-tertiary_color" />,
    title: "Innovative Solutions",
    desc: (
      <>
        We embrace the latest technology and creative strategies, making your
        aircraft sale or purchase seamless, efficient, and rewarding, delivering
        exceptional value every time.
      </>
    ),
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="w-full flex justify-center items-center py-20 relative bg-[#111218]">
      <div className="container px-5">
        <div className="rounded-2xl py-8 w-full">
          <div className="w-full mb-[60px] px-4 flex flex-col justify-center text-center items-center">
            {/* Left Side: Headline */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="tag-container mb-4"
            >
              <div className="tag-left-arrow"></div>
              <div className="flex items-center gap-2 px-4 py-[9px] bg-[#222] text-white text-sm font-semibold">
                <span className="w-2 h-2 bg-[#fff] rounded-full"></span>
                Expert Guidance
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[1.6rem] md:text-[2.5rem] lg:text-[3rem] xl:text-6xl font-bold text-white md:max-w-3xl"
              style={{ lineHeight: "1.2" }}
            >
              Mason Amelia Leads with{" "}
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                Confidence and Clarity.
              </span>
            </motion.h2>

            {/* Right Side: Paragraph + Button */}

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm md:text-lg text-neutral-300 py-[40px] max-w-4xl"
            >
              As aviation specialists driven by trust and experience, we deliver
              truly personalized service for every client and every mission.
              From first inquiry to final handshake, our expert team listens to
              your needs, tailors solutions, protects your interests, and makes
              your transition to a new aircraft seamless and stress-free.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button buttonLabel="Contact Us" onClick="/contact" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {features.map((card, idx) => (
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`glass-container w-full`}
              >
                <div className="glass-filter"></div>
                <div className="glass-overlay"></div>
                <div className="glass-specular"></div>
                <SpotlightCard
                  className="custom-spotlight-card"
                  // spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="glass-content h-full">
                    <div
                      key={idx}
                      className="rounded-xl p-2 flex flex-col items-center w-full relative"
                    >
                      {card.icon}
                      <h3 className="text-xl 2xl:text-2xl font-bold text-white mb-2 text-center">
                        {card.title}
                      </h3>
                      <p className="text-white text-center lg:text-sm 2xl:text-base font-light">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
