import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaClock, FaFacebookF, FaHeart, FaRegHeart, FaShareAlt, FaTwitter } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const data=useLoaderData();
    const {category, deliveryPolicy, description, details, discount, images, price,productSizes, productType, rating, returnAndExchangePolicy, title}=data;
    const [quantityProduct, setQuantityProduct]=useState(1)
    const [img, setImg]=useState(data.images[0].i)
    console.log(img)

    const handlePlus = () => {
        const newValue = quantityProduct + 1;
        setQuantityProduct(newValue)
     
    }
  
    const handleMinus = () => {
      if(quantityProduct===1){
        return 
      }
      else{
        const newValue = quantityProduct - 1;
        setQuantityProduct(newValue)
      }
     
       
     
    }
   
    return (
       <div className='grid md:grid-cols-2 items-start gap-8 my-16 container mx-auto'>
        <div className=''>
       <div className='h-[610px] '>
       <img
          src={img}
          className="w-5/6 h-full"
          alt=""
        />
       </div>
       <div className='flex gap-4 mt-10 w-full'>
        {
          data.images.map(image=>
          <button onClick={()=> setImg(image.i)}>
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
        <div className=''>
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className='my-4 flex items-center gap-4'>
            <h1 className="text-2xl font-bold">${price}</h1>
            <p>{rating}</p>
            </div>
            <p>{details}</p>


            <div className='flex gap-4 items-center'>
              <p className='font-semibold'>
                Tags:
              </p>
              <p>
              Acessories, Dresses, Men, Vendor Levi's, Vinova, Women</p>
            </div>


            <div className='flex gap-4 items-center'>
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

            <div>
              <p>Note</p>
              <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
             

            </div>

            <div className="flex items-center">
                  <button  onClick={handleMinus} className="px-2 py-1 text-gray-400 border">-</button>
                  <p className="py-1 px-2 border bg-gray-300">{quantityProduct}</p>
                  <button onClick={handlePlus} className="px-2 py-1 text-gray-400 border">+</button>
           </div> 

           <div>
            <button className='btn w-full bg-black text-white font-bold text-center'>Buy It Now</button>
           </div>

           <div>
            <h1 className='text-lg font-semibold'>
              QUARANTEED SAFE CHECKOUT:
            </h1>
            <img src='https://cdn.shopify.com/s/files/1/0256/4594/0810/files/payment_700x.png?v=1616050837' alt=''/>
         
           </div>
           <div className='flex items-center gap-4'>
            <button><FaRegHeart/></button>
            <h1 className='text-lg font-semibold'>
              ADD TO WISHLIST
            </h1>

           </div>


           <div className='flex items-center gap-4'>
           <button><FaShareAlt/></button>
           <p>Share:</p>
           <button><FaFacebookF/></button>
           <button><FaTwitter/></button>
           <button><FaShareAlt/></button>
           </div>


           <div className='flex items-center gap-4'>
            <button><FaClock/></button>
            <h1 className=''>
            Orders ship within 5 to 10 business days.
            </h1>

           </div>



           <div className='flex items-center gap-4'>
            <button><FaClock/></button>
            <h1 className=''>
            Hoorey ! This item ships free to the US
            </h1>

           </div>
            
        </div>

        


       </div>
    );
};

export default DetailsPage;