import React from "react";
import Ratings from "../../../Shared/Ratings/Ratings";

const Review = ({ review }) => {
  const { name, img, rating, message } = review;
  return (
    <div className="shadow mx-2 px-2 py-8 transform hover:-translate-y-5 hover:shadow-lg transition-all">
      <div className="flex flex-col items-center justify-center mx-4">
        <img className="rounded-full h-20 w-20" src={img} alt="User" />
        <h2 className="text-xl text-purple-600 mt-4 font-semibold">{name}</h2>
        <p className="text-justify w-72 my-5 mx-auto text-gray-700">
          {message.slice(0, 100)}
        </p>
        <Ratings ratings={rating} className="mb-8" />
      </div>
    </div>
  );
};

export default Review;
