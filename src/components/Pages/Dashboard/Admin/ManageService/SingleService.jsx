import React from "react";
import Swal from "sweetalert2";

const SingleService = ({ service, deleteService }) => {
  //getting by props
  const { name, descriptions, price, img } = service;

  return (
    <div className="flex flex-row items-center justify-center rounded px-4 py-8 bg-white flex-wrap shadow hover:shadow-lg transition-all overflow-hidden">
      <img
        className="w-3/4 transform hover:scale-110 transition-all overflow-hidden"
        src={img}
        alt="Item"
      />
      <div>
        <h1 className="my-6 text-purple-600 font-semibold text-center text-xl">
          {name}
        </h1>
        <div className="flex items-center justify-between my-4">
          <p className="text-purple-600 font-semibold">${price}</p>
          <h1
            onClick={() => Swal.fire("We Will add this feature in future!")}
            className="text-sm px-3 py-1 bg-purple-100 text-purple-800 cursor-pointer"
          >
            Edit
          </h1>
        </div>
        <p className="text-gray-500 text-justify text-sm">{descriptions}</p>
      </div>
      <div className="flex items-center justify-center my-3">
        <button
          onClick={() => deleteService(service._id)}
          className="btn px-4 py-2 font-semibold text-lg bg-red-600 hover:bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleService;
