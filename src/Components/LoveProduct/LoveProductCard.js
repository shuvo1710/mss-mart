import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../CategoryContext/AuthContext";
import Rating from "../Rating/Rating";

const LoveProductCard = ({ product }) => {
  const { user } = useContext(UserContext);
  const {
    category,
    customerReview,
    deliveryPolicy,
    description,
    detils,
    discount,
    images,
    price,
    productSizes,
    productType,
    rating,
    returnAndExchangePolicy,
    title,
    _id,
  } = product?.products;
  const balance = parseFloat(price);
  const discountPrice = (discount / 100) * balance;
  const discountValue = price - discountPrice;
  return (
    <div className="  mx-auto ">
      <div className="">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="md:flex lg:items-center">
            <div className="  lg:mb-0 w-full">
              <div className=" w-full h-full">
                <img src={images[1]?.i} className="w-full h-full" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="p-4">
                <div className=" mb-2 items-center">
                  <div className="font-bold text-sm md:text-lg uppercase">
                    {title}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold ">Rating:</span>
                  <Rating rating={rating}></Rating>
                </div>

                <div className="mb-1">
                  <p className="">
                    <span className="font-medium">Detail: {description}</span> .
                  </p>
                </div>

                <div className=" flex gap-4 w-full items-center bottom-3  my-2">
                  <p className="mt-1 font-bold text-xl">
                    <span>Price: {discountValue}</span>
                  </p>

                  <button className="btn bg-red-500  border-0  text-white hover:bg-red-600">
                    Delete
                  </button>
                  <Link
                    to={`/details/${_id}`}
                    className="btn bg-sky-300 border-0  text-black hover:bg-sky-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveProductCard;
