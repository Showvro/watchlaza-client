import React from "react";

const ExploreBanner = ({ children }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url("https://i.ibb.co/Nm5w1F1/wallpaperflare-com-wallpaper-3.jpg") center center/cover fixed no-repeat`,
      }}
      className=""
    >
      <div className="my-container">
        <div
          style={{ minHeight: "60vh" }}
          className="flex items-center justify-center"
        >
          {children ? (
            children
          ) : (
            <div className="text-white text-left flex items-center justify-center flex-col">
              <p className="sm:text-2xl md:text-3xl lg:text-5xl font-mono font-semibold text-white">
                Explore Your Watches form Watch
                <span className="text-purple-600">laza</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreBanner;
