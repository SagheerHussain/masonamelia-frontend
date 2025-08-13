import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import ReviewForm from "./ReviewForm";
import Comments from "./Comments";

const BlogDetail = () => {
  return (
    <div className="min-h-screen bg-white text-black px-4 md:px-12 pt-20 md:pt-10 pb-20">
      <div className="container">
        {/* Header */}
        <div className="flex md:flex-row flex-col md:items-center justify-between mb-4">
          <h3 className="max-w-4xl text-[1.3rem] md:text-xl xl:text-3xl mb-4">
            Unveiling the N252DA Diamond DA40 NG: A Next-Level Flying Experience
          </h3>
          <div className="tag-container mb-4">
            <div className="tag-left-arrow"></div>
            <div className="flex items-center gap-2 px-4 py-[9px] bg-[#222] text-white text-sm font-semibold">
              <span className="w-2 h-2 bg-[#fff] rounded-full"></span>
              Charter Jets
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl mb-10">
          <img
            src="https://img.freepik.com/premium-photo/black-business-jet-taxiing-from-runway_527900-451.jpg?semt=ais_hybrid&w=740&q=80"
            alt="blog visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Info */}
        <div className="">
          <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-2">
              <FaUserCircle className="text-lg text-pink-500" /> by Donny
              Gabriel
            </span>
            <span className="flex items-center gap-2">
              <BsCalendarDate className="text-lg text-blue-600" /> 01 August,
              2025
            </span>
          </div>

          {/* Title */}
          {/* <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-4">
            Having experience with creative studio and it’s the ultimate
            creative factory version of this planet.
          </h2> */}

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed text-base mb-4">
            Meet the N252DA — a 2020 Diamond DA40 NG that represents the perfect
            harmony of innovation, efficiency, and elevated luxury in the world
            of aviation. With its powerful Austro AE300 turbo-diesel engine and
            FADEC technology, this aircraft offers an exceptional balance of
            performance and pilot ease. Designed for modern aviators, its fuel
            efficiency and reliable performance make it ideal for both
            cross-country journeys and advanced IFR training.
          </p>
          <p className="text-gray-700 leading-relaxed text-base mb-4">
            Inside the cockpit, Garmin’s G1000 NXi avionics suite paired with
            GFC700 autopilot ensures advanced navigation and a seamless flight
            experience. Beyond performance, comfort is front and center — from
            panoramic canopy views to climate control that adapts to every
            season. Whether you’re flying for business, training, or leisure,
            the N252DA proves that flying smarter can also mean flying in style.
          </p>
        </div>

        <ReviewForm />
        <Comments />
      </div>
    </div>
  );
};

export default BlogDetail;
