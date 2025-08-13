import React from "react";
import BlogDetail from "../components/BlogDetail";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReviewForm from "../components/ReviewForm";

const BlogDetailPage = () => {
  return (
    <>
      <Navbar />

      <BlogDetail />

      <Footer />
    </>
  );
};

export default BlogDetailPage;
