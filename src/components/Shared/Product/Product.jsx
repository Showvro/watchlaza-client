import React from "react";
import { useHistory } from "react-router";
import Ratings from "../Ratings/Ratings";

const Product = ({ product }) => {
  const { _id, name, price, img, ratings, descriptions } = product;
  const history = useHistory();
  const buyNow = (id) => {
    history.push(`/placeOrder/${id}`);
  };

  return (
    <div className="flex flex-row items-center justify-center rounded px-4 py-5 bg-white flex-wrap shadow hover:shadow-lg transition-all overflow-hidden">
      <img
        className="w-3/4 transform hover:scale-110 transition-all"
        src={img}
        alt="Item"
      />
      <div className="flex flex-grow flex-col">
        <div>
          <h3 className="my-6 text-purple-600 font-semibold text-center text-xl">
            {name}
          </h3>
          <p className="text-gray-500 text-justify text-sm">{descriptions}</p>
        </div>
        <div className="flex flex-wrap flex-row justify-around items-center my-2">
          <Ratings ratings={ratings} />
          <p className="font-bold tracking-wider text-purple-600">${price}</p>
        </div>
        <div className="flex items-center justify-center mt-3">
          <button
            onClick={() => buyNow(_id)}
            className="btn btn-primary rounded-none py-2"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
