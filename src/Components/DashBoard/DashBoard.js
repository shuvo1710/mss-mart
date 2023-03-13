import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const DashBoard = () => {
  return (
    <div className="px-4">
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />


        <div className="drawer-content">
          <Outlet />
        </div>

        <div className="bg-blue-400 ">
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 text-base-content">
              <li>
                <Link to="/dashBoard/users">All Users</Link>
              </li>
              <li>
                <Link to='/dashBoard/allProduct'>All Product</Link>
              </li>
            </ul>
          </div>
        </div>



      </div>
    </div>
  );
};

export default DashBoard;
