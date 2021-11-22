import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Nav from "../../Shared/Nav/Nav";
import ExploreBanner from "../Explore/Banner/ExploreBanner";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const PlaceOrder = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const [orderData, setOrderData] = useState({
    name: user?.displayName || user?.email?.split("@")[0],
    email: user?.email,
    address: "Khulna",
    quantity: 1,
  });

  //getting prosuct
  useEffect(() => {
    fetch(`https://pacific-waters-14584.herokuapp.com/watch/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  //get input
  const onBlurHandler = (e) => {
    const newData = { ...orderData };
    newData[e.target.name] = e.target.value;
    setOrderData(newData);
  };

  //order submit
  const makeOrder = (e) => {
    e.preventDefault();
    const finalData = {
      email: user?.email,
      order: {
        ...orderData,
        productId: product._id,
        status: "pending",
      },
      product: { ...product },
    };

    Swal.fire({
      title: "Hey! Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes place Order!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://pacific-waters-14584.herokuapp.com/order", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(finalData),
        }).then(history.push("/dashboard"));
      }
    });
  };

  return (
    <>
      <ScrollToTop />
      <Nav />
      <ExploreBanner>
        <div
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), center center/cover",
          }}
          className="lg:py-5 sm:mt-24 lg:mt-20 lg:px-30 sm:px-30 sm:py-10 md:py-10 bg-gray-900"
        >
          <h1 className="text-purple-600 mt-10 lg:mt-0 text-2xl lg:text-4xl text-center mb-1">
            Thank you for choosing us!
          </h1>
          <h1 className="text-white text-xl text-center mb-3">
            You order will shipped at -
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
            <div className="md:p-10 lg:p-10 mx-auto text-center mt-3">
              <img
                src={product?.img}
                alt=""
                className="mb-4 w-6/8 object-cover"
              />
              <div className="">
                <h2 className="text-purple-600 text-center text-xl sm:text-xl">
                  {product?.name}
                </h2>
                <div className="flex flex-col space-y-2 text-white md:p-5">
                  <div className="">Quantity: {orderData.quantity}</div>
                  <div className="">
                    {" "}
                    Total Price: $
                    {(product?.price * orderData.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={makeOrder}
              className="mb-0 space-y-3 sm:mt-10 lg:-mt-20 sm:px-5 flex flex-col items-center justify-center w-11/12 mx-auto"
            >
              <div className="w-10/12 mx-auto">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name:
                </label>
                <div className="mt-1">
                  <input
                    onChange={onBlurHandler}
                    defaultValue={orderData.name}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="focus:ring-purple-300 focus:border-purple-600 w-full"
                  />
                </div>
              </div>

              <div className="w-10/12 mx-auto">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  E-Mail:
                </label>
                <div className="mt-1">
                  <input
                    onChange={onBlurHandler}
                    defaultValue={orderData.email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="current-email"
                    required
                    className="focus:ring-purple-300 focus:border-purple-600 w-full"
                  />
                </div>
              </div>

              <div className="w-10/12 mx-auto">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-white"
                >
                  Shipping Location:
                </label>
                <div className="mt-1">
                  <textarea
                    defaultValue={orderData.address}
                    onChange={onBlurHandler}
                    id="address"
                    name="address"
                    autoComplete="address"
                    required
                    className="focus:ring-purple-300 focus:border-purple-600 w-full"
                  />
                </div>
              </div>

              <div className="w-10/12 mx-auto">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-white"
                >
                  Quantity:
                </label>
                <div className="mt-1">
                  <input
                    min={1}
                    max={5}
                    onChange={onBlurHandler}
                    defaultValue={orderData.quantity}
                    id="quantity"
                    name="quantity"
                    type="number"
                    autoComplete="current-quantity"
                    required
                    className="focus:ring-purple-300 focus:border-purple-600 outline-none w-full"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center w-10/12 mx-auto py-3">
                <input
                  defaultChecked
                  id="terms-and-privacy"
                  name="terms-and-privacy"
                  type="checkbox"
                  className="focus:ring-purple-300 focus:border-purple-600 text-purple-600"
                />

                <div className="">
                  <label
                    htmlFor="terms-and-privacy"
                    className="ml-2 text-sm text-white"
                  >
                    I agree to the{" "}
                    <Link
                      to="/"
                      className="text-purple-600 hover:text-purple-500"
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/"
                      className="text-purple-600 hover:text-purple-500"
                    >
                      Policy
                    </Link>
                    .
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-w-10/12 mx-auto btn btn-primary"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </ExploreBanner>
    </>
  );
};

export default PlaceOrder;
