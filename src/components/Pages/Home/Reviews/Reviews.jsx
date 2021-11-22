import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Review from "./Review";

const Reviews = () => {
  const [allReview, setReviews] = useState([]);

  //get review
  useEffect(() => {
    fetch("https://pacific-waters-14584.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mx-auto py-5">
      <h1 className="text-purple-600 font-semibold font-mono text-4xl text-center mb-10">
        Our Consumers Review
      </h1>
      <div className="container mx-auto">
        <div className="flex flex-row overflow-x-scroll gap-6 py-5">
          {allReview?.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
