import React from 'react';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
// import Card from '../Card/Card';
import ProductCard from './ProductCard';

const Mens = ({man}) => {
   if(man.length){
    return (
        <div className='grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-2 gap-y-5 container mx-auto'>
            {
                man?.map(mansProducts=><ProductCard key={mansProducts._id} Products={mansProducts}></ProductCard>)
            }
         
        </div>
    );
   }
};

export default Mens;