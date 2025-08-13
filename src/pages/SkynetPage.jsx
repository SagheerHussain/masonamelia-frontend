import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skynet from "../components/Skynet";
import SkynetAdvantage from "../components/SkynetAdvantage";
import ScrollToTop from "../components/ScrollToTop";
import SkynetTimeline from "../components/SkynetTimeline";
import CTABanner from "../components/CTABanner";
import banner from "/images/skynet/banner.webp";
import useMediaQuery from "@mui/material/useMediaQuery";
import ServiceRappleResearch from "../components/ServiceRappleResearch";

const SkynetPage = () => {
  // useGsapScroll();

  const media = useMediaQuery("(max-width: 767px)");

  const data = [
    {
      id: 1,
      title: "Materials & Outreach Preparation",
      description:
        "From buyer intent letters to targeted outreach, we craft compelling packages that open doors. This includes electronic newsletters, private inquiries, and public channel monitoring.",
    },
    {
      id: 2,
      title: "Buyer Intent Letters",
      description:
        "We craft personalized buyer letters that communicate credibility and serious intent — opening doors to off-market conversations and early negotiations with aircraft owners.",
    },
    {
      id: 3,
      title: "Opportunity Monitoring",
      description:
        "We continuously scan global listings, private boards, and industry networks to uncover real-time buying opportunities that match your desired aircraft class and criteria.",
    },
  ];

  return (
    <>
      <section
        className="md:sticky top-0 h-screen w-full bg-cover bg-center z-[0]"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(21, 22, 28, ${
            media ? ".9" : "1"
          }) ${media ? "100%" : "40%"}, rgba(21, 22, 28,0.3)), url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]"></div>
        <Navbar />
        {/* <div className="inset-0 absolute w-[50%] h-full bg-black opacity-85 z-[-1]"></div> */}
        <Skynet />
      </section>
      <SkynetAdvantage />
      {/* <ServiceRappleResearch
        data={data}
        highlightedTitle={"Pre Acquisition"}
        title={"Insight Curated For Precision"}
        description={
          "Before any deal takes flight, our team conducts thorough groundwork to ensure your acquisition strategy is sharp, informed, and advantageously positioned — from outreach to opportunity identification."
        }
      /> */}
      <SkynetTimeline />
      <section className="relative z-[0] py-20 bg-[#111218]">
        <div className="container px-5">
          <CTABanner />
        </div>
      </section>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default SkynetPage;
