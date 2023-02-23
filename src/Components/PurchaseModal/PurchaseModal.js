import React, { useContext, useState } from "react";
import "./PurchaseModal.css";
import { Category } from "../../CategoryContext/CategoryContext";
import img1 from "../../resource/New folder/shirt/mens-casual-shirt-010.jpeg";

const PurchaseModal = () => {
  const { modalData } = useContext(Category);
  const [size, setSize]=useState('S')
  const {
    category,
    customerReview,
    deliveryPolicy,
    description,
    details,
    discount,
    images,
    price,
    productSizes,
    productType,
    rating,
    returnAndExchange,
    title,
    _id,
  } = modalData;

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="purchaseNow" className="modal-toggle" />
      <label htmlFor="purchaseNow" className="modal cursor-pointer">
        <label className="modal-box relative w-10/12 max-w-5xl" htmlFor="">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <div className="">
                {
                    images?.map(image=> (
                        <img className="w-full h-full" src={image[0]?.i} alt="" />
                    ))
                }
              </div>
            </div>
            <div className="">
              <h4>{title}</h4>
              <h3>Price ${price}</h3>
              <div>
                <p>{rating}</p>
              </div>
              <div className="mt-5">
                <div className="flex my-2">
                  <p className="rightInfo">availabilaty:</p>
                  <p className="text-green-500">Out Stock {}</p>
                </div>
                <div className="flex my-2">
                  <p className="rightInfo">Product Name:</p>
                  <p>{productType}</p>
                </div>
                <div className="flex my-2">
                  <p className="rightInfo">Product ID:</p>
                  <p>{_id}</p>
                </div>
                <div className="my-2">
                  <p>{details}</p>
                </div>
                <p>
                  Size: <span>{size}</span>
                </p>

                <div  className="flex gap-4 mt-4">
                  {productSizes?.map((product) => (
                   
                      
                      <p onClick={()=>setSize(product.size)} className="py-1 px-2 bg-white text-black border border-black hover:bg-black hover:text-white duration-300 hover:border hover:border-black">
                        {product.size}
                      </p>
                      
                    
                  ))}
                </div>
                <p className="my-2">note</p>
                <div>
                  <textarea
                    className="textarea border border-gray-500 w-full"
                    placeholder="Bio"
                  ></textarea>
                </div>
                <p className="my-2">QUANTITY:</p>
                <div className="flex items-center">
                  <p className="px-1 py-1 text-gray-400 border">-</p>
                  <p className="py-1 px-2 border bg-gray-300">2</p>
                  <p className="px-1 py-1 text-gray-400 border">+</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <button className="btn modalButton">Add To Cart</button>
                  <button className="btn modalButton">Buy It Now</button>
                </div>
              </div>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default PurchaseModal;