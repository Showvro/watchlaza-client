import React, { useEffect } from "react";

const Payment = () => {
  useEffect(() => {
    document.title = "Make Payment | Watchlaza";
  }, []);

  return (
    <div className="w-2/3 flex flex-col items-center justify-center mx-auto  h-full py-10">
      <h3 className="text-2xl text-purple-500 font-mono font-semibold">
        No payment method available, we are working on it.
      </h3>
      <img
        className="h-full mt-24"
        src="https://i.ibb.co/s9CMrkg/undraw-Pair-programming-re-or4x.png"
        alt=""
      />
    </div>
  );
};

export default Payment;
