import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import ProductCard from './ProductCard';

const Kids = ({ kids}) => {
    
    if(kids.length){
        return (
            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5  container mx-auto '>
            {
            kids.map(kidsProducts=><ProductCard key={kidsProducts._id} Products={kidsProducts}></ProductCard>)
            }
            
        </div>
        );
    }
};

export default Kids;