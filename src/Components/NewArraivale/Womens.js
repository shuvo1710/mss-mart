import React from 'react';
import Card from '../Card/Card';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import ProductCard from './ProductCard';

const Womens = ({ woman}) => {
   if(woman.length){
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5   container mx-auto'>
        {
            woman.map(woManProducts=><ProductCard key={woManProducts._id} Products={woManProducts}></ProductCard>)
        }
        
    </div>
    );
   }
};

export default Womens;