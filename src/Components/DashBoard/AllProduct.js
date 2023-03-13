import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Category } from '../../CategoryContext/CategoryContext';
import Loader from '../Loder/Loader';

import AllProductCard from './AllProductCard';

const AllProduct = () => {
  const [productSlice, setProductSlice] = useState(10)
  const {data: allProducts = [], isLoading} = useQuery({
    queryKey:["allProducts",productSlice ],
    queryFn: async ()=>{
      const res = await fetch('http://localhost:5000/allProducts');
      const data = await res.json();
      return data;
    }
  })

  if(isLoading){
    return <Loader></Loader>
  }
 

  return (
    <div className='py-10'>
      <div className=' grid lg:grid-cols-5 gap-y-3 gap-x-4'>
        {
          allProducts.slice(0,productSlice).map((products, i) => <AllProductCard key={i} products={products} />)
        }
      </div>
      <div className='pt-4 flex justify-center items-center'>
      <button onClick={()=>setProductSlice(productSlice + 10)} disabled={productSlice > allProducts.length} className='btn btn-primary disabled:bg-gray-400 disabled:text-white'>Show More</button>
      </div>
    </div>
  );
};

export default AllProduct;