import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import useFirebase from "../../../../../hooks/useFirebase";
import useWindowSize from "../../../../../hooks/useWindowSize";
import Content from "../../Content/Content";

const Side = () => {
  //hooks
  const windowSize = useWindowSize();
  const history = useHistory();
  const [menuSHow, setMenuShow] = useState(false);
  let { path, url } = useRouteMatch();
  const { user, admin } = useAuth();
  const { signOutUser } = useFirebase();

  //menu button
  const menuBar = menuSHow ? (
    <svg
      onClick={() => setMenuShow(false)}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-purple-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ) : (
    <svg
      onClick={() => setMenuShow(true)}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-purple-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  return (
    <div>
      <div className="flex items-center justify-between px-10 h-14 bg-white shadow-sm">
        {windowSize.innerWidth < 768 ? (
          menuBar
        ) : (
          <h3 className="sm:text-3xl md:text-4xl font-grandHotel font-bold">
            <Link to="/">
              Watch<span className="text-purple-600">laza</span>
            </Link>
          </h3>
        )}
        <div className="flex items-center p-2 space-x-4">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co/gZX0ZJh/Screenshot-2021-11-18-at-3-20-20-AM-removebg-preview.png"
            }
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-lg text-gray-800 font-bold">
              {user?.displayName?.split(" ")[0] || admin?.name}{" "}
              <span className="text-base font-normal text-purple-600">
                ({admin?.role || "user"})
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div
        style={{
          transform:
            !menuSHow && windowSize.innerWidth < 768 && "translateX(-100%)",
        }}
        className="transition h-screen p-3 space-y-2 w-60 bg-white text-gray-600 absolute top-14 left-0 border border-r"
      >
        <div className="divide-y divide-gray-300">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {!(admin?.role === "admin") && (
              <>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/my-order`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-800 hover:font-medium hover:bg-purple-100 transform hover:translate-x-1 transition"
                    activeClassName="text-purple-800 font-medium bg-purple-100 transform translate-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span>My Orders</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/payment`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-800 hover:font-medium hover:bg-purple-100 transform hover:translate-x-1 transition"
                    activeClassName="text-purple-800 font-medium bg-purple-100 transform translate-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path
                        fillRule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Confirm Payment</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/review`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-800 hover:font-medium hover:bg-purple-100 transform hover:translate-x-1 transition"
                    activeClassName="text-purple-800 font-medium bg-purple-100 transform translate-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Review</span>
                  </NavLink>
                </li>
              </>
            )}

            {admin?.role === "admin" && (
              <>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/order-list`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-800 hover:font-medium hover:bg-purple-100 transform hover:translate-x-1 transition"
                    activeClassName="text-purple-800 font-medium bg-purple-100 transform translate-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Order List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/add-service`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-800 hover:font-medium hover:bg-purple-100 transform hover:translate-x-1 transition"
                    activeClassName="text-purple-800 font-medium bg-purple-100 transform translate-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Add Service</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/make-admin`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-800 hover:font-medium hover:bg-purple-100 transform hover:translate-x-1 transition"
                    activeClassName="text-purple-800 font-medium bg-purple-100 transform translate-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    <span>Make Admin</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/manage-service`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-800 hover:font-medium hover:bg-purple-100 transform hover:translate-x-1 transition"
                    activeClassName="text-purple-800 font-medium bg-purple-100 transform translate-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Manage Service</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li onClick={() => history.push("/")}>
              <Link
                onClick={() => setMenuShow(false)}
                to="/"
                className="flex items-center p-2 space-x-3 rounded-md hover:text-purple-800 hover:font-medium hover:bg-purple-100 transform hover:translate-x-1 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Go Home</span>
              </Link>
            </li>
            <li
              onClick={signOutUser}
              className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:text-purple-800 hover:font-medium hover:bg-purple-100 transform hover:translate-x-1 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
      <Content path={path} />
    </div>
  );
};

export default Side;
