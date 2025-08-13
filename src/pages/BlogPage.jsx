import React from "react";
import BlogListing from "../components/BlogListing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage = () => {
  // useGsapScroll();

  return (
    <>
      <div className="bg-[#111218]">
        <Navbar />
      </div>
      <BlogListing />
      <Footer />
    </>
  );
};

export default BlogPage;
