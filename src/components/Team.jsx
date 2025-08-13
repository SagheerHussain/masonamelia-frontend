import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Button from "./Button";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Jesse Adams",
    phone: "(210) 882-9658",
    email: "jesse@masonamelia.com",
    title: "President | Sales & Acquisitions ",
    image:
      "https://static.wixstatic.com/media/04f737_2ec51bc4e12347b6adec7750f2ac3e88~mv2.jpg/v1/crop/x_157,y_249,w_990,h_1003/fill/w_315,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/JA_edited.jpg",
    facebook: "https://www.facebook.com/masonamelia.aviation",
    twitter: "https://twitter.com/masonamelia",
    instagram: "https://www.instagram.com/lookingforhigher/",
    linkedin: "https://www.linkedin.com/in/jesse-j-adams/",
  },
  {
    name: "Melissa Patterson",
    phone: "(432) 553-4241",
    email: "operations@masonamelia.com",
    title: "Operations Manager",
    image:
      "https://static.wixstatic.com/media/04f737_2c4aaa0cafea4b48b8e2002eb3bce55e~mv2.jpg/v1/fill/w_315,h_305,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6355_edited_edited.jpg",
    facebook: "https://www.facebook.com/masonamelia.aviation",
    twitter: "https://twitter.com/masonamelia",
    instagram: "https://www.instagram.com/masonamelia.aircraftsales/",
    linkedin: "https://www.linkedin.com/in/melissa-patterson-7aa10235/",
  },
];

const team = [
  {
    name: "Donny Gabriel",
    phone: "(678) 570-8155",
    email: "donny@masonamelia.com",
    title: "Sales & Acquisitions | Flight Ops",
    image:
      "https://static.wixstatic.com/media/04f737_6f72f58bab424ea4aefd8c173fe906e6~mv2.jpg/v1/crop/x_1779,y_102,w_3570,h_3845/fill/w_315,h_339,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0042_7992_RT.jpg",
    facebook: "https://www.facebook.com/profile.php?id=61556325614410",
    twitter: "https://twitter.com/masonamelia",
    instagram: "https://www.instagram.com/masonamelia.aircraftsales/",
    linkedin: "https://www.linkedin.com/in/donnygabriel1/",
  },
  {
    name: "Peyton Lindbloom",
    phone: "(720) 300-2145",
    email: "peyton@masonamelia.com",
    title: "Sales & Acquisitions | Turbine Aircraft",
    image:
      "https://static.wixstatic.com/media/04f737_ac4365d295d54e5883ac79cd35289c15~mv2.jpg/v1/crop/x_0,y_70,w_2624,h_3140/fill/w_315,h_377,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-1.jpg",
    facebook: "https://www.facebook.com/masonamelia.aviation",
    twitter: "https://twitter.com/masonamelia",
    instagram: "https://www.instagram.com/peytonlindbloom/",
    linkedin: "https://www.linkedin.com/in/peyton-lindbloom-893333305/",
  },
  {
    name: "Carlos Lopez",
    phone: "(720) 300-2145",
    email: "peyton@masonamelia.com",
    title: "Videographer | Media Strategist",
    image:
      "https://static.wixstatic.com/media/04f737_e557ad92bfa74140ae49b2f7748812cf~mv2.jpg/v1/crop/x_0,y_3,w_1837,h_2304/fill/w_315,h_395,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5396_edited.jpg",
    facebook: "https://www.facebook.com/masonamelia.aviation",
    twitter: "https://twitter.com/masonamelia",
    instagram: "https://www.instagram.com/masonamelia.aircraftsales/",
    linkedin: "https://www.linkedin.com/in/carlos-lopez/",
  },
  {
    name: "Tom Donaldson",
    phone: "(218) 340-6153",
    email: "tom@masonamelia.com",
    title: "Sales & Acquisitions | Flight Ops",
    image:
      "https://static.wixstatic.com/media/04f737_43879c33c26c412691ae5bb35c893616~mv2.jpg/v1/crop/x_191,y_88,w_2159,h_2076/fill/w_315,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tom_008_JPG.jpg",
    facebook: "https://www.facebook.com/masonamelia.aviation",
    twitter: "https://twitter.com/masonamelia",
    instagram: "https://www.instagram.com/cirrusexpert/",
    linkedin: "https://www.linkedin.com/in/tom-donaldson/",
  },
  {
    name: "Melissa Adams",
    phone: "(218) 340-6153",
    email: "info@masonamelia.com",
    title: "Data Analyst | Operations Assistant",
    image:
      "https://static.wixstatic.com/media/04f737_049a22dc06c746b5b1ecdea75206a585~mv2.jpg/v1/crop/x_33,y_0,w_567,h_712/fill/w_315,h_395,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Melissa.jpg",
    facebook: "https://www.facebook.com/masonamelia.aviation",
    twitter: "https://www.youtube.com/c/lookingforhigher",
    instagram: "https://www.instagram.com/missyjolove/",
    linkedin: "https://www.linkedin.com/in/melissa-martinez-adams/",
  },
  {
    name: "Nick Buccellato",
    phone: "(518) 578-0609",
    email: "nick@masonamelia.com",
    title: "Sales & Acquisitions | Flight Ops",
    image:
      "https://static.wixstatic.com/media/04f737_5e91991100554352809c6307f5e17ca0~mv2.jpg/v1/crop/x_532,y_680,w_1611,h_2020/fill/w_315,h_395,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4432_JPG.jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=100010304431418&sk=photos_by",
    twitter: "https://twitter.com/masonamelia",
    instagram: "https://www.instagram.com/masonamelia.aircraftsales/",
    linkedin: "https://www.linkedin.com/in/nicholas-buccellato/",
  },
];

const TeamSection = () => {
  const navigate = useNavigate();

  return (
    <section id="team" className="text-white py-20 md:pb-20 md:pt-0 px-4 md:px-10">
     
        <div className="container lg:h-[90vh] flex items-center">
          <div className="lg:flex flex-row justify-center mx-auto md:mb-20 gap-4">
            <div
              className={`lg:w-[30%] xl:w-[50%] glass-container md:mb-0 mb-4 lg:min-h-[375px] flex items-center`}
              style={{
                borderRadius: "0px",
                boxShadow:
                  "0 6px 6px rgba(0, 0, 0, 0.02), 0 0 20px rgba(0, 0, 0, 0.1);",
                height: "100%",
              }}
            >
              <div className="glass-filter"></div>
              <div className="glass-overlay"></div>
              <div className="glass-specular"></div>
              <div
                className="glass-content flex flex-col"
                style={{ padding: "3rem 1rem" }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[2rem] lg:text-[1.4rem] xl:text-[2rem] 2xl:text-6xl font-bold text-[#fff]"
                  style={{ lineHeight: "1.2" }}
                >
                  A Team of Pilots and{" "}
                  <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                    Aviation Experts
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base xl:text-xl text-center max-w-2xl mt-[30px] font-light"
                >
                  Built by aviators with decades of insight, Mason Amelia
                  delivers unmatched clarity, strategy, and confidence in every
                  aircraft transaction.
                </motion.p>
              </div>
            </div>
            <div className="lg:w-[70%] xl:w-[50%] w-full partners grid md:grid-cols-2 gap-4 mt-4 lg:mt-0">
              {partners.map((member, idx) => (
                <div className="relative team-card rounded-xl overflow-hidden group mb-4">
                  <Link to={`/team/${idx}`}>
                    <div className="relative w-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full"
                        loading="lazy"
                      />
                      <div className="transition-all duration-300 group-hover:h-[100%] absolute top-0 left-0 w-full h-0 bg-black opacity-0 lg:opacity-60 z-[0]"></div>
                    </div>
                  </Link>
                  {/* <div className="absolute top-[-20%] group-hover:top-[20%] transition-all duration-500 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Button buttonLabel="View" onClick={`/team/2`} />
              </div> */}
                  <div className="absolute bottom-0 left-0 right-0 rounded-[100px] h-[180px] lg:h-[120px] group-hover:h-[185px] transition-all duration-500">
                    <div className="glass-container rounded-xl flex items-center justify-center glass-container--rounded px-4 py-3" style={{ borderRadius: "0" }}>
                      <div className="glass-filter"></div>
                      <div className="glass-overlay"></div>
                      <div className="glass-specular"></div>

                      <div className="glass-content glass-content--inline justify-center px-4">
                        <div className="relative w-full py-5 px-2">
                          <h2 className="text-lg xl:text-xl font-semibold text-white px-3">
                            {member.name}
                          </h2>
                          <p className="text-xs xl:text-sm p-2 font-light text-gray-400">
                            {member.email}
                          </p>
                          <p className="text-xs xl:text-sm font-light text-gray-400 mb-4 px-3">
                            {member.title}
                          </p>
                          <div className="social-icons flex items-center gap-4 justify-center px-3">
                            <a href={member.facebook} target="_blank">
                              <FaFacebook className="hover:text-[#0866ff] text-xl transition cursor-pointer" />
                            </a>
                            <a href={member.twitter} target="_blank">
                              <FaYoutube className="hover:text-[#ff0000] text-xl transition cursor-pointer" />
                            </a>
                            <a href={member.instagram} target="_blank">
                              <FaInstagram className="hover:text-[#c3407b] text-xl transition cursor-pointer" />
                            </a>
                            <a href={member.linkedin} target="_blank">
                              <FaLinkedin className="hover:text-[#0a66c2] text-xl transition cursor-pointer" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
   
      <div className="container">
        <div className="mx-auto">
          <h5 className="text-6xl font-semibold text-center mb-12 md:block hidden">Our Team</h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div className="relative team-card rounded-xl overflow-hidden group">
              <Link to={`/team/${idx}`}>
                <div className="relative w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full"
                  />
                  <div className="transition-all duration-300 group-hover:h-[100%] absolute top-0 left-0 w-full h-0 bg-black opacity-0 lg:opacity-60 z-[0]"></div>
                </div>
              </Link>
              {/* <div className="absolute top-[-20%] group-hover:top-[20%] transition-all duration-500 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Button buttonLabel="View" onClick={`/team/2`} />
              </div> */}
              <div className="absolute bottom-0 left-0 right-0 rounded-[100px] h-[190px] md:h-[130px] lg:group-hover:h-[190px] transition-all duration-500">
                <div className="glass-container flex items-center justify-center glass-container--rounded px-4 py-3" style={{ borderRadius: "0" }}>
                  <div className="glass-filter"></div>
                  <div className="glass-overlay"></div>
                  <div className="glass-specular"></div>

                  <div className="glass-content glass-content--inline justify-center">
                    <div className="relative w-full py-5 px-2">
                      <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-white">
                        {member.name}
                      </h2>
                      <p className="text-sm py-2 text-gray-400">
                        {member.email}
                      </p>
                      <p className="text-sm text-gray-400 mb-4">
                        {member.title}
                      </p>
                      <div className="social-icons flex items-center gap-4 justify-center">
                        <a href={member.facebook} target="_blank">
                          <FaFacebook className="hover:text-[#0866ff] text-xl transition cursor-pointer" />
                        </a>
                        <a href={member.twitter} target="_blank">
                          <FaYoutube className="hover:text-[#ff0000] text-xl transition cursor-pointer" />
                        </a>
                        <a href={member.instagram} target="_blank">
                          <FaInstagram className="hover:text-[#c3407b] text-xl transition cursor-pointer" />
                        </a>
                        <a href={member.linkedin} target="_blank">
                          <FaLinkedin className="hover:text-[#0a66c2] text-xl transition cursor-pointer" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
