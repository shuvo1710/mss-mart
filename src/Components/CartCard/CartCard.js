import React from 'react';

const CartCard = ({productCart}) => {
    console.log(productCart);

    return (
        <div className='container mx-auto py-10'>
            <div className='grid grid-cols-12 gap-x-2 gap-y-4 justify-center items-center'>
                <div className='col-span-2 h-40  w-40'>
                        <div className=''>
                        <img className='' src={productCart?.products?.images[0]?.i} alt='' />
                        </div>
                </div>
                <div className='col-span-10'>
                    <div className='grid grid-cols-12 gap-x-2 gap-y-4 '>
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
                            <p className='text-lg'>Total Price</p>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-lg'>Edit</p>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-lg'>Buy Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;