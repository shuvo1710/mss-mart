import React, { useContext } from 'react';
import { Category } from '../../CategoryContext/CategoryContext';
import Top from '../Top/Top';




const AddToCart = () => {
    const { productInfo } = useContext(Category)
    

    return (
        <>
        <Top/>
            {
                productInfo.length ?
                    <>
                        <div className='lg:py-10 py-4'>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Photo</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
                                    <>
                                        {
                                            productInfo.map((productCart, i) => <tbody key={productCart._id}>
                                                <tr>
                                                    <th>
                                                        {i + 1}
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={productCart?.products?.images[0]?.i} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {productCart?.products?.title}
                                                    </td>
                                                    <td>
                                                        {productCart?.products?.quantityProduct}
                                                    </td>
                                                    <td>
                                                        {productCart?.products?.discountValue}
                                                    </td>
                                                    <td>{productCart?.products?.quantityProduct * productCart?.products?.discountValue}</td>
                                                    <th>
                                                        <button className="btn btn-ghost btn-xs">details</button>
                                                    </th>
                                                </tr>
                                            </tbody>)
                                        }
                                    </>
                                </table>
                            </div>
                        </div>
                    </>
                    :
                    <div className='py-16 flex justify-center items-center'>
                        <p className='text-red-500'>No Data Found</p>
                    </div>
            }
        </>
    );
};

export default AddToCart;