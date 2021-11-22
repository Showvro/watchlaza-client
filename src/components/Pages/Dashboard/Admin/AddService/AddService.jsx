import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { List, ListItem, Range } from "tailwind-mobile/react";

const AddService = () => {
  const history = useHistory();
  const [price, setPrice] = useState(150);
  const [newProduct, setNewProduct] = useState({
    img: "https://i.ibb.co/cQMH5jq/SYA001470001-B-1100x1100.jpg",
  });

  //title bar
  useEffect(() => {
    document.title = "Add Service | Watchlaza";
  }, []);

  //handle input
  const handleOnBlur = (e) => {
    const product = { ...newProduct };
    product[e.target.name] = e.target.value;
    product.ratings = (Math.random() * 5).toFixed(2);
    setNewProduct(product);
  };

  //handle submit
  const formSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add new item!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Service Added Successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        history.push("/dashboard");

        fetch("https://pacific-waters-14584.herokuapp.com/watches", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProduct),
        });
      }
    });
  };

  return (
    <div className="lg:w-1/3 mx-auto">
      <div className="bg-white py-12 px-6 shadow sm:px-10">
        <form onSubmit={formSubmit} className="mb-0 space-y-6" method="POST">
          <div className="w-full">
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <div className="mt-1">
              <input
                onBlur={handleOnBlur}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="focus:ring-purple-300 focus:border-purple-600 w-full"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Product Description
            </label>
            <div className="mt-1">
              <textarea
                onBlur={handleOnBlur}
                id="descriptions"
                name="descriptions"
                autoComplete="descriptions"
                required
                className="focus:ring-purple-300 focus:border-purple-600 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
            <div className="w-full">
              <label
                htmlFor="img"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <div className="mt-1">
                <input
                  onBlur={handleOnBlur}
                  defaultValue=""
                  type="text"
                  id="img"
                  name="img"
                  autoComplete="img"
                  required
                  className="focus:ring-purple-300 focus:border-purple-600 w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full items-center grid grid-cols-6">
            <h4 className="col-span-6 md:col-span-2 text-xl">
              Price: ${price}
            </h4>
            <List
              className="col-span-6 md:col-span-4 text-xl "
              style={{ margin: "0 10px" }}
            >
              <ListItem
                innerClassName="flex space-x-4 "
                innerChildren={
                  <>
                    <span>$0</span>
                    <Range
                      onBlur={handleOnBlur}
                      name="price"
                      value={price}
                      step={1}
                      min={0}
                      max={500}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <span>$500</span>
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
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
