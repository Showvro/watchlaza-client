import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Spinner from "../../../Shared/Loader/Spinner";
import Product from "../../../Shared/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  //home split product
  useEffect(() => {
    fetch("https://pacific-waters-14584.herokuapp.com/watches?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //dependency or spinner
  if (products.length < 1) {
    return <Spinner />;
  }

  return (
    <div className="py-12">
      <div className="my-container">
        <h3 className="text-purple-600 sm: text-2xl lg:text-4xl -mt-10 mb-10 text-center font-semibold font-mono">
          Our Popular Products
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>

        <div
          onClick={() => history.push("/explore")}
          className="flex items-center justify-center my-10"
        >
          <button className="flex items-center btn btn-primary rounded-none mt-8">
            All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
