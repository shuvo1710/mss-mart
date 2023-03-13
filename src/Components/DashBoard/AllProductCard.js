import React, { useContext, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { Category } from '../../CategoryContext/CategoryContext';

const AllproductsCard = (products) => {
  



  const product = products.products;
  // console.log(product);
  return (
    <div className='border pb-2'>
      <div className=''>
        <img src={product?.images[0]?.i} className="w-full h-full " alt="" />
      </div>
      <div className="items-center text-center lg:pt-2 pt-1">
        <h1 className="text-md font-semibold">{product?.title}</h1>
        <h1 className="text-md font-semibold">Price: {product?.price}</h1>
        <div className="flex mx-auto justify-center items-center text-center gap-4">
          <div className='p-3 border cursor-pointer hover:bg-red-500 hover:text-white rounded duration-300'>
          <MdDelete className="text-2xl" />
          </div>
          <div className='p-3 border cursor-pointer hover:bg-red-500 hover:text-white rounded duration-300'>
          <TbEdit/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllproductsCard;