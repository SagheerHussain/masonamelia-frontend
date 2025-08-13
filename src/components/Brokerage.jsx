import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Brokerage = () => {
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
              Aircraft Brokerage
            </h2>
            <p className="font-semibold text-lg mb-8">
              Professional, Full Time Brokerage Services:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-base text-gray-200">
              <li className="mb-2">
                Advertising. Mason Amelia Will Coordinate And Pay All Costs Associated With Photographing And Marketing (Postage, Telephone, Web) That It Deems Desirable In Promoting The Sale Of Your Aircraft.
              </li>
              <li className="mb-2">
                Pricing Accuracy. Exclusive & Proprietary Market Insights And Data, Manually Collected And Leveraged By MA.
              </li>
              <li className="mb-2">
                Sales Network. You Aircraft Listing Will Be Shared With Hundreds Of Prospective Buyers, Trusted External Brokers And Ancillary Services Partners To Quickly Spread The Word Of Your New Listing!
              </li>
              <li className="mb-2">
                Project Management. Oversight Of Entire Transaction, Ensuring Qualified Buyers Are Enabled To Transact Quickly And Satisfactorily.
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

export default Brokerage;
