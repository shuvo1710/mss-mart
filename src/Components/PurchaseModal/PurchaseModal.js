import React, { useContext, useRef, useState } from "react";
import "./PurchaseModal.css";
import { Category } from "../../CategoryContext/CategoryContext";
import ModalSlider from "./ModalSlider"
import { toast } from "react-hot-toast";
import { Pagination } from 'swiper';
import Rating from "../Rating/Rating";



const PurchaseModal = () => {
  const { modalData } = useContext(Category);
  const [size, setSize] = useState('')
  
  const [quantity, setQuantity] = useState()
  const [quantityProduct, setQuantityProduct] = useState(1)
  
  const message = useRef()

  const handlePlus = () => {
    if (quantityProduct >= quantity) {
      toast.success(`our product quantity only ${quantity}`);
    }
    else {
      const newValue = quantityProduct + 1;
      setQuantityProduct(newValue)
    }
  }

  const handleMinus = () => {
    if (quantityProduct === 1) {
      toast.success("you can't select minus product")
    }
    else {
      const newValue = quantityProduct - 1;
      setQuantityProduct(newValue)
    }
  }

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

  const handleCustomerMessage = () => {
    const customerMessage = message.current.value;
    console.log(customerMessage);

  }

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="purchaseNow" className="modal-toggle" />
      <label htmlFor="purchaseNow" className="modal cursor-pointer">
        <label className="modal-box relative w-10/12 max-w-5xl" htmlFor="">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <div className="">
                <ModalSlider images={images}></ModalSlider>
              </div>
            </div>
            <div className="">
              <h4>{title}</h4>
              <h3>Price ${price}</h3>
              <div>
                <p className="flex items-center gap-4"> 
                Rating: 
                  <Rating rating={rating}></Rating>
                </p>
              </div>
              <div className="mt-5">
                <div className="flex my-2">
                  <p className="rightInfo">Availability:</p>
                  {
                    size===''? <>
                    <p>Please Select any size to See Product Stocks</p> 
                    </>
                    :
                    <>
                    {
                    quantity===0 ? <p className="text-red-500">Out Stock</p>
                    :
                    <p className="text-green-500">In Stock</p>
                  }
                    </>
                  }
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
                  <p>Details: {details}</p>
                </div>
                <p>
                  Size:<span>{size}</span>
                </p>

                <p>
                  Quantity: <span>{quantity}</span>
                </p>

                <div className="flex gap-4 mt-4">
                  {productSizes?.map((product) => (
                   <>
                   <p onClick={() => { (setSize(product.size))(setQuantity(product.quantity))  }} className="py-1 px-2 bg-white text-black border border-black hover:bg-black hover:text-white duration-300 hover:border hover:border-black">
                      {product.size}
                    </p>
                    
                   </>
                  ))}
                </div>

                <p className="my-2">note</p>
                <div>
                  <textarea
                    ref={message}
                    className="textarea border border-gray-500 w-full"
                    placeholder="Bio"
                  ></textarea>
                </div>
                <p className="my-2">QUANTITY:</p>
               {
                size==='' ? <p>Please Select any size to enable quantity</p> 
                :
                <div className="flex items-center">
                  <button  onClick={handleMinus} className="px-2 py-1 text-gray-400 border">-</button>
                  <p className="py-1 px-2 border bg-gray-300">{quantityProduct}</p>
                  <button onClick={handlePlus} className="px-2 py-1 text-gray-400 border">+</button>
                </div> 
               }
                <div className="mt-3 flex items-center gap-3">
                  <button className="btn modalButton bg-black text-white" onClick={handleCustomerMessage}>Add To Cart</button>
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