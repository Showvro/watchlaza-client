import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-gray-200 w-full">
      <div className="my-container">
        <div className="grid space-b-4 grid-cols-1 md:grid-cols-2 justify-between">
          <div className="space-y-2">
            <h2 className="font-semibold font-grandHotel sm:text-2xl lg:text-4xl tracking-widest">
              Watch<span className="text-purple-600">laza</span>
            </h2>
            <p className="text-justify">
              Join us to grab world best price at watch at one place. We are
              giving Granted Product for you. Customer are the most important
              for us. That's why we are care about your emotion. We will be
              greatful to you If we can give you our best. So why are you
              waiting for! Grab the deal from us.
            </p>
            <div className="flex space-x-4">
              <a
                className="shadow p-2 rounded-full hover:bg-purple-600 hover:text-white"
                href="https://www.facebook.com/showvro/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className="transition-all text-xl cursor-pointer" />
              </a>
              <a
                className="shadow p-2 rounded-full hover:bg-purple-600 hover:text-white"
                href="https://www.instagram.com/showvro/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="transition-all text-xl cursor-pointer" />
              </a>
              <a
                className="shadow p-2 rounded-full hover:bg-purple-600 hover:text-white"
                href="https://www.linkedin.com/in/showvro/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="transition-all text-xl cursor-pointer" />
              </a>
              <a
                className="shadow p-2 rounded-full hover:bg-purple-600 hover:text-white"
                href="https://github.com/showvro/"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="transition-all text-xl cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="flex xs:-ml-5 md:justify-end">
            <div>
              <h3 className="text-2xl text-purple-600 font-semibold font-mono sm:mt-5 md:mt-0 mb-2">
                Quick Links
              </h3>
              <div className="flex flex-col list-none">
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-purple-600 hover:underline"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-purple-600 hover:underline"
                    to="/explore"
                  >
                    All Products
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-purple-600 hover:underline"
                    to="/about"
                  >
                    About US
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-purple-600 hover:underline"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-purple-600 hover:underline"
                    to="/"
                  >
                    Our Policies
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-purple-600 hover:underline"
                    to="/"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-purple-600 hover:underline"
                    to="/"
                  >
                    Others
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div>
          <p className="text-gray-600 sm:ml-1 md:ml-0">
            <span className="text-purple-600">&copy;</span> 2021
            <span className="text-gray-600 text-xl font-semibold font-grandHotel ml-2">
              Watch<span className="text-purple-600">laza</span>
            </span>
            <br />
            Design and Developed by
            <a
              href="https://www.facebook.com/showvro"
              target="_blank"
              rel="noreferrer"
              className="ml-1 font-bold text-purple-600"
            >
              Showvro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
