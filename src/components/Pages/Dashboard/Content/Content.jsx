import React from "react";
import { Route, Switch } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import AdminRoute from "../../../Login/Login/Private/AdminRoute";
import AddService from "../Admin/AddService/AddService";
import Admins from "../Admin/MakeAdmin/Admins";
import ManageService from "../Admin/ManageService/ManageService";
import OrderList from "../Admin/OrderList/OrderList";
import NotFoundDashboard from "../NotFound/NotFoundDashboard";
import MyOrder from "../User/MyOrder/MyOrder";
import Payment from "../User/Payment/Payment";
import Review from "../User/Review/Review";
import UserProfile from "../UserProfile/UserProfile";

const Content = ({ path }) => {
  const { admin } = useAuth();

  return (
    <div className="ml-0 md:ml-60 px-10 bg-purple-50 pt-10 pb-20 min-h-screen">
      <Switch>
        <Route exact path={path}>
          <UserProfile />
        </Route>

        {!(admin?.role === "admin") && (
          <>
            <Route path={`${path}/my-order`}>
              <h1 className="text-center sm:text-2xl lg:text-4xl text-gray-600 font-mono font-semibold py-4">
                My Order
              </h1>
              <MyOrder />
            </Route>

            <Route path={`${path}/review`}>
              <h1 className="text-center sm:text-2xl lg:text-3xl font-semibold font-mono text-purple-600 py-4">
                Review Us
              </h1>
              <Review />
            </Route>

            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
          </>
        )}

        <AdminRoute path={`${path}/order-list`}>
          <h1 className="text-center sm:text-2xl lg:text-4xl font-mono text-purple-600 py-4">
            Your Order List
          </h1>
          <OrderList />
        </AdminRoute>

        <AdminRoute path={`${path}/add-service`}>
          <h1 className="text-center sm:text-2xl lg:text-4xl font-mono text-purple-600 pt-4 pb-20">
            Add a new Service
          </h1>
          <AddService />
        </AdminRoute>

        <AdminRoute path={`${path}/manage-service`}>
          <h1 className="text-center sm:text-2xl lg:text-4xl  font-mono text-purple-600 py-4">
            Manage Service
          </h1>
          <ManageService />
        </AdminRoute>

        <AdminRoute path={`${path}/make-admin`}>
          <h1 className="text-center sm:text-2xl lg:text-4xl font-mono text-purple-600 py-4">
            Create An Admin
          </h1>
          <Admins />
        </AdminRoute>

        <Route path={`${path}/*`}>
          <NotFoundDashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
