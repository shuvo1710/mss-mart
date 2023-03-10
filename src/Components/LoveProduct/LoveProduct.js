import React, { useContext } from 'react';
import { UserContext } from '../../CategoryContext/AuthContext';
import { Category } from '../../CategoryContext/CategoryContext';

import LoveProductCard from './LoveProductCard';

const LoveProduct = () => {

  const { loveProduct } = useContext(Category)

  return (
    <div className='container mx-auto'>
      {
        loveProduct?.length
          ?
          <div className='grid md:grid-cols-2 py-16 gap-6'>
            {
              loveProduct?.map(product => <LoveProductCard key={product._id} product={product}></LoveProductCard>)
            }
          </div>
          :
          <div className='py-16 flex justify-center items-center'>
            <p className='text-red-500'>No Data Found</p>
          </div>
      }



    </div>
  );
};

export default LoveProduct;