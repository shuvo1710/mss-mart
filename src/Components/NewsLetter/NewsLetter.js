import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const NewsLetter = () => {
  return (
    <div className="">
      <div className="container mx-auto bgSecondary">
       
          <div className="md:flex my-4 md:my-0 justify-between items-center p-6">
            <h3 className="text-md xl:text-xl font-bold">SUBSCRIBE TO FOLLOW FASHION TRENDS</h3>
            <div className="flex rounded overflow-hidden">
              <input
                type="text"
                name=""
                placeholder="Email address"
                className="border  focus:outline-0 p-2 xl:p-3 md:w-[200px] lg:w-[300px] xl:w-[550px]"
                id=""
              />
              <input
                type="submit"
                value="SUBSCRIBE"
                className="bg-black text-white px-4   cursor-pointer"
              />
            </div>
          </div>
     
      </div>
    </div>
  );
};

export default NewsLetter;
