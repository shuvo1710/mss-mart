import React from 'react';
import bestsale from "../../resource/bestSale.jpg"
import bestSale2 from "../../resource/bestSale2.jpg"

const BestSale = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center pb-10'>
                <h1 className='headerStyle text-5xl font-medium pb-4'>Popular Items</h1>
                <h3 className='text-3xl text-center '>Best Sale of This Week</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <img src={bestsale} alt='' />
                </div>
                <div className='px-20'>
                    <h2 className='text-3xl font-semibold mb-2'>Woman's Denim mini
                        dress</h2>
                    <p className='text-lg'>Does it get any more summertime than a classic summer dress? This
                        wardrobe icon has earned its rightful place on our list of sunshine
                        must-haves for a good reason.
                    </p>
                    <button class="btn mt-10 rounded bg-white text-black px-6">Button</button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div className='px-20'>
                    <h2 className='text-3xl font-semibold mb-2'>Handbag With a Chain</h2>
                    <p className='text-lg'>Does it get any more summertime than a classic summer dress? This
                        wardrobe icon has earned its rightful place on our list of sunshine
                        must-haves for a good reason.
                    </p>
                    <button class="btn mt-10 rounded bg-white text-black px-6">Button</button>
                </div>
                <div>
                    <img src={bestSale2} alt='' />
                </div>
            </div>
        </div>
    );
};

export default BestSale;