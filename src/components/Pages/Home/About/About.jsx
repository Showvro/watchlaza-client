import React from "react";

const About = ({ children }) => {
  return (
    <div className="">
      <div className="my-container">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="p-10">
            <h3 className="sm:text-3xl lg:text-5xl py-2 font-semibold font-grandHotel mb-4">
              What's
              <div className="text-5xl font-grandHotel inline-block ml-3">
                <h1>
                  Watch<span className="text-purple-600">laza</span>
                </h1>
              </div>
            </h3>
            <p className="text-gray-500 text-justify">
              Watchlaze means a log to us. Its our dream project. We are serving
              you our products more that 05 Years. From 2016 and now 2021, Till
              now we are getting best wishes for our service.
            </p>
          </div>
          <div className="p-10">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover transform transition hover:scale-110"
                src="https://i.ibb.co/88B5gbf/wallpaperflare-com-wallpaper-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default About;
