import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductCard = ({ Products }) => {
  console.log(Products)
  const { category, description, discount, images, price, productSizes, rating, title } = Products;
  console.log(images)
  return (
    <div>
      <div className="relative image-parent">
        <img
          className="first-image"
          src="https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_e64bc63a-735c-4c2c-9542-81681cff4891_360x.jpg?v=1614070027"
          alt=""
        />
        <img
          className="second-image"
          src="https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_b71f02c8-1b6d-4f14-9686-cbd05ae3ab5c_360x.jpg?v=1615019404"
          alt=""
        />
        <div className="example top-4 right-4">
          <div className="">
            <BiHeart className="mb-4 heart duration-300 hover:scale-125 cursor-pointer" />
            <BsCartPlus className="cart duration-300 hover:scale-125 cursor-pointer" />
          </div>
        </div>

        <div className=" p-2">
          <a href="/" alt="" className="hover:underline duration-300">{title}</a>
          <div className="flex justify-between">
            <p className="font-semibold">$33.00</p>
            <div className="flex gap-1">
              <p><BsStar /></p>
              <p><BsStar /></p>
              <p><BsStar /></p>
              <p><BsStar /></p>
              <p><BsStar /></p>
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
