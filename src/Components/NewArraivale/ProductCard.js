import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="rounded  ">
    <div className="hover-image">
    <img
        className=" object-cover w-full h-56 md:h-64 xl:h-80"
        src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Person"/>


      <div className="justify-end px-5 py-4 text-center  duration-300">
        <button className="hidden-div mb-1 text-lg font-bold bg-black hover:bg-white hover:text-black hover:border-black p-2 text-white w-2/3 mx-auto">
          Add To Card
        </button>
      </div>



    </div>

      <div className="-mt-4">
        <div className="flex gap-2 justify-center items-center">
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </div>

        <div className="text-center mt-1">
          <p className="font-semibold">Mahedy Shuvo</p>
          <p>$3000</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
