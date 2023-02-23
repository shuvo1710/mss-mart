import React from 'react';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import ProductCard from './ProductCard';

const Active = ({active}) => {
 if(active.length){
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5  container mx-auto '>
            {
                active.map(activeProducts=><ProductCard key={activeProducts._id} Products={activeProducts}></ProductCard>)
            }
            
        </div>
    );
 }
};

export default Active;