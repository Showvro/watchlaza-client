import React from "react";

const Categories = () => {
  return (
    <div className="my-container grid grid-cols-1 gap-8 md:grid-cols-3 md:-mt-48">
      <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transform transition hover:-translate-y-5">
        <div className="h-80 overflow-hidden">
          <img
            className="w-full object-cover"
            src="https://i.ibb.co/R3DdxMh/20171018-135342.jpg"
            alt="Men's Watch"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-700 text-center">
            Men's Watch
          </div>
          <p className="text-gray-700 text-base"></p>
        </div>
      </div>

      <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transform transition hover:-translate-y-5">
        <div className="h-80 overflow-hidden">
          <img
            className="w-full"
            src="https://i.ibb.co/Hqv7QFh/cebe45be51bc399ec510a81ce6ef3a23.jpg"
            alt="Woman's Watch"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-700 text-center">
            Woman's Watch
          </div>
          <p className="text-gray-700 text-base"></p>
        </div>
      </div>

      <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transform transition hover:-translate-y-5">
        <div className="h-80 overflow-hidden">
          <img
            className="w-full"
            src="https://i.ibb.co/xLKKgCM/photo-1544117519-31a4b719223d-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-Nnx8-YXBwb-GUl-Mj-B3-YXRja-Hxlbnww.jpg"
            alt="Smart Watch"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-700 text-center">
            Smart Watch
          </div>
          <p className="text-gray-700 text-base"></p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
