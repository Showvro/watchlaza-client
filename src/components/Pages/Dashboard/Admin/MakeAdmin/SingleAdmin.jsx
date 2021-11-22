import React from "react";

const SingleAdmin = ({ user, makeAdmin }) => {
  return (
    <tbody>
      <tr className="w-full font-light text-gray-600 whitespace-no-wrap border">
        <td className="px-4 py-4">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.ibb.co/SR68DnC/5402435-account-profile-user-avatar-man-icon.png"
            alt=""
          />
        </td>
        <td className="px-4 py-4">{user.name}</td>
        <td className="px-4 py-4">{user.email}</td>
        <td className="px-4 py-4">
          <span
            className={`text-sm ${
              user.role ? "bg-green-400" : "bg-blue-500"
            } text-white px-2 py-1`}
          >
            {user.role ? user.role : "normal"}
          </span>
        </td>
        <td className="text-center mx-auto py-4">
          {user.role === "admin" ? (
            <div className="flex items-center justify-start ml-5">
              <span className="flex items-center justify-between space-x-2 text-purple-500 cursor-pointer">
                <span>Admin</span>
              </span>
            </div>
          ) : (
            <div
              onClick={() => makeAdmin(user)}
              className="flex items-center justify-start text-sm"
            >
              <span className="flex items-center justify-between space-x-2 text-purple-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="ml-20">Grant Admin</span>
              </span>
            </div>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default SingleAdmin;
