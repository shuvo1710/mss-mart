import React, { useContext } from 'react';
import { Category } from '../../CategoryContext/CategoryContext';
import img from "../../resource/femaleTshirt.jpg"

const AddToCart = () => {

    const {productInfo} =useContext(Category)
    console.log(productInfo);
    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-4'>
                    <img src={img} alt='' />
                </div>
                <div className='col-span-2'>
                    <p className='text-lg'>Title</p>
                </div>
                <div className='col-span-2'>
                <p className='text-lg'>Quantity</p>
                </div>
                <div className='col-span-2'>
                <p className='text-lg'>Price</p>
                </div>
                <div className='col-span-2'>
                <p className='text-lg'>Buy Now</p>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;