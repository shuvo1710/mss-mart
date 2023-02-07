import React from 'react';
import img1 from '../../resource/img offer1.jpg'
import img3 from '../../resource/imgOffer3.jpg'
import img4 from '../../resource/imgOffer4.png'
import img5 from '../../resource/imgOffer5.png'

const Valentine = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-col-4 grid-flow-col gap-4'>
                <div className="col-span-1 text-black m-auto item-center p-3 ">
                    <div>
                        <span className='headerStyle text-2xl text-base '>Offer for today</span>
                        <br />
                        <h2 className='text-3xl font-sans'>Premium User offer</h2>
                        <p className=''>
                            Lorem ipsum dolor sit amet
                            <br />
                            consectetur adipisicing.
                        </p>
                    </div>
                </div>
                <div className="col-span-3 ">
                    <div className='grid grid-cols-2 '>
                        <div className=' '>
                            <div className='row-span-1 bg-white m-4 '>
                                <img className='' src={img4} alt="" />
                            </div>
                            <div className=' row-span-1 '>
                                <div className='grid grid-cols-2  '>
                                    <div className='m-4'> <img src={img4} alt="" /> </div>
                                    <div className='m-4'> <img src={img5} alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className='row row-span-2 h-full'>
                            <div className='row-span-1 m-4'> <img className='h-2/4' src={img1} alt="" /></div>
                            <div className='row-span-1 m-4'><img className=' h-2/4' src={img3} alt="" /> </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Valentine;