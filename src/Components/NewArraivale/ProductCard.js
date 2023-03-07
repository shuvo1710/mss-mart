import React, { useContext } from "react";
import {  BsImages } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Category } from "../../CategoryContext/CategoryContext";
import { UserContext } from "../../CategoryContext/AuthContext";
const ProductCard = ({ Products }) => {
  const {user} = useContext(UserContext)
  const email = user?.email;

  const {
    category,
    description,
    discount,
    images,
    price,
    productSizes,
    rating,
    title,
    _id
  } = Products;

  const balance=parseFloat(price)
  const discountPrice=(discount/100)*balance;
  const discountValue=price-discountPrice


  const { setMOdalData,handleLoveCard } = useContext(Category);

  const handlePostLove=()=>{
    handleLoveCard(email,Products)
  }

  return (
    <div>
      <div className="relative image-parent border">
        <img className="first-image" src={images?.[0].i} alt="" />
        <img className="second-image" src={images?.[1].i} alt="" />
        <div className="icons top-4 right-4">
          <div className="flex flex-col gap-y-2">
            <p className="bg-white p-2 rounded-full">
              <BiHeart onClick={handlePostLove} className="heart duration-300 hover:scale-125 cursor-pointer" />
            </p>
            <label className="bg-white p-2 rounded-full" htmlFor="purchaseNow" onClick={() => setMOdalData(Products)}>
              <BsImages className="cart duration-300 hover:scale-125 cursor-pointer" />
            </label>
          </div>
        </div>
        <Link to={`/details/${_id}`} className="hiddenButton justify-center text-center">
          <button className="bg-black p-2 text-white rounded font-medium text-sm  hover:bg-white hover:text-black">
            Order Now
          </button>
        </Link>

        <div className=" p-2">
          <a href="/" alt="" className="hover:underline duration-300 text-sm">
            {title}
          </a>
          <div className="flex justify-between items-center pt-2">
          <div className="flex gap-1">
              <p className="font-semibold">TK: {discountValue}</p>
            </div>
            <p className="font-semibold line-through">Tk: {price}</p>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
