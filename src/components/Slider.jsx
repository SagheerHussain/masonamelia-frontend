import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/thumbs";

import { Pagination, Autoplay, Keyboard, Thumbs } from "swiper/modules";

import featuredOne from "/images/featured/one.png";
import featuredTwo from "/images/featured/two.png";
import featuredThree from "/images/featured/three.png";
import featuredFour from "/images/featured/four.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const media = useMediaQuery("(max-width: 768px)");

  const [activeIndex, setActiveIndex] = useState(0);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const pagination = {
    clickable: true,
  };

  const slides = [
    {
      image: featuredOne,
      title: "WANTED: Premier 1A (Two Acquisitions)",
      description:
        "Step into a timeless workhorse that’s just as comfortable cruising over mountains as it is hopping across small-town airstrips. The Cessna 182 has long been a cornerstone of general aviation, and N1323E is a prime example. It’s rugged, reliable, and ready to roll. Whether you're stepping up, scaling back, or buying your first plane, it hits that sweet spot of performance, utility, and modern tech with a full Garmin glass panel.",
      feature: [
        "Airframe: 2500",
        "Engine: 2665",
        "Propeller: 2022",
      ],
      avionics: ["Flight Deck Model", "G3X TOUCH", "ADS-B Equipped"],
    },
    {
      image: featuredTwo,
      title: "WANTED: Citation Mustang",
      description:
        "Step into a timeless workhorse that’s just as comfortable cruising over mountains as it is hopping across small-town airstrips. The Cessna 182 has long been a cornerstone of general aviation, and N1323E is a prime example. It’s rugged, reliable, and ready to roll. Whether you're stepping up, scaling back, or buying your first plane, it hits that sweet spot of performance, utility, and modern tech with a full Garmin glass panel.",
      feature: [
        "Airframe: 2500",
        "Engine: 2665",
        "Propeller: 2022",
      ],
      avionics: ["Flight Deck Model", "G3X TOUCH", "ADS-B Equipped"],
    },
    {
      image: featuredThree,
      title: "N550BC 1997 Cessna Citation Bravo",
      description:
        "Step into a timeless workhorse that’s just as comfortable cruising over mountains as it is hopping across small-town airstrips. The Cessna 182 has long been a cornerstone of general aviation, and N1323E is a prime example. It’s rugged, reliable, and ready to roll. Whether you're stepping up, scaling back, or buying your first plane, it hits that sweet spot of performance, utility, and modern tech with a full Garmin glass panel.",
      feature: [
        "Airframe: 2500",
        "Engine: 2665",
        "Propeller: 2022",
      ],
      avionics: ["Flight Deck Model", "G3X TOUCH", "ADS-B Equipped"],
    },
    {
      image: featuredFour,
      title: "WANTED: Citation Mustang",
      description:
        "Step into a timeless workhorse that’s just as comfortable cruising over mountains as it is hopping across small-town airstrips. The Cessna 182 has long been a cornerstone of general aviation, and N1323E is a prime example. It’s rugged, reliable, and ready to roll. Whether you're stepping up, scaling back, or buying your first plane, it hits that sweet spot of performance, utility, and modern tech with a full Garmin glass panel.",
      feature: [
        "Airframe: 2500",
        "Engine: 2665",
        "Propeller: 2022",
      ],
      avionics: ["Flight Deck Model", "G3X TOUCH", "ADS-B Equipped"],
    },
  ];

  const springDrop = {
    type: "spring",
    stiffness: 50,
    damping: 10,
    mass: 2,
  };

  return (
    <div className="container py-10 px-5 space-x-4 z-[0]">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white pt-10">Featured Jets</h1>
          <p className="text-white text-base max-w-3xl mx-auto mt-2">
            Discover our handpicked selection of premier jets crafted for
            performance and luxury. From business class comfort to thrilling
            speed, these aircraft redefine your journey.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          speed={1500}
          slidesPerView={"auto"}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          keyboard={true}
          modules={[Pagination, Autoplay, Keyboard]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="mySwiper z-[0]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[500px] md:h-[650px] flex flex-col justify-center p-8 relative overflow-hidden rounded-[25px] z-[1]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Featured Ribbon */}
                <div className="z-[9] absolute top-10 -left-10 w-48 text-center -rotate-45 bg-gradient-to-r from-[#ff8a41] to-[#fca168] text-white font-medium py-1 shadow-lg">
                  <h1 className="text-[1rem]">FEATURED</h1>
                </div>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

                {/* Animated Content */}
                <div
                  key={activeIndex}
                  className="ms-auto w-full md:w-[60%] lg:w-[40%]"
                >
                  {/* PURPLE BOX (Title) */}
                  <div className="w-full md:h-[150px] h-[100px] relative z-[0]">
                    <motion.div
                      className="liquid-glass flex flex-col justify-center"
                      initial={{ y: -100, scale: 0.8 }}
                      // animate={{ y: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      whileInView={{ y: 0, scale: 1 }}
                      transition={{
                        ...springDrop,
                        duration: media ? .7 : 5,
                        delay: 0.4,
                      }}
                    >
                      <div className="showroom-blur liquid-glass--bend z-[0]" />
                      <div className="liquid-glass--face z-[0]" />
                      <div className="liquid-glass--edge z-[0]" />
                      <div
                        className="
                          relative
                          rounded-xl flex flex-col items-center justify-center
                          text-center lg:py-0 md:py-4
                          h-full w-full
                        "
                      >
                        <p className="text-sm md:text-base xl:text-xl md:font-light font-light text-white px-4 md:py-3 rounded-md">
                          {slide?.title}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* YELLOW BOXES */}
                  <div className="flex flex-row gap-4 my-4">
                    {/* Logo Box */}
                    <motion.div
                      className="w-1/2 md:h-[150px] h-[100px] relative z-[9999]"
                      initial={{ y: -200, scale: 0.8 }}
                      viewport={{ once: false, amount: 0.2 }}
                      whileInView={{ y: 0, scale: 1 }}
                      transition={{
                        ...springDrop,
                        duration: media ? .7 : 5,
                        delay: 0.2,
                      }}
                    >
                      <div className="liquid-glass flex flex-col justify-center z-[0]">
                        <div className="liquid-glass--bend z-[0]" />
                        <div className="liquid-glass--face z-[0]" />
                        <div className="liquid-glass--edge z-[0]" />
                        <div
                          className="
                            relative
                            rounded-xl flex flex-col items-center justify-center
                            text-center lg:py-0 py-4
                            h-full w-full
                          "
                        >
                          {slide?.feature.map((feature, index) => (
                            <span className="text-white text-xs md:text-base xl:text-xl md:font-normal font-light" key={index}>{feature}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Quotes Box */}
                    <motion.div
                      className="w-1/2 md:h-[150px] h-[100px] relative z-[9999]"
                      initial={{ y: -200, scale: 0.8 }}
                      viewport={{ once: false, amount: 0.2 }}
                      whileInView={{ y: 0, scale: 1 }}
                      transition={{
                        ...springDrop,
                        duration: media ? .7 : 5,
                        delay: 0.2,
                      }}
                    >
                      <div className="liquid-glass flex flex-col justify-center z-[0]">
                        <div className="liquid-glass--bend z-[0]" />
                        <div className="liquid-glass--face z-[0]" />
                        <div className="liquid-glass--edge z-[0]" />
                        <div
                          className="
                            relative
                            rounded-xl flex flex-col items-center justify-center
                            text-center lg:py-0 py-4
                            h-full w-full
                          "
                        >
                          {slide?.avionics?.map((avionics, index) => (
                            <span className="text-white text-xs md:text-base xl:text-xl md:font-normal font-light" key={index}>{avionics}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* RED BOX (Description) */}
                  <motion.div
                    initial={{ y: -200, scale: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileInView={{ y: 0, scale: 1 }}
                    transition={{
                      ...springDrop,
                      duration: media ? .7 : 5,
                      delay: 0,
                    }}
                    className="w-full md:h-[150px] h-[100px] relative z-[9999]"
                  >
                    <div className="liquid-glass flex flex-col justify-center z-[0]">
                      <div className="liquid-glass--bend z-[0]" />
                      <div className="liquid-glass--face z-[0]" />
                      <div className="liquid-glass--edge z-[0]" />
                      <div
                        className="
                          relative
                          rounded-xl flex flex-col items-center justify-center
                          text-center lg:py-0 py-4
                          h-full w-full
                        "
                      >
                        <p className="text-xs md:text-base xl:text-xl md:font-normal font-light text-white px-4 py-3 rounded-md">
                          {slide?.description.slice(0, 120)}...
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Progress Circle */}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
