import React, { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";

const UserProfile = () => {
  const { user, admin } = useAuth();

  //title name
  useEffect(() => {
    document.title = "Dashboard | Watchlaza";
  }, []);

  return (
    <div className=" flex min-h-screen items-center justify-center">
      <div className="-mt-32 text-center flex-col flex items-center justify-center space-y-4">
        <img
          className="h-50 w-50 center"
          src={
            user?.photoURL ||
            "https://i.ibb.co/j3NsjvC/Screenshot-2021-11-18-at-3-25-49-AM-removebg-preview.png"
          }
          alt=""
        />
        <h2 className="sm:text-xl lg:text-3xl font-mono font-semibold text-gray-600">
          Hey, {user?.displayName || admin?.name}
        </h2>
      </div>
    </div>
  );
};

export default UserProfile;
