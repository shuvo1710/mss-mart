import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

import {
  FaCarSide,
  FaFacebookF,
  FaRegClock,
  FaRegHeart,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { useLoaderData, useNavigation } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Rating from "../Rating/Rating";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import ActiveCustomerReview from "./ActiveCustomerReview";
import CustomerReview from "./CustomerReview";
import DeliveryPolicy from "./DeliveryPolicy";
import ReturnAndExchangePolicy from "./ReturnAndExchangePolicy";
import Loder from '../Loder/Loder'

const DetailsPage = () => {
  const data = useLoaderData();
  const {
    category,
    deliveryPolicy,
    description,
    details,
    discount,
    images,
    price,
    productSizes,
    productType,
    rating,
    returnAndExchangePolicy,
    title,
    _id
  } = data;

  const navigation=useNavigation();
  const [img, setImg] = useState(images[2].i);
  const [delivery, setDelivery] = useState('');
  const [returns, setReturns] = useState('');
  const [customer, setCustomer] = useState('');
  const [active, setActive] = useState(deliveryPolicy);
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState()
  const [quantityProduct, setQuantityProduct] = useState(1)

  const balance=parseFloat(price)
  const discountPrice=(discount/100)*balance;
  const discountValue=price-discountPrice




  const deliveryPolicys = () => {
    setDelivery(deliveryPolicy)
        setReturns('');
        setCustomer('');
        setActive('');
     
  };
  
  const Returns = () => {
        setReturns(returnAndExchangePolicy);
        setDelivery('');
        setCustomer('');
        setActive('');
      
  };
  const Customer = () => {
        setCustomer(description);
        setDelivery('');
        setReturns('');
        setActive('');
    
  };
  

  let designClass = "componentDesign";

  
  
  const message = useRef()
  const handlePlus = () => {
    if (quantityProduct >= quantity) {
      toast.error(`our product quantity only ${quantity}`);
    }
    else {
      const newValue = quantityProduct + 1;
      setQuantityProduct(newValue)
    }
  }

  const handleMinus = () => {
    if (quantityProduct === 1) {
      
    }
    else {
      const newValue = quantityProduct - 1;
      setQuantityProduct(newValue)
    }
  }

  
  


    if(navigation.state === 'loading'){
      return  <Loder/>
    }








  return (
    <div className="p-4 md:p-2">
      <div>
        <Breadcrumbs />
      </div>
      <div className="grid lg:grid-cols-2 items-start gap-8 md:my-16 container mx-auto">
        <div className="">
          <div className=" md:h-full md:w-full lg:w-full lg:h-full p-4 md:p-0  ">
           
              <img src={img} className="w-full md:w-5/6 h-full" alt="" />
            
          </div>
          <div className="flex gap-4  md:mt-10 md:w-3/4 lg:w-5/6">
            {data.images?.map((image) => (
              <button onClick={() => setImg(image?.i)}>
                <img src={image?.i} className=" w-28 -ml-2 md:-ml-0" alt="" />
              </button>
            ))}
          </div>
        </div>
        <div className=" lg:-ml-24">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="my-4 flex items-center gap-4">
            <h1 className="text-2xl font-bold">${discountValue}</h1>
            <p>
              <Rating  rating={rating} />
            </p>
          </div>
        
          <div className="flex my-2">
                  <p className="rightInfo text-md lg:text-lg">Availability:</p>
                  {
                    size===''? <>
                    <p className="text-xs md:text-md lg:text-lg">Please Select any size to See Product Stocks</p> 
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
                  <p className="rightInfo text-md lg:text-lg">Product Name:</p>
                  <p className="text-md lg:text-lg">{productType}</p>
                </div>
                <div className="flex my-2">
                  <p className="rightInfo text-md lg:text-lg">Product ID:</p>
                  <p className="text-xs md:text-md lg:text-lg">{_id}</p>
                </div>
                <div className="my-2">
                  <p className="text-xs md:text-md lg:text-lg"><span className="">Details:</span> {details}</p>
                </div>
                {
                  size.length ? <p className="text-md lg:text-lg">
                  Size: <span>{size}</span>
                </p>
                :
                <p className="text-md lg:text-lg">
                  Size:<span> please select any size.</span>
                </p>
                }

                {
                  size.length ? <p className="lg:text-lg">
                  Quantity: <span>{quantity}</span>
                </p>
                :
                <p className="lg:text-lg">
                  Quantity: <span> Please select size for quantity.</span>
                </p>
                }

                <div className="flex gap-4 mt-4">
                  {productSizes?.map((product) => (
                   <>
                   <button onClick={() => { (setSize(product.size))(setQuantity(product.quantity))  }} className="py-1 px-2 bg-white text-black border border-black hover:bg-black hover:text-white duration-300 hover:border hover:border-black ">
                      {product.size}
                    </button>
                    
                   </>
                  ))}
                </div>

                <p className="my-2">note</p>
                <div>
                  <textarea
                    ref={message}
                    className="textarea border border-gray-500 w-full "
                    placeholder="Bio"
                  ></textarea>
                </div>
                <p className="my-2">QUANTITY:</p>
                {
              quantity===0 ? <>
              <p className="text-red-500">No Stock Available to Select quantity</p>
             

              </>
              :
              <>
              {
                size==='' ? <p>Please Select any size to enable quantity</p> 
                :
                <div className="flex items-center">
                  <button  onClick={handleMinus} className="px-2 py-1 text-gray-400 border">-</button>
                  <p className="py-1 px-2 border bg-gray-300">{quantityProduct}</p>
                  <button onClick={handlePlus} className="px-2 py-1 text-gray-400 border">+</button>
                </div> 
               }
              </>
             }

             <div>
              
             </div>
             <div className="">
                  {size === "" ? (
                    <>
                      <p>Please Select any size to enable Add To Card Button</p>
                    </>
                  ) : (
                    <>
                      {quantity === 0 ? (
                        <button className="btn modalButton text-black my-4" disabled >Add To Cart</button>
                      ) : (
                        <button className="btn w-1/4 mx-auto bg-black text-white font-semibold my-4">Order Now</button>
                      )}
                    </>
                  )}
                </div>

          <div className="mt-6 mb-10">
            <h1 className="text-lg font-semibold mb-4">
              QUARANTEED SAFE CHECKOUT:
            </h1>
            <img
            className="cursor-pointer"
              src="https://cdn.shopify.com/s/files/1/0256/4594/0810/files/payment_700x.png?v=1616050837"
              alt=""
            />
          </div>
          <div className="flex items-center gap-4 my-6">
            <button>
              <FaRegHeart />
            </button>
            <h1 className="text-lg font-semibold">ADD TO WISHLIST</h1>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <FaShareAlt />
            </button>
            <p>Share:</p>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaShareAlt />
            </button>
          </div>
          <div className="flex items-center gap-4 my-4">
            <button>
              <FaRegClock />
            </button>
            <h1 className="">Orders ship within 5 to 10 business days.</h1>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <FaCarSide />
            </button>
            <h1 className="">
              <span
                className="font-semibold
            "
              >
                Hoorey{" "}
              </span>{" "}
              ! This item ships free to the US
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
      <div className="">
      <div className="justify-center items-center text-center text-3xl my-8">
        
        <div className="flex gap-4 ">
          <button
            onClick={deliveryPolicys}
            className={delivery?.length || active?.length ? designClass : "notComponentDesign"}
          >
            DeliveryPolicy
          </button>
          <button
            onClick={Returns}
            className={returns?.length ? designClass : "notComponentDesign"}
          >
            ReturnAndExchangePolicy
          </button>
          <button
            onClick={Customer}
            className={customer?.length ? designClass : "notComponentDesign"}
          >
            CustomerReview
          </button>
        </div>
      </div>

      <div className="mb-20">
      <DeliveryPolicy delivery={delivery}/>
      <ReturnAndExchangePolicy returns={returns}/>
      <ActiveCustomerReview active={active}/>
      <CustomerReview customer={customer}/>
      </div>
    </div>
      </div>
      <div className="container mx-auto mb-10">
        <RelatedProduct  category={category} productType={productType} setImg={setImg}/>
      </div>
    </div>
    
  );
};

export default DetailsPage;
