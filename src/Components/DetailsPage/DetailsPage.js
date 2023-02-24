import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const data=useLoaderData();
    const {category, deliveryPolicy, description, details, discount, images, price,productSizes, productType, rating, returnAndExchangePolicy, title}=data;
   
    return (
       <div className='grid md:grid-cols-2 items-center gap-8 my-16 container mx-auto'>
        <div className=''>
        <img
          src={data.images[0].i}
          className="w-full md:w-2/3"
          alt=""
        />
        </div>
        <div className=''>
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className='my-4 flex items-center gap-4'>
            <h1 className="text-2xl font-bold">${price}</h1>
            <p>{rating}</p>
            </div>
            <p>{details}</p>
        </div>
       </div>
    );
};

export default DetailsPage;