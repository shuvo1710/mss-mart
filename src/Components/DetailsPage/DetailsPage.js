import React, { useState } from 'react';

import { FaCarSide, FaFacebookF, FaRegClock, FaRegHeart, FaShareAlt, FaTwitter } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Rating from '../Rating/Rating';
import RelatedProduct from '../RelatedProduct/RelatedProduct';


const DetailsPage = () => {
  const data = useLoaderData();
  const { category, deliveryPolicy, description, details, discount, images, price, productSizes, productType, rating, returnAndExchangePolicy, title } = data;
  const [quantityProduct, setQuantityProduct] = useState(1)
  const [img, setImg] = useState(data.images[0].i)
  const [comment, setComment] = useState("comment")


  let designClass = "design";



  const handlePlus = () => {
    const newValue = quantityProduct + 1;
    setQuantityProduct(newValue)
  }

  const handleMinus = () => {
    if (quantityProduct === 1) {
      return
    }
    else {
      const newValue = quantityProduct - 1;
      setQuantityProduct(newValue)
    }
  }

  return (
    <>
      <div><Breadcrumbs /></div>
      <div className='grid md:grid-cols-2 items-start gap-8 my-16 container mx-auto'>
        <div className=''>
          <div className='h-[700px]'>
            <img
              src={img}
              className="w-5/6 h-full"
              alt=""
            />
          </div>
          <div className='flex gap-4 mt-10 w-full'>
            {
              data.images.map(image =>
                <button onClick={() => setImg(image.i)}>
                  <img
                    src={image.i}
                    className="w-28"
                    alt=""
                  />
                </button>
              )
            }
          </div>
        </div>
        <div className='-ml-24'>
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className='my-4 flex items-center gap-4'>
            <h1 className="text-2xl font-bold">${price}</h1>
            <p>
              <Rating rating={rating} />
            </p>
          </div>
          <p className='my-4'>{details}</p>
          <div className='flex gap-4 items-center'>
            <p className='font-semibold'>
              Tags:
            </p>
            <p>
              Acessories, Dresses, Men, Vendor Levi's, Vinova, Women</p>
          </div>
          <div className='flex gap-4 items-center my-4'>
            <p className='font-semibold'>
              SKU:
            </p>
            <p className='font-semibold'>
              yx15-23
            </p>
          </div>
          <div className='flex gap-4 items-center'>
            <p className='font-semibold'>
              Category:
            </p>
            <p>
              Best Sellers Now Arrivals Womans
            </p>
          </div>
          <div className='my-6'>
            <p className='font-semibold mb-1'>Note:</p>
            <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
          </div>
          <div className="flex items-center my-4">
            <button onClick={handleMinus} className="px-2 py-1 text-gray-400 border">-</button>
            <p className="py-1 px-2 border bg-gray-300">{quantityProduct}</p>
            <button onClick={handlePlus} className="px-2 py-1 text-gray-400 border">+</button>
          </div>
          <div>
            <button className='btn w-full bg-black text-white font-bold text-center'>Buy It Now</button>
          </div>
          <div className='mt-6 mb-10'>
            <h1 className='text-lg font-semibold mb-4'>
              QUARANTEED SAFE CHECKOUT:
            </h1>
            <img src='https://cdn.shopify.com/s/files/1/0256/4594/0810/files/payment_700x.png?v=1616050837' alt='' />
          </div>
          <div className='flex items-center gap-4 my-6'>
            <button><FaRegHeart /></button>
            <h1 className='text-lg font-semibold'>
              ADD TO WISHLIST
            </h1>
          </div>
          <div className='flex items-center gap-4'>
            <button><FaShareAlt /></button>
            <p>Share:</p>
            <button><FaFacebookF /></button>
            <button><FaTwitter /></button>
            <button><FaShareAlt /></button>
          </div>
          <div className='flex items-center gap-4 my-4'>
            <button><FaRegClock /></button>
            <h1 className=''>
              Orders ship within 5 to 10 business days.
            </h1>
          </div>
          <div className='flex items-center gap-4'>
            <button><FaCarSide /></button>
            <h1 className=''>
              <span className='font-semibold
            '>Hoorey </span> ! This item ships free to the US
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="justify-center items-center text-center text-3xl my-16">
          <div className="flex gap-4  items-center">
            <button
              onClick={() => setComment(deliveryPolicy)}
              className=""
            >
              comment
            </button>
            <button
              onClick={() => setComment(description)}
              className=""
            >
              Like
            </button>
            <button
              onClick={() => setComment(discount)}
              className=""
            >
              Share
            </button>
          </div>
        </div>
        <div>
          <h1>
            {comment}
          </h1>
        </div>
      </div>


      <div>
        <RelatedProduct category={category} productType={productType} />
      </div>


    </>
  );
};

export default DetailsPage;