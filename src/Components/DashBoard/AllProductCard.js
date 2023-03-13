import React from 'react';
import { MdDelete } from 'react-icons/md';

const AllProductCard = (product) => {
    return (
        <div>
        <img src={product?.imageUrl} className="w-48 h-48 mx-auto rounded" alt="" />
        <div className="items-center text-center">
          <h1 className="text-xl font-semibold">{product?.fullName}</h1>
          <p className="font-medium">{product?.email}</p>
          <div className="flex mx-auto justify-center items-center text-center gap-10">
            <p className="text-md font-medium">{product?.gender}</p>
  
            <MdDelete className="cursor-pointer " />
          </div>
        </div>
      </div>
    );
};

export default AllProductCard;