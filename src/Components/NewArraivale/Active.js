import React from 'react';
import Card from '../Card/Card';
import ProductCard from './ProductCard';

const Active = ({active}) => {
 if(active.length){
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-2 container mx-auto my-4'>
            {
                active.map(activeProducts=><ProductCard key={activeProducts._id} Products={activeProducts}></ProductCard>)
            }
        </div>
    );
 }
};

export default Active;