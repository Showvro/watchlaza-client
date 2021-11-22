import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Spinner from "../../../../Shared/Loader/Spinner";
import SingleAdmin from "./SingleAdmin";

const Admins = () => {
  const [isUpdate, setIsUpdate] = useState(null);
  const [users, setUsers] = useState([]);

  //title bar
  useEffect(() => {
    document.title = "Make Admin | Watchlaza";
  }, []);

  //get result
  useEffect(() => {
    fetch("https://pacific-waters-14584.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [isUpdate]);

  //admin function
  const makeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this role!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yap, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Successfully Created New Admin!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        fetch(`https://pacific-waters-14584.herokuapp.com/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            role: "admin",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              setIsUpdate(!isUpdate);
            } else {
              setIsUpdate(false);
            }
          });
      }
    });
  };

  //user define
  if (users.length === 0)
    return (
      <h1 className="text-purple-500 font-bold text-center py-20 text-3xl">
        No User Found! <Spinner />
      </h1>
    );

  if (users.length < 1) return <Spinner />;

  return (
    <div>
      <div className="bg-white py-6">
        <div className="block overflow-x-auto mx-6">
          <table className="w-full text-left rounded-lg">
            <thead>
              <tr className="text-gray-700 border border-b-0">
                <th className="px-4 py-3 font-bold">Profile</th>
                <th className="px-4 py-3 font-bold">Name</th>
                <th className="px-4 py-3 font-bold">Email</th>
                <th className="px-4 py-3 font-bold">Role</th>
                <th className="px-4 py-3 font-bold">Action</th>
              </tr>
            </thead>
            {users?.map((user) => (
              <SingleAdmin key={user._id} user={user} makeAdmin={makeAdmin} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admins;
