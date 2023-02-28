import React, { useContext } from 'react';
import { Category } from '../../CategoryContext/CategoryContext';
import BestSealCard from './BestSealCard';
import bestsale from "../../resource/bestSale.jpg"
import bestSale2 from "../../resource/bestSale2.jpg"

const BestSale = () => {
const {bestSeals} = useContext(Category);
// console.log(bestSeals[0])
const {firstImages,secondImage,fistCategory,fistPrice,secondPrice,fistTitle,secondTitle,fistDetails,secondDetails} = bestSeals[0];

// console.log(firstImages,secondImage)

   
    return (
        <div className='container mx-auto'>
            <div className='text-center pb-10'>
                <h1 className='headerStyle text-xl md:text-4xl font-medium pb-4'>Best Sale of This Week</h1>
                <h3 className='text-lg md:text-2xl headerStyle'>Don't Miss Out on Our Limited Time Offers and Huge Discounts</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <img src={firstImages[0]?.i} alt=''/>
                </div>
                <div className='px-20 py-4 lg:py-0'>
                    <h2 className='text-lg md:text-3xl font-semibold mb-2'>{fistTitle}</h2>
                    <p className='text-md md:text-lg'>{fistDetails}
                    </p>
                    <button className="btn mt-10 rounded bg-white text-black px-6 hover:text-white">Details</button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div className='px-20 py-4 lg:py-0'>
                    <h2 className='text-lg md:text-3xl font-semibold mb-2'>{secondTitle}</h2>
                    <p className='text-md md:text-lg'>{secondDetails}
                    </p>
                    <button className="btn mt-10 rounded bg-white text-black px-6 hover:text-white">Details</button>
                </div>
                <div>
                    <img src={secondImage[0]?.i} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default BestSale;