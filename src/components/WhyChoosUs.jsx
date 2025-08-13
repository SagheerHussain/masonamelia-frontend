import React from "react";
import { Tabs } from "./ui/tabs";
import TabContent from "./TabContent";
import featureOne from "/images/feature-one.png";
import featureTwo from "/images/feature-two.png";
import featureThree from "/images/feature-three.png";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

function WhyChoosUs() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const services = [
    {
      title: "Personal Commitment",
      description:
        "Our name is our promise—every client, every transaction, every time. We build lasting relationships through true personal care and integrity in all we do.",
      features: [
        "Individual attention for every client",
        "Long-term, trust-based relationships",
        "Unwavering dedication from start to finish",
      ],
    },
    {
      title: "Unmatched Expertise",
      description:
        "Decades of hands-on aviation experience and over 200 successful transactions mean you get trusted advice, proven strategies, and results you can count on.",
      features: [
        "Decades in the aviation industry",
        "200+ successful global transactions",
        "Expert advice on every aircraft deal",
      ],
    },
    {
      title: "Nationwide Representation",
      description:
        "From coast to coast, our reach is nationwide—ensuring clients and aircraft receive seamless, personalized support and powerful connections anywhere in the country.",
      features: [
        "Team presence across the United States",
        "Seamless coast-to-coast service",
        "Personalized solutions for every region",
      ],
    },
  ];

  const images = [featureOne, featureTwo, featureThree];

  const tabs = services.map((service, index) => ({
    title: service.title,
    value: service?.title
      ?.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(""),
    content: (
      <TabContent
        title={service.title}
        src={images[index]}
        description={service.description}
        features={service.features}
      />
    ),
  }));

  return (
    <section id="why-choosen" className="py-20">
      <div className="container">
        <div className="w-full px-4 flex flex-col justify-center text-center items-center">
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
              Why Choose Us
            </div>
          </motion.div>
          <motion.h2
            initial={{
              opacity: 0,
              y: isMobile ? 100 : 0,
              x: isMobile ? 0 : -100,
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[2rem] md:text-[2.5rem] lg:text-4xl xl:text-5xl font-bold text-white max-w-3xl"
            style={{ lineHeight: "1.2" }}
          >
            Aviation Expertise Fueled by{" "}
            <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
              True Commitment
            </span>
          </motion.h2>

          {/* Right Side: Paragraph + Button */}

          <motion.p
            initial={{
              opacity: 0,
              y: isMobile ? 100 : 0,
              x: isMobile ? 0 : -100,
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:text-lg text-neutral-300 py-[40px] max-w-4xl"
          >
            At Mason Amelia, you’ll find a brokerage built on trust, expertise,
            and genuine personal commitment. Our boutique approach means you’re
            never just another transaction. We listen, understand your mission,
            and tailor every step to your needs—delivering clarity, confidence,
            and results.
          </motion.p>
        </div>

        <div className="h-[1100px] sm:h-[900px] md:h-[550px] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}

export default WhyChoosUs;
