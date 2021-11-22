import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { List, ListItem, Range } from "tailwind-mobile/react";
import useAuth from "../../../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(4.7);
  const [review, setReview] = useState({
    name: user?.displayName || user?.email?.split("@")[0],
    rating: rating + "",
    email: user?.email,
    message: "",
    img: "",
  });

  //title
  useEffect(() => {
    document.title = "Make Review | Watchlaza";
  }, []);

  const history = useHistory();

  //photo
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[name] = value;
    newReview.img =
      user?.photoURL ||
      "https://i.ibb.co/gZX0ZJh/Screenshot-2021-11-18-at-3-20-20-AM-removebg-preview.png";
    newReview.rating = rating.toString();
    setReview(newReview);
  };

  //form submit
  const formSubmit = (e) => {
    e.preventDefault();

    fetch("https://pacific-waters-14584.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thumbs up for the review 💌 ",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push("/");
        }
      });
  };

  return (
    <div className="md:w-full lg:w-2/6 mx-auto">
      <div className="bg-white py-12 px-6 shadow sm:px-10">
        <form onSubmit={formSubmit} className="mb-0 space-y-6">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <div className="mt-1">
              <input
                value={user?.displayName}
                onBlur={onChangeHandler}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="focus:ring-purple-400 focus:border-purple-600 w-full"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <div className="mt-1">
              <input
                value={user?.email}
                onBlur={onChangeHandler}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="focus:ring-purple-300 focus:border-purple-600 w-full"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Feedback (in words)
            </label>
            <div className="mt-1">
              <textarea
                onBlur={onChangeHandler}
                id="message"
                name="message"
                autoComplete="message"
                required
                className="focus:ring-purple-600 focus:border-purple-600 w-full"
              />
            </div>
          </div>

          <div className="w-full items-center grid grid-cols-6">
            <h4 className="col-span-6 md:col-span-2 text-xl">
              Rating: {rating}
            </h4>
            <List
              className="col-span-6 md:col-span-4 text-xl md:px-10"
              style={{ margin: "0 10px" }}
            >
              <ListItem
                innerClassName="flex space-x-4 "
                innerChildren={
                  <>
                    <span>0</span>
                    <Range
                      onBlur={onChangeHandler}
                      name="rating"
                      value={rating}
                      step={0.1}
                      min={0}
                      max={5}
                      onChange={(e) => setRating(e.target.value)}
                    />
                    <span>5</span>
                  </>
                }
              />
            </List>
          </div>

          <div>
            <button
              type="submit"
              className="w-6/12 mx-auto flex justify-center py-2 px-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-white focus:ring-purple-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
