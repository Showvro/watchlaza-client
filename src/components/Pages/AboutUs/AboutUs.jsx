import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import About from "../Home/About/About";
import Reviews from "../Home/Reviews/Reviews";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import AboutUsBanner from "./AboutTopBanner";

const AboutUs = () => {
  const history = useHistory();
  const goTOExplore = () => {
    history.push("/explore");
  };

  //title bar
  useEffect(() => {
    document.title = "About US | Watchlaza";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Nav />
      <AboutUsBanner />
      <div className="mt-11">
        <h1 className="text-purple-600 text-center sm:text-2xl lg:text-4xl font-semibold font-mono">
          About US
        </h1>
      </div>
      <About>
        <div className="flex items-center justify-center">
          <button
            onClick={goTOExplore}
            className="btn btn-primary rounded-none py-2"
          >
            Explore
          </button>
        </div>
      </About>
      <Reviews />
      <Footer />
    </div>
  );
};

export default AboutUs;
