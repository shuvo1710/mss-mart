import React from 'react';
import Card from '../Card/Card';
import ProductCard from './ProductCard';

const Womens = ({ woman}) => {
   if(woman.length){
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-2  container mx-auto my-4'>
        {
            woman.map(singleMan=><ProductCard key={singleMan._id} singleMan={singleMan}></ProductCard>)
        }
    </div>
    );
   }
};

export default Womens;