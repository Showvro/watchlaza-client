import React from "react";

const Newsletter = () => {
  return (
    <div className="my-container px-6 pb-6 md:w-2/3 xl:w-auto mx-auto flex flex-col justify-evenly xl:flex-row">
      <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
        <img
          src="https://i.ibb.co/DzXHCdd/undraw-Opened-re-i38e.png"
          alt="Envelope with a newsletter"
          className="h-full xl:w-full lg:w-1/2 w-full "
        />
      </div>
      <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28  sm:-ml-10 lg:-ml-0">
        <h1 className="text-2xl md:text-3xl font-semibold font-mono leading-10 text-purple-600 mb-4 text-center xl:text-left md:mt-0 mt-4">
          Subscribe to our newsletter
        </h1>
        <p className="text-base leading-normal text-gray-600 text-center xl:text-left">
          Whether any offer or any updates on our services, we will send you. We
          will keep you updated.
        </p>
        <div className="flex items-stretch mt-12">
          <input
            className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-purple-600 p-5 w-4/5 border border-transparent focus:outline-none focus:ring-0 placeholder-purple-500"
            type="email"
            placeholder="Your Email"
          />
          <button className="w-32 rounded-l-none border-2 border-purple-600 hover:bg-white hover:text-purple-600 bg-purple-600 rounded text-base font-medium leading-none text-white p-5 focus:outline-none transition-all hover:shadow-lg">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
