import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "./Button";

const ReviewForm = () => {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() === "") return;

    console.log("User Review:", review); // or send to backend
    setReview(""); // clear field after submit
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className="text-lg mb-[20px]">Leave a Comment</h2>
      {/* <Rating
        name="simple-uncontrolled"
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
        defaultValue={0}
      /> */}
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your comment..."
        rows={4}
        className="w-full placeholder:text-gray-400 p-2 border-t border-b focus:outline-none focus:shadow-none border-gray-400 resize-none"
      />

      <Button
        buttonLabel="Submit"
        onClick="/team"
        bgColor="111218"
        arrowColor="#111218"
        txtColor="text-[#fff]"
        borderColor="border-gray-200"
        fillColor="fill-gray-200"
      />
    </form>
  );
};

export default ReviewForm;
