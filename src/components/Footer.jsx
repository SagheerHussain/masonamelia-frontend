import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaMapMarker,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#15161c] py-10 relative px-4">
      <div className="container px-5">
        <div className="flex lg:flex-row flex-col justify-between gap-6">
          {/* Logo Section */}
          <div className="logo lg:w-[60%] w-full">
            <Link to={"/"}>
              <img
                src={
                  "https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_180,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%201x,%20https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_360,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%202x"
                }
                className="w-44 md:w-48"
                alt=""
              />
            </Link>
            <p className="mt-8 text-white lg:max-w-lg text-start md:text-justify">
              Mason Amelia delivers advanced aviation services with precision,
              reliability, and innovation across the U.S. Proudly veteran-owned,
              we are committed to excellence in every flight and every client
              relationship.
            </p>
          </div>

          <div className="lg:mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            {/* Company Links */}
            <div>
              <h3 className="capitalize text-lg font-semibold mb-6 text-white">
                Company
              </h3>
              <ul className="text-txt_light_color space-y-6">
                <li className="hover:text-tertiary_color text-[1.1rem] cursor-pointer transition">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-tertiary_color text-[1.1rem] cursor-pointer transition">
                  <Link to={"/showroom"}>Showroom</Link>
                </li>
                <li className="hover:text-tertiary_color text-[1.1rem] cursor-pointer transition">
                  <Link to={"/acquisition"}>Acquisitions</Link>
                </li>
                <li className="hover:text-tertiary_color text-[1.1rem] cursor-pointer transition">
                  <Link to={"/brokerage"}>Brokerage</Link>
                </li>
                <li className="hover:text-tertiary_color text-[1.1rem] cursor-pointer transition">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="hover:text-tertiary_color text-[1.1rem] cursor-pointer transition">
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="capitalize text-lg font-semibold mb-6 text-white">
                Locations
              </h3>
              <ul className="text-txt_light_color space-y-6">
                <li className="text-[1.1rem] transition">Birmingham, AL</li>
                <li className="text-[1.1rem] transition">Duluth, MN</li>
                <li className="text-[1.1rem] transition">Upstate, NY</li>
                <li className="text-[1.1rem] transition">San Antonio, TX</li>
                <li className="text-[1.1rem] transition">Scottsdale, AZ</li>
              </ul>
            </div>

            {/* Principal Office */}
            <div>
              <img
                src="https://static.wixstatic.com/media/04f737_cf652212a66e4f93a1dc1bf4607bd7aa~mv2.png/v1/fill/w_137,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Veteran%20Owned.png"
                alt="Veteran Owned"
                className=""
              />
              <div className="social-icons flex items-center gap-4 mt-10">
                <a href="https://www.linkedin.com/company/masonamelia/" target="_blank">
                  <FaLinkedinIn
                    size={24}
                    className="text-white hover:text-blue-400 cursor-pointer transition"
                  />
                </a>
                <a href="https://www.facebook.com/masonamelia.aviation" target="_blank">
                  <FaFacebookF
                    size={24}
                    className="text-white hover:text-blue-400 cursor-pointer transition"
                  />
                </a>
                <a href="https://www.instagram.com/masonamelia.aircraftsales/" target="_blank">
                  <FaInstagram
                  size={24}
                  className="text-white hover:text-pink-400 cursor-pointer transition"
                />
                </a>
                <a href="https://www.youtube.com/c/lookingforhigher" target="_blank">
                <FaYoutube
                  size={24}
                  className="text-white hover:text-red-500 cursor-pointer transition"
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5">
        <div className="w-full mt-12 border-t border-white/20 pt-4 flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-4 text-white text-xl">
          <p className="md:order-1 order-2 text-sm md:text-base text-start">
            © 2025 Mason Amelia. All rights reserved.
          </p>
          <div className="md:order-2 order-1 flex sm:flex-row flex-col md:items-center gap-6">
            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="bg-tertiary_color p-2 rounded">
                <FaMapMarkerAlt size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-txt_light_color max-w-[17rem]">
                  Birmingham, AL Duluth, MN San Antonio, TX Scottsdale, AZ
                  Upstate, NY
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="bg-tertiary_color p-2 rounded">
                <FaEnvelope size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-txt_light_color">
                  <a href="mailto:info@masonamelia.com">info@masonamelia.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
