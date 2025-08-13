import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Acquisition = () => {
  return (
    <motion.div
      className="py-40"
      whileInView={{ y: 0 }}
      initial={{ y: 100 }}
      transition={{ type: "spring", stiffness: 120, duration: 2 }}
    >
      {/* Overlay card */}
      <div className="glass-container flex items-center glass-container--rounded px-4 py-3">
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>

        <div className="glass-content glass-content--inline text-start">
          <div className="md:p-8 py-8 px-2 w-[90%] md:w-[100%] text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary_color mb-2">
              Aircraft Acquisition
            </h2>
            <p className="font-semibold text-lg mb-8">
              Seek First To Understand, Then To Be Understood; Mason Amelia
              Shall:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-base text-gray-200">
              <li className="mb-2">Identify Suitable Make/Model Aircraft.</li>
              <li className="mb-2">
                Prepare Materials, Such As: Letters, Electronic Newsletters To
                Listers Sellers To Explore Off-Market, As Well As, Publicly
                Available Opportunities.
              </li>
              <li className="mb-2">
                Present Candidate Aircraft And Conduct Price/Value Analysis.
              </li>
              <li className="mb-2">
                Construct LOI, Provide Contracts, Negotiate Terms And Final
                Contract Price, And Advise Through All Phases Of Due Diligence.
              </li>
              <li className="mb-2">
                Guide Client To Ancillary Service Providers, Such As: Tax/Legal,
                Escrow, Financial, Insurance, And Training - All While
                Overseeing Entire Process.
              </li>
            </ol>
            <div className="mt-6">
              <Button buttonLabel="V1 Rotate" onClick="/contact" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Acquisition;
