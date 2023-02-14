import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import ProductCard from './ProductCard';

const Kids = ({ kids}) => {
    console.log(kids)
 
    if(kids.length){
        return (
            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-2  container mx-auto my-4'>
            {
            kids.map(kidsProducts=><ProductCard key={kidsProducts._id} Products={kidsProducts}></ProductCard>)
            }
        </div>
        );
    }
};

export default Kids;