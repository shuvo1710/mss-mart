import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const NewsLetter = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="my-10 md:flex justify-between items-center p-4">
          <div className="md:flex my-4 md:my-0 gap-3 xl:gap-8 items-center">
            <h1 className="text-md xl:text-xl font-bold">SIGN UP FOR DEAL</h1>
            <div className="flex">
              <input
                type="text"
                name=""
                placeholder="Email address"
                className="border rounded p-2 xl:p-3 md:w-[200px] lg:w-[300px] xl:w-[550px]"
                id=""
              />
              <input
                type="submit"
                value="SUBSCRIBE"
                className="bg-black text-white px-4   cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <h1 className="font-bold text-md xl:text-xl">BE IN TOUCH </h1>
            <div className="flex items-center gap-3">
              <GrFacebookOption className="text-xl" />
              <BsTwitter className="text-xl" />
              <BsTwitter className="text-xl" />
              <AiOutlineInstagram className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
