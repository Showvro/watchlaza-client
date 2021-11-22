import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center  my-10">
      <Loader type="Oval" color="#7C3AED" height={100} width={100} />
    </div>
  );
};

export default Spinner;
