import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const DashBoard = () => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-4">
          <Outlet />
        </div>

        <div className="drawer-side max-h-screen">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-52 bg-blue-200 text-black">
            <li className="menuItems">
              <Link to="/dashBoard/users">All Users</Link>
            </li>
            <li className="menuItems">
              <Link to='/dashBoard/allProduct'>All Product</Link>
            </li>
            <li className="menuItems">
              <Link to='/dashBoard/addProduct'>Add Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
