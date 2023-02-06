import React from 'react';
import "./Gallery.css"
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
        <div className='my-20'>
            <div className='container mx-auto'>
                <h1 className='headerStyle text-5xl font-medium mb-4 text-center'>Most Loved Categories</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 mb-2 gap-3'>
                    <div className='overflow-hidden'>
                        <img alt='' src={ethnics} className="img-animation"/>
                    </div>
                    <div className='overflow-hidden'>
                        <img alt='' src={ethnics} className="img-animation"/>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2'>
                    <div className='overflow-hidden'>
                        <img src={couple} alt='' className="img-animation"/>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={femaleTshirt} alt='' className="img-animation"/>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={femaleOnePis} alt='' className="img-animation"/>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={kidsTshirt} alt='' className="img-animation"/>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={mansShirt} alt='' className="img-animation"/>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={mansPolo} alt='' className="img-animation"/>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-2 gap-2'>
                <div className='overflow-hidden'>
                        <img src={western1} alt='' className="img-animation"/>
                    </div>
                    <div className='overflow-hidden'>
                        <img src={western2} alt='' className="img-animation"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;