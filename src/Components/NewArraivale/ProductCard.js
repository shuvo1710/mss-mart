import React from "react";
// import "./ProductCard.css"
import { BsCartPlus } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductCard = ({ Products }) => {
  console.log(Products);
  const {
    category,
    description,
    discount,
    images,
    price,
    productSizes,
    rating,
    title,
  } = Products;
  console.log(images);
  return (
    <div>
      <div className="relative image-parent border">
        <img className="first-image" src={images?.[0].i} alt="" />
        <img className="second-image" src={images?.[1].i} alt="" />
        <div className="icons top-4 right-4">
          <div className="">
            <BiHeart className="mb-4 heart duration-300 hover:scale-125 cursor-pointer" />
            <BsCartPlus className="cart duration-300 hover:scale-125 cursor-pointer" />
          </div>
        </div>
        <div className="hiddenButton justify-center text-center -mt-10">
          <button className="bg-black p-2 text-white rounded font-semibold">
            Order Now
          </button>
        </div>

        <div className=" p-2">
          <a href="/" alt="" className="hover:underline duration-300 text-sm">
            {title}
          </a>
          <div className="flex justify-between items-center pt-2">
            <p className="font-semibold">Tk: {price}</p>
            <div className="flex gap-1">
              <p>
                <BsStar />
              </p>
              <p>
                <BsStar />
              </p>
              <p>
                <BsStar />
              </p>
              <p>
                <BsStar />
              </p>
              <p>
                <BsStar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="rounded  ">
    // <div className="hover-image">
    // <img
    //     className=" object-cover w-full h-56 md:h-64 xl:h-80"
    //     src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //     alt="Person"/>

    //   <div className="justify-end px-5 py-4 text-center  duration-300">
    //     <button className="hidden-div mb-1 text-lg font-bold bg-black hover:bg-white hover:text-black hover:border-black p-2 text-white w-2/3 mx-auto">
    //       Add To Card
    //     </button>
    //   </div>
    // </div>

    //   <div className="-mt-4">
    //     <div className="flex gap-2 justify-center items-center">
    //       <BsStar />
    //       <BsStar />
    //       <BsStar />
    //       <BsStar />
    //       <BsStar />
    //     </div>

    //     <div className="text-center mt-1">
    //       <p className="font-semibold">Mahedy Shuvo</p>
    //       <p>$3000</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
