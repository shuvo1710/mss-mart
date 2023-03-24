import React from 'react';
import { AiOutlineCar } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";

import {VscGistSecret} from 'react-icons/vsc'

const PayementMethod = () => {
    return (
        <div className="pt-28 container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card w-full  border-r-2 rounded-none ">
            <figure className="px-10 pt-10">
              <AiOutlineCar className="text-6xl"/>
            </figure>
            <div className="card-body items-center text-center -mt-4">
              <h2 className="card-title">FREE SHIPPING & RETURN</h2>
              <p>Free Shipping on all Us orders </p>
            </div>
          </div>
  
          <div className="card w-full  border-r-2 rounded-none">
            <figure className="px-10 pt-10">
              <GiTakeMyMoney className="text-6xl" />
            </figure>
            <div className="card-body items-center text-center -mt-4">
              <h2 className="card-title">MONEY GAURNTEE</h2>
              <p>30 days money back guarantee </p>
            </div>
          </div>
  
          <div className="card w-full  border-r-2 rounded-none">
            <figure className="px-10 pt-10">
              <BiPhoneCall className="text-6xl" />
            </figure>
            <div className="card-body items-center text-center -mt-4">
              <h2 className="card-title">ONLINE SUPPORT</h2>
              <p>We support online 24/7 on day</p>
            </div>
          </div>
  
          <div className="card w-full  rounded-none">
            <figure className="px-10 pt-10">
              <VscGistSecret className="text-6xl" />
            </figure>
            <div className="card-body items-center text-center -mt-4">
              <h2 className="card-title">SECURE PAYMENTS</h2>
              <p>All payment are Secured and trusted</p>
            </div>
          </div>
        </div>
  
        
      </div>
    );
};

export default PayementMethod;