import React from 'react';
import Card from '../Card/Card';
import ProductCard from './ProductCard';

const Mens = ({man}) => {
   if(man.length){
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-2  container mx-auto my-4'>
            {
                man.map(singleMan=><ProductCard key={singleMan._id} singleMan={singleMan}></ProductCard>)
            }
        </div>
    );
   }
};

export default Mens;