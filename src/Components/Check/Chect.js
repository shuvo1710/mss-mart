import React, { useContext } from 'react';
import { Category } from '../../CategoryContext/CategoryContext';

const Chect = () => {
    const {storeProduct}=useContext(Category)
    console.log(storeProduct);
    return (
        <div>
            {
                storeProduct.map(product=> <p>{product.productType}</p>)
            }
        </div>
    );
};

export default Chect;