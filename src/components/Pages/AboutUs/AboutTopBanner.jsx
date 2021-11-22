import React from "react";

const AboutUsBanner = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url('https://i.ibb.co/WnZMN7p/watch-omega-seamaster-1957-chronometer-wallpaper-preview.jpg') center center/cover fixed no-repeat",
      }}
      className="z-0"
    >
      <div className="my-container">
        <div
          style={{ minHeight: "60vh" }}
          className="flex items-center justify-center"
        >
          <div className="text-white flex items-center justify-center flex-col">
            <h1 className="sm:text-2xl md:text-3xl lg:text-5xl font-mono font-semibold text-white">
              Welcome to{" "}
              <p className="font-grandHotel inline-block sm:text-3xl md:text-4xl lg:text-6xl">
                Watch
                <span className="text-purple-600">laza</span>
              </p>
            </h1>
            <p className="sm:text-2xl md:text-3xl lg:text-5xl font-mono font-semibold text-white">
              All our service at you door -_-
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
