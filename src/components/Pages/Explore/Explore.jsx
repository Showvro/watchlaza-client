import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import Product from "../../Shared/Product/Product";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ExploreBanner from "./Banner/ExploreBanner";

const Explore = () => {
  const [products, setProducts] = useState([]);

  //get explore
  useEffect(() => {
    document.title = "Explore | Watchlaza";
    fetch("https://pacific-waters-14584.herokuapp.com/watches")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Nav />
      <ExploreBanner />
      <div style={{ padding: "5rem 0" }} className="my-container">
        <div className="text-purple-600 sm:text-2xl lg:text-4xl font-semibold font-mono text-center mb-10 pt-11 pb-24">
          Explore Our Watches
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products?.map((pd) => (
            <Product key={pd._id} product={pd} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
