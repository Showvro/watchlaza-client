import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import Spinner from "../../../../Shared/Loader/Spinner";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
import SingleService from "./SingleService";

const ManageService = () => {
  const [services, setServices] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const history = useHistory();

  //delete service
  const deleteService = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Successfully Added Service",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        history.push("/dashboard");
        fetch(`https://pacific-waters-14584.herokuapp.com/watches/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setIsDelete(!isDelete);
            } else {
              setIsDelete(false);
            }
          });
      }
    });
  };

  useEffect(() => {
    document.title = "Manage Service | Watchlaza";
  }, []);

  //get watch
  useEffect(() => {
    fetch("https://pacific-waters-14584.herokuapp.com/watches")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isDelete]);

  if (services.length < 1) return <Spinner />;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ScrollToTop />
      {services.map((service) => (
        <SingleService
          key={service._id}
          service={service}
          deleteService={deleteService}
        />
      ))}
    </div>
  );
};

export default ManageService;
