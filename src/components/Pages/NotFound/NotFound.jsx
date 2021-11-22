import React from "react";
import { Link } from "react-router-dom";

const NotFount = () => {
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-52 gap-16 lg:gap-28 my-3">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/v30JLYr/Group-192-2.png"
          alt=""
        />
        <img
          className="hidden md:block lg:hidden"
          src="https://i.ibb.co/c1ggfn2/Group-193.png"
          alt=""
        />
        <img
          className="md:hidden"
          src="https://i.ibb.co/8gTVH2Y/Group-198.png"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 border-gray-400">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-purple-600">
          Hey! Looks like you've found the doorway to the great nothing
        </h1>
        <p className="py-2 text-base text-gray-500">
          The content you’re looking for doesn’t exist. Either it was removed,
          or you mistyped the link.
        </p>
        <div className="w-3/12 mx-auto">
          <Link to="/home">
            <button className="btn btn-primary rounded-none px-2 py-3 transition-all">
              Back home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFount;
