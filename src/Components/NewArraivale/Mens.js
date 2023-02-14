import React from 'react';
// import Card from '../Card/Card';
import ProductCard from './ProductCard';

const Mens = ({man}) => {
   if(man.length){
    return (
        <div className='grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 container mx-auto my-4'>
            {
                man.map(mansProducts=><ProductCard key={mansProducts._id} Products={mansProducts}></ProductCard>)
            }
        </div>
    );
   }
};

export default Mens;