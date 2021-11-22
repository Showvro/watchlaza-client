import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";
import useSignMethod from "../../../hooks/useSignMethod";

const Login = () => {
  const history = useHistory();
  const { handleGoogleSignIn, handleEmailPassSignIn } = useSignMethod();

  //title bar
  useEffect(() => {
    document.title = "Login | Watchlaza";
  }, []);

  //handle submit
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    handleEmailPassSignIn(data.email, data.password);
  };

  return (
    <div className="bg-ppurple-50 ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto rounded shadow-xl overflow-hidden py-10 px-20 bg-white relative z-1">
          <div
            onClick={() => history.push("/")}
            className="absolute top-2 left-0 btn px-4"
          >
            <GrClose size="1.5em" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="">
              <h2 className="text-purple-600 text-2xl font-semibold font-mono text-center">
                Login
              </h2>
              <p className="text-purple-600 text-center ">Hey! Welcome back!</p>
            </div>

            <div className="grid grid-cols-6 gap-6 space-y-2">
              <div className="relative col-span-6">
                <input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 focus:ring-0 border-0"
                  placeholder="john@doe.com"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Your Email
                </label>
              </div>

              <div className="relative col-span-6">
                <input
                  required
                  {...register("password")}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="12345"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 focus:ring-0 border-0"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Your Password
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>

            <p className="text-center">
              Don't have an account?{" "}
              <Link
                className="text-purple-600 hover:text-purple-500 no-underline"
                to="register"
              >
                Create New
              </Link>
            </p>
          </form>

          <div className="flex flex-col justify-center items-center mt-2">
            <p className="mb-2 text-purple-600 italic">Or Signin With</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-8/12"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
