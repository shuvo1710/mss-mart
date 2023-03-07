import React, { useContext } from 'react';
import { Category } from '../../CategoryContext/CategoryContext';
import CartCard from '../CartCard/CartCard';



const AddToCart = () => {
    const { productInfo } = useContext(Category)
    console.log(productInfo);
    
    return (
        <div>
            {
               productInfo.map(productCart=> <CartCard  key={productCart?._id} productCart={productCart}/>)
            }
        </div>
    );
};

export default AddToCart;