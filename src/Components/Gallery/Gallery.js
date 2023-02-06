import React from 'react';
import ethnics from "../../resource/ethnics_590x577 (1).jpg"
import couple from "../../resource/couple1.jpg"
import femaleTshirt from  "../../resource/femaleTshirt.jpg"
import femaleOnePis from "../../resource/femaleOnePis1.jpg"
import kidsTshirt from "../../resource/kids-tShart.webp"
import mansShirt from "../../resource/mans-shart.jpg"
import mansPolo from "../../resource/mans-polo.jpg"
import western1 from "../../resource/western1 (1).jpg"
import western2 from "../../resource/western2 (1).jpg"



const Gallery = () => {
    return (
        <div className='my-10'>
            <div className='container mx-auto'>
                <h1>Most Loved Categories</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 mb-2 gap-2'>
                    <div className='w-full m-0'>
                        <img alt='' src={ethnics}/>
                    </div>
                    <div className='w-full m-0'>
                        <img alt='' src={ethnics}/>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2'>
                    <div className='h-full w-full'>
                        <img src={couple} alt='' />
                    </div>
                    <div className='h-full w-full'>
                        <img src={femaleTshirt} alt=''/>
                    </div>
                    <div className='h-full w-full'>
                        <img src={femaleOnePis} alt=''/>
                    </div>
                    <div className='h-full w-full'>
                        <img src={kidsTshirt} alt=''/>
                    </div>
                    <div className='h-full w-full'>
                        <img src={mansShirt} alt=''/>
                    </div>
                    <div className='h-full w-full'>
                        <img src={mansPolo} alt=''/>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='h-full w-full'>
                        <img src={western1} alt=''/>
                    </div>
                    <div className='h-full w-full'>
                        <img src={western2} alt=''/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;