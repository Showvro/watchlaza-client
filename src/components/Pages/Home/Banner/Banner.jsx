import React from "react";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(https://i.ibb.co/9vqTr8R/wallpaperflare-com-wallpaper.jpg) center center/cover fixed no-repeat",
      }}
    >
      <div className="container">
        <div className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-white text-left"
            >
              <p className="mb-4 text-lg uppercase tracking-wider">
                Choose your style from the collection of
              </p>
              <h2 className="text-8xl font-grandHotel">
                Watch<span className="text-purple-600">laza</span>
              </h2>

              <button
                onClick={() => history.push("/explore")}
                className="btn btn-primary flex items-center rounded-none py-2 px-4 text-xl ml-2 mt-3 font-semibold transition-all"
              >
                <span>Explore</span>
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
      </div>
    </div>
  );
};

export default Banner;
