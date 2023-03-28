import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { Category } from '../../CategoryContext/CategoryContext';


const AllproductsCard = (products) => {
  const {allProductRefetch}=useContext(Category)

  const product = products.products;

  const handleDelete = (_id) => {
  
    const agree = window.confirm(`are you sure to delete ${_id}`)
    if (agree) {
      fetch(`https://mss-mart-server.vercel.app/productsDelete/${_id}`, {
        method: "Delete",
      })
        .then(res => res.json())
        .then(data => {
          
          toast.success(`Deleted Successfully`)
          allProductRefetch()
        })
        .catch(error=>{
          toast.error(error.message)
         
        })
    }
  }

  return (
    <div>
      <div className='border pb-2'>
        <div className=''>
          <img src={product?.images[0]?.i} className="w-full h-full " alt="" />
        </div>
        <div className="items-center text-center lg:pt-2 pt-1">
          <h1 className="text-md font-semibold">{product?.title}</h1>
          <h1 className="text-md font-semibold">Price: {product?.price}</h1>
          <div className="flex mx-auto justify-center items-center text-center gap-4">
            <div onClick={()=> handleDelete(product?._id)} className='p-3 border cursor-pointer hover:bg-red-500 hover:text-white rounded duration-300'>
              <MdDelete className="text-2xl" />
            </div>
            <div className='p-3 border cursor-pointer hover:bg-red-500 hover:text-white rounded duration-300'>
              <TbEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllproductsCard;