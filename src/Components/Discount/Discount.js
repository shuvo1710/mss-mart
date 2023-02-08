import React from 'react';
import "./Discount.css"
import winter from "../../resource/winter 1.jpg"
import summer from "../../resource/summer1.jpg"

const Discount = () => {
    return (
        <div className='mt-20'>
            <div className='container mx-auto'>
                <div className='text-center pb-4'>
                    <h1 className='headerStyle text-4xl font-semibold pb-2'>Offer</h1>
                    <h3 className='headerStyle text-2xl font-medium'>Exclusive designs you won't find anywhere else</h3>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <div className="relative overflow-hidden transition duration-300 transform  cursor-pointer ">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src={winter}
                            alt="Person" />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            
                            <p className="mb-1 text-lg font-bold text-gray-100 ">
                            Snowy Savings:
                            </p>
                            <p className="mb-1 text-lg font-bold text-gray-100 ">
                            Enjoy Winter Discounts Up to 50% Off
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden transition duration-300 transform   cursor-pointer">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src={summer}
                            alt="Person" />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-40 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                            Sunny Deals:
                            </p>
                            <p className="mb-1 text-lg font-bold text-gray-100">
                             Get Your Summer Essentials at a Discount up to 50% off
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Discount;