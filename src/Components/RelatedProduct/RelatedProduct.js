import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { BsCartPlus, BsImages } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Category } from '../../CategoryContext/CategoryContext';
import Loader from '../Loder/Loader';


import RelatedProductCard from './RelatedProductCard';

const RelatedProduct = ({ productType, setImg}) => {

    const { releted, setRelated } = useState([])
    const { setMOdalData } = useContext(Category);

    const { data: RelatedProduct = [], isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allProduct?productType=${productType}`);
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loader />
    }
   
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-x-2 gap-y-4'>
        {
        RelatedProduct.map(products=>
            <RelatedProductCard RelatedProduct={products} setImg={setImg}/>
            )
        }
        </div>
    );
};

export default RelatedProduct;