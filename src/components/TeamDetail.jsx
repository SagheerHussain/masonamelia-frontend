import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";

const TeamDetail = () => {
  return (
    <section className="text-white py-20 md:px-10">
      <div className="glass-container flex items-center glass-container--rounded px-4 py-3">
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>

        <div className="glass-content glass-content--inline">
          <div className="text-white p-6 rounded-xl mx-auto flex flex-col gap-6 items-start">
            <div className="flex justify-start flex-col md:flex-row w-full gap-8">
              {/* Image */}
              <motion.div
                className="w-full md:w-[40%]"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1 }}
              >
                <img
                  src="https://static.wixstatic.com/media/04f737_2ec51bc4e12347b6adec7750f2ac3e88~mv2.jpg/v1/crop/x_57,y_173,w_1179,h_1167/fill/w_415,h_411,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/JA_edited.jpg"
                  alt="Melissa Patterson"
                  className="object-cover rounded-lg border border-gray-700"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="text-start flex flex-col w-full md:w-[60%]"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1 }}
              >
                <h2 className="text-5xl md:text-6xl text-tertiary_color font-bold">
                  Melissa Patterson
                </h2>
                <p className="text-2xl text-gray-300 font-medium mb-8 mt-4">
                  Operations Manager
                </p>

                {/* Contact */}
                <motion.div
                  className="flex flex-col justify-center gap-4 text-sm text-gray-400 mb-4"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    <FaPhone size={22} />
                    <span className="ms-2 text-lg">(432) 553-4241</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiOutlineMail size={22} />
                    <span className="ms-2 text-lg">
                      Operations@Masonamelia.com
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Description Block */}
            <div className="text-start">
              <motion.h4
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-tertiary_color text-2xl font-semibold mb-4"
              >
                Seasoned Aviation Business Ops
              </motion.h4>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-base text-gray-300 leading-relaxed"
              >
                Melissa’s decade+ tenure in aviation started as inventory
                management for Deer Horn Aviation, authorized service center of
                Cessna (ASC) that also maintained a corporate jet shuttle for
                Halliburton. With guidance from her family aircraft base,
                Melissa successfully transitioned from charter at Chuck Yeager
                FBO to aircraft ownership and sales—overseeing onboarding of
                Citrix and scheduling NetJets. Now she tackles team tech
                innovation and closing.
              </motion.p>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-base text-gray-300 leading-relaxed mt-3"
              >
                Beyond her professional accomplishments, Melissa takes immense
                pride in her role as a mother, education advocate, and
                volunteer. She’s certified in aviation leadership, lean ops, and
                quality Corp. In her off time, Melissa enjoys coaching pageants,
                and the Texas Coast—getting lost in a book or unleashing inner
                Elon through crafting.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetail;
