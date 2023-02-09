import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import ProductCard from './ProductCard';

const Kids = ({ kids}) => {
 
    if(kids.length){
        return (
            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-2  container mx-auto my-4'>
            {
            kids.map(singleMan=><ProductCard key={singleMan._id} singleMan={singleMan}></ProductCard>)
            }
        </div>
        );
    }
};

export default Kids;