import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Button from "./Button";
import contactBanner from "/images/contact.png";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Contact = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <section
        id="contact"
        className={`relative z-[1] ${location.pathname !== "/contact" ? "lg:h-full xl:h-screen" : "xl:h-[90vh]"}  flex items-center `}
        style={{
          backgroundImage: `${
            location.pathname !== "/contact" ? `url(${contactBanner})` : "none"
          }`,
          backgroundSize: `${location.pathname !== "/contact" ? "cover" : ""}`,
          backgroundPosition: `${
            location.pathname !== "/contact" ? "center" : ""
          }`,
          backgroundRepeat: `${
            location.pathname !== "/contact" ? "no-repeat" : ""
          }`,
        }}
      >
        {location.pathname !== "/contact" && (
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[0]"></div>
        )}
        {/* Contact Section */}
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div
            className={`relative rounded-2xl shadow-md lg:h-auto h-[350px] ${
              location.pathname === "/contact" && isMobile ? "mt-[15vh]" : ""
            } `}
          >
            <div
              className="liquid-glass flex flex-col justify-center "
              style={{ padding: "20px 40px" }}
            >
              <div className="liquid-glass--bend" />
              <div className="liquid-glass--face" />
              <div className="liquid-glass--edge" />
              <div
                className="
                relative
                rounded-xl flex flex-col md:justify-around
                lg:py-0 py-4
                h-full w-full
             "
              >
                <div>
                  <div>
                    <h2 className="text-4xl font-bold mb-2 text-white">
                      Contact us
                    </h2>
                    <p className="mb-6 text-sm text-gray-200">
                      Say something to start a live chat!
                    </p>
                  </div>

                  <div>
                    {/* <div className="flex items-center gap-3 mb-4 text-white">
                      <FaPhoneAlt className="text-lg" />
                      <span>+9234567890</span>
                    </div> */}
                    <div className="flex items-center gap-3 mb-4 text-white">
                      <FaEnvelope className="text-lg" />
                      <a href="mailto:info@masonamelia.com">
                        info@masonamelia.com
                      </a>
                    </div>
                    <div className="flex gap-3 mb-6 pt-1 text-white">
                      <FaMapMarkerAlt className="text-lg mt-1" />
                      <span className="max-w-sm">
                        Birmingham, AL Duluth, MN San Antonio, TX Scottsdale, AZ
                        Upstate, NY
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <FaLinkedinIn
                    size={24}
                    className="text-blue-400 cursor-pointer"
                  />
                  <FaFacebookF
                    size={24}
                    className="text-blue-400 cursor-pointer"
                  />
                  <FaInstagram
                    size={24}
                    className="text-pink-400 cursor-pointer"
                  />
                  <FaYoutube
                    size={24}
                    className="text-red-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-transparent bg-opacity-40 p-8 rounded-2xl z-[2]">
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm text-white mb-2 inline-block">
                  First name:
                </label>
                <input
                  type="text"
                  className="w-full p-3 text-white focus:outline-none bg-transparent border border-gray-600 rounded-lg mt-1"
                  placeholder="Enter name"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-white mb-2 inline-block">
                  Phone:
                </label>
                <input
                  type="text"
                  className="w-full p-3 text-white focus:outline-none bg-transparent border border-gray-600 rounded-lg mt-1"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-white mb-2 inline-block">
                  Email:
                </label>
                <input
                  type="email"
                  className="w-full p-3 text-white focus:outline-none bg-transparent border border-gray-600 rounded-lg mt-1"
                  placeholder="Enter Email"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-white mb-2 inline-block">
                  Subject:
                </label>
                <input
                  type="text"
                  className="w-full p-3 text-white focus:outline-none bg-transparent border border-gray-600 rounded-lg mt-1"
                  placeholder="Enter subject"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-white mb-2 inline-block">
                  Message:
                </label>
                <textarea
                  className="w-full p-3 text-white focus:outline-none bg-transparent border border-gray-600 rounded-lg mt-1"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-right">
                <Button buttonLabel="Send" isContact={true} />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
