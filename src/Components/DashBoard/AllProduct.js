import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Category } from '../../CategoryContext/CategoryContext';
import Loader from '../Loder/Loader';

import AllProductCard from './AllProductCard';

const AllProduct = () => {
  const [productSlice, setProductSlice] = useState(10)
const {allProduct}=useContext(Category)
 

  

  return (
    <div className='py-10'>
    
      <div className=' grid lg:grid-cols-5 gap-y-3 gap-x-4'>
        {
          allProduct.slice(0,productSlice).map((products, i) => <AllProductCard key={i} products={products}  />)
        }
      </div>
      <div className='pt-4 flex justify-center items-center'>
      <button onClick={()=>setProductSlice(productSlice + 20)} disabled={productSlice > allProduct.length} className='btn btn-primary disabled:bg-gray-400 disabled:text-white'>Show More</button>
      </div>
    </div>
  );
};

export default AllProduct;