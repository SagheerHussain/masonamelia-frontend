// // import React, { useEffect, useRef, useState } from "react";
// // import "tailwindcss/tailwind.css";
// // import timelineOne from "/images/skynet/timeline-one.png";
// // import timelineTwo from "/images/skynet/timeline-two.png";
// // import timelineThree from "/images/skynet/timeline-three.png";
// // import { motion } from "framer-motion";

// // const SkynetTimeline = () => {
// //   const timelineData = [
// //     {
// //       year: "2019",
// //       title: "Data Access Revolutionized",
// //       description:
// //         "We broke away from traditional data sources by building our own private aircraft transaction intelligence system. No MLS, no guesswork—just verified, high-value records.",
// //       image:
// //         "https://static.wixstatic.com/media/04f737_459be72ae9a346f4b1e06393b2ab85ba~mv2.png/v1/fill/w_376,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Skynet.png",
// //     },
// //     {
// //       year: "2020",
// //       title: "Proprietary Tech Stack Deployed",
// //       description:
// //         "Launched SkyNet with a custom-built analytics engine focused solely on aircraft pricing intelligence. Secure, fast, and built by aviation experts.",
// //       image: timelineOne,
// //     },
// //     {
// //       year: "2021",
// //       title: "Real-Time Market Insight",
// //       description:
// //         "Introduced real-time valuation logic that adjusts with market volatility. No static PDFs—just dynamic, evolving market intelligence at your fingertips.",
// //       image:
// //         "https://static.wixstatic.com/media/04f737_9ca4fc0aecf74814afc789140f3aea50~mv2.png/v1/fill/w_558,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_9ca4fc0aecf74814afc789140f3aea50~mv2.png",
// //     },
// //     {
// //       year: "2022",
// //       title: "Trusted by Brokers & Buyers",
// //       description:
// //         "Our adoption skyrocketed as brokers, corporate buyers, and sellers relied on SkyNet for confident decision-making in high-stakes deals.",
// //       image: timelineTwo,
// //     },
// //     {
// //       year: "2023",
// //       title: "Evolving with AI & Predictive Models",
// //       description:
// //         "SkyNet now integrates predictive analytics and early AI learning layers—allowing even more accurate forecasts and deal preparation.",
// //       image: timelineThree,
// //     },
// //   ];

// //   const lineRef = useRef(null);
// //   const containerRef = useRef(null);
// //   const [activeIndex, setActiveIndex] = useState(-1);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!containerRef.current || !lineRef.current) return;

// //       const container = containerRef.current;
// //       const containerTop = container.offsetTop;
// //       const scrollTop = window.scrollY + window.innerHeight;
// //       const scrollProgress = scrollTop - containerTop;

// //       const maxHeight = container.offsetHeight;
// //       const newHeight = Math.min(scrollProgress, maxHeight);
// //       lineRef.current.style.height = `${newHeight}px`;

// //       const items = document.querySelectorAll(".timeline-item");
// //       items.forEach((item, index) => {
// //         const rect = item.getBoundingClientRect();
// //         const middle = rect.top + rect.height / 2;
// //         if (middle < window.innerHeight / 1.3) {
// //           setActiveIndex(index);
// //         }
// //       });
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     handleScroll();
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <section id="skynet-timeline" className="pt-20 bg-white">
// //       <div className="container px-5 pb-20">
// //         <motion.h2
// //           initial={{ opacity: 0, y: 100 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{
// //             duration: 0.5,
// //             delay: 0.2,
// //           }}
// //           className="text-3xl xl:text-6xl font-bold text-center mb-2"
// //         >
// //           Mason Amelia{" "}
// //           <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
// //             Journey of Innovation
// //           </span>
// //         </motion.h2>
// //         <motion.p
// //           initial={{ opacity: 0, y: 100 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{
// //             duration: 0.5,
// //             delay: 0.4,
// //           }}
// //           className="text-center text-[#222] mb-10 md:text-lg mt-4 max-w-6xl mx-auto"
// //         >
// //           From pioneering data access to deploying proprietary AI-powered
// //           analytics, Mason Amelia has consistently led the aircraft pricing
// //           revolution. Explore how SkyNet became the trusted name in aviation intelligence.
// //         </motion.p>
// //       </div>

// //       <div ref={containerRef} className="z-[0] relative w-full px-4 overflow-hidden">
// //         {/* Background Light Line */}
// //         <div className="md:block hidden absolute left-1/2 top-0 w-[1px] bg-[#8c8c8c] h-full transform -translate-x-1/2 z-0"></div>

// //         {/* Animated Blue Line */}
// //         <div className="md:block hidden absolute left-1/2 top-0 w-[1px] transform -translate-x-1/2 z-10">
// //           <div
// //             ref={lineRef}
// //             className="w-[2px] bg-gradient-to-t from-[#aa4aff] to-[#1777cb] transition-all duration-300 ease-in-out origin-top"
// //             style={{ height: "0px" }}
// //           ></div>
// //         </div>

// //         <ul className="space-y-24 relative z-20 pb-20">
// //           {timelineData.map((item, index) => (
// //             <li
// //               key={index}
// //               className={`relative timeline-item flex flex-col md:flex-row items-center md:items-stretch justify-between max-w-6xl mx-auto ${
// //                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
// //               }`}
// //             >
// //               <div
// //                 className={`w-full md:w-1/2 ${
// //                   index % 2 === 0 ? "md:pe-20" : "md:ps-20"
// //                 }`}
// //               >
// //                 <motion.h4
// //                   initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   transition={{
// //                     duration: 0.5,
// //                     delay: index * 0.2,
// //                   }}
// //                   className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left"
// //                 >
// //                   {item.title}
// //                 </motion.h4>
// //                 <motion.p
// //                   initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   transition={{
// //                     duration: 0.5,
// //                     delay: 0.6,
// //                   }}
// //                   className="text-gray-600 md:text-lg leading-relaxed px-5 text-justify"
// //                 >
// //                   {item.description}
// //                 </motion.p>
// //               </div>
// //               <div
// //                 className={`w-full md:w-1/2 px-6 mt-8 md:mt-0 flex justify-center ${
// //                   index % 2 === 0 ? "md:ps-20" : "md:pe-20"
// //                 }`}
// //               >
// //                 <img
// //                   src={item.image}
// //                   alt={`SkyNet ${item.year}`}
// //                   className="rounded-lg shadow-md"
// //                 />
// //               </div>
// //               <div
// //                 className={`md:flex hidden absolute left-1/2 transform w-16 h-16 rounded-full items-center justify-center border-[1px] text-xl font-bold bg-white z-30 transition-colors duration-300 ${
// //                   activeIndex >= index
// //                     ? "border-[#1777cb] text-[#1777cb]"
// //                     : "border-[#c7c7c7] text-[#c7c7c7]"
// //                 }`}
// //                 style={{ transform: "translate(-50%, 0)" }}
// //               >
// //                 {item.year}
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </section>
// //   );
// // };

// // export default SkynetTimeline;

// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import timelineOne from "/images/skynet/timeline-one.png";
// import timelineTwo from "/images/skynet/timeline-two.png";
// import timelineThree from "/images/skynet/timeline-three.png";

// const SkynetTimeline = () => {
//   const timelineData = [
//     {
//       year: "2019",
//       title: "Data Access Revolutionized",
//       description:
//         "We broke away from traditional data sources by building our own private aircraft transaction intelligence system. No MLS, no guesswork—just verified, high-value records.",
//       image:
//         "https://static.wixstatic.com/media/04f737_459be72ae9a346f4b1e06393b2ab85ba~mv2.png/v1/fill/w_376,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Skynet.png",
//     },
//     {
//       year: "2020",
//       title: "Proprietary Tech Stack Deployed",
//       description:
//         "Launched SkyNet with a custom-built analytics engine focused solely on aircraft pricing intelligence. Secure, fast, and built by aviation experts.",
//       image: timelineOne,
//     },
//     {
//       year: "2021",
//       title: "Real-Time Market Insight",
//       description:
//         "Introduced real-time valuation logic that adjusts with market volatility. No static PDFs—just dynamic, evolving market intelligence at your fingertips.",
//       image:
//         "https://static.wixstatic.com/media/04f737_9ca4fc0aecf74814afc789140f3aea50~mv2.png/v1/fill/w_558,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_9ca4fc0aecf74814afc789140f3aea50~mv2.png",
//     },
//     {
//       year: "2022",
//       title: "Trusted by Brokers & Buyers",
//       description:
//         "Our adoption skyrocketed as brokers, corporate buyers, and sellers relied on SkyNet for confident decision-making in high-stakes deals.",
//       image: timelineTwo,
//     },
//     {
//       year: "2023",
//       title: "Evolving with AI & Predictive Models",
//       description:
//         "SkyNet now integrates predictive analytics and early AI learning layers—allowing even more accurate forecasts and deal preparation.",
//       image: timelineThree,
//     },
//   ];

//   const lineRef = useRef(null);
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const items = document.querySelectorAll(".timeline-item");
//       let current = 0;

//       items.forEach((item, index) => {
//         const rect = item.getBoundingClientRect();
//         const middle = rect.top + rect.height / 2;
//         if (middle < window.innerHeight / 2) {
//           current = index;
//         }
//       });

//       setActiveIndex(current);

//       if (lineRef.current && containerRef.current) {
//         const containerTop = containerRef.current.offsetTop;
//         const scrollTop = window.scrollY + window.innerHeight;
//         const scrollProgress = scrollTop - containerTop;
//         const maxHeight = containerRef.current.offsetHeight;
//         const newHeight = Math.min(scrollProgress, maxHeight);
//         lineRef.current.style.height = `${newHeight}px`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="pt-20 bg-white">
//       <div className="container px-5 pb-20">
//         <motion.h2
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-3xl xl:text-6xl font-bold text-center mb-2"
//         >
//           Mason Amelia{" "}
//           <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
//             Journey of Innovation
//           </span>
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="text-center text-[#222] mb-10 md:text-lg mt-4 max-w-6xl mx-auto"
//         >
//           From pioneering data access to deploying proprietary AI-powered
//           analytics, Mason Amelia has consistently led the aircraft pricing
//           revolution. Explore how SkyNet became the trusted name in aviation
//           intelligence.
//         </motion.p>
//       </div>

//       <div className="container">
//         <div
//           ref={containerRef}
//           className="relative w-full px-4 overflow-hidden z-[0]"
//         >
//           {/* Background Vertical Line */}
//           <div className="md:block hidden absolute left-1/2 top-0 w-[1px] bg-[#8c8c8c] h-full transform -translate-x-1/2 z-0"></div>

//           {/* Animated Line Fill */}
//           <div className="md:block hidden absolute left-1/2 top-0 w-[1px] transform -translate-x-1/2 z-10">
//             <div
//               ref={lineRef}
//               className="w-[3px] bg-gradient-to-t from-[#aa4aff] to-[#1777cb] transition-all duration-300 ease-in-out origin-top"
//               style={{ height: "0px" }}
//             ></div>
//           </div>

//           {/* Timeline Items */}
//           <ul className="space-y-24 relative z-20 pb-20">
//             {timelineData.map((item, index) => (
//               <li
//                 key={index}
//                 className={`timeline-item relative flex flex-col border-4 md:flex-row items-center md:items-stretch justify-between mx-auto py-4 ${
//                   index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                 }`}
//               >
//                 {/* Sticky Year Inside Section */}
//                 <div className="md:block hidden absolute left-1/2 top-0 transform -translate-x-1/2 h-full z-30">
//                   <div
//                     className={`sticky top-0 min-h-[150px] w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
//                       activeIndex === index
//                         ? "border-[2px] bg-white border-[#1777cb] text-[#1777cb]"
//                         : "border border-[#d3d3d3] text-[#aaa] bg-white"
//                     }`}
//                   >
//                     {item.year}
//                   </div>
//                 </div>

//                 {/* Left/Right Content */}
//                 <div
//                   className={`w-full md:w-1/2 ${
//                     index % 2 === 0 ? "md:pe-20" : "md:ps-20"
//                   }`}
//                 >
//                   <motion.h4
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left"
//                   >
//                     {item.title}
//                   </motion.h4>
//                   <motion.p
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-gray-600 md:text-lg leading-relaxed text-justify"
//                   >
//                     {item.description}
//                   </motion.p>
//                 </div>

//                 <div
//                   className={`w-full md:w-1/2 px-6 mt-8 md:mt-0 flex justify-center ${
//                     index % 2 === 0 ? "md:ps-20" : "md:pe-20"
//                   }`}
//                 >
//                   <img
//                     src={item.image}
//                     alt={`SkyNet ${item.year}`}
//                     className="rounded-lg shadow-md"
//                   />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkynetTimeline;

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import timelineOne from "/images/skynet/timeline-one.png";
import timelineTwo from "/images/skynet/timeline-two.png";
import timelineThree from "/images/skynet/timeline-three.png";

const SkynetTimeline = () => {
  const timelineData = [
    {
      year: "2019",
      title: "Data Access Revolutionized",
      description:
        "We broke away from traditional data sources by building our own private aircraft transaction intelligence system. No MLS, no guesswork—just verified, high-value records.",
      image:
        "https://static.wixstatic.com/media/04f737_459be72ae9a346f4b1e06393b2ab85ba~mv2.png/v1/fill/w_376,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Skynet.png",
    },
    {
      year: "2020",
      title: "Proprietary Tech Stack Deployed",
      description:
        "Launched SkyNet with a custom-built analytics engine focused solely on aircraft pricing intelligence. Secure, fast, and built by aviation experts.",
      image: timelineOne,
    },
    {
      year: "2021",
      title: "Real-Time Market Insight",
      description:
        "Introduced real-time valuation logic that adjusts with market volatility. No static PDFs—just dynamic, evolving market intelligence at your fingertips.",
      image:
        "https://static.wixstatic.com/media/04f737_9ca4fc0aecf74814afc789140f3aea50~mv2.png/v1/fill/w_558,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_9ca4fc0aecf74814afc789140f3aea50~mv2.png",
    },
    {
      year: "2022",
      title: "Trusted by Brokers & Buyers",
      description:
        "Our adoption skyrocketed as brokers, corporate buyers, and sellers relied on SkyNet for confident decision-making in high-stakes deals.",
      image: timelineTwo,
    },
    {
      year: "2023",
      title: "Evolving with AI & Predictive Models",
      description:
        "SkyNet now integrates predictive analytics and early AI learning layers—allowing even more accurate forecasts and deal preparation.",
      image: timelineThree,
    },
  ];

  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Active index: jis section ka sticky top viewport line pe aata hai (same as top-24 ≈ 96px)
      const stickyTopPx = 96; // Tailwind top-24
      let current = 0;
      sectionRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // rect.top <= stickyTopPx  AND  rect.bottom > stickyTopPx  => yeh wala section active hai
        if (rect.top <= stickyTopPx && rect.bottom > stickyTopPx) current = idx;
      });
      setActiveIndex(current);

      // Blue progress line height
      if (lineRef.current && containerRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const scrollTop = window.scrollY + window.innerHeight;
        const scrollProgress = scrollTop - containerTop;
        const maxHeight = containerRef.current.offsetHeight;
        const newHeight = Math.min(scrollProgress, maxHeight);
        lineRef.current.style.height = `${newHeight}px`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-20 bg-white relative z-0">
      <div className="container px-5">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl xl:text-6xl font-bold text-center mb-2"
        >
          Mason Amelia{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            Journey of Innovation
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#222] mb-10 md:text-lg pt-[40px] max-w-6xl mx-auto"
        >
          From pioneering data access to deploying proprietary AI-powered
          analytics, Mason Amelia has consistently led the aircraft pricing
          revolution. Explore how SkyNet became the trusted name in aviation
          intelligence.
        </motion.p>
      </div>

      <div className="container">
        <div
          ref={containerRef}
          className="relative w-full px-4 overflow-visible z-[0]"
        >
          {/* Background vertical line */}
          <div className="md:block hidden absolute left-1/2 top-0 w-[1px] bg-[#8c8c8c] h-full -translate-x-1/2 z-0"></div>

          {/* Animated blue line */}
          <div className="md:block hidden absolute left-1/2 top-0 w-[1px] -translate-x-1/2 z-10">
            <div
              ref={lineRef}
              className="w-[3px] bg-gradient-to-t from-[#aa4aff] to-[#1777cb] transition-all duration-300 ease-in-out origin-top"
              style={{ height: "0px" }}
            />
          </div>

          {/* Timeline items */}
          <ul className="space-y-10 relative z-20 pb-20">
            {timelineData.map((item, index) => (
              <li
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`timeline-item relative flex flex-col md:flex-row items-center md:items-stretch justify-between mx-auto
                            ${
                              index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                            }
                            py-4`}
              >
                {/* STICKY YEAR PILL (sticks only inside this LI) */}
                <div className="md:block hidden absolute left-1/2 inset-y-0 -translate-x-1/2 z-30 pointer-events-none">
                  <div className="relative h-full">
                    <div
                      className={`sticky top-24 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold
                                  bg-white transition-all duration-300 pointer-events-auto
                                  ${
                                    activeIndex === index
                                      ? "border-[2px] border-[#1777cb] text-[#1777cb]"
                                      : "border border-[#d3d3d3] text-[#aaa]"
                                  }`}
                    >
                      {item.year}
                    </div>
                  </div>
                </div>

                {/* Left/Right content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pe-20" : "md:ps-20"
                  }`}
                >
                  <motion.h4
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left"
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-600 md:text-lg leading-relaxed text-justify"
                  >
                    {item.description}
                  </motion.p>
                </div>

                <div
                  className={`w-full md:w-1/2 px-6 mt-8 md:mt-0 flex justify-center ${
                    index % 2 === 0 ? "md:ps-20" : "md:pe-20"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`SkyNet ${item.year}`}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkynetTimeline;
