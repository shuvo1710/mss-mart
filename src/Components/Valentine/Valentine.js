import React from 'react';
// import img1 from '../../resource/valentaine5.jpg'
// import img2 from '../../resource/valentaine6.jpg'
// import img3 from '../../resource/valentaine3.jpg'
// import img4 from '../../resource/valentaine2.jpg'
// import img3 from '../../resource/imgOffer3.jpg'
// import img4 from '../../resource/imgOffer4.png'
// import img5 from '../../resource/imgOffer5.png'
import img01 from '../../resource/offer1.png'
import img02 from "../../resource/offer2.jpg"
import img03 from "../../resource/valentaine.jpg"
import img04 from "../../resource/valentaine2.jpg"


const Valentine = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                    <div className="text-black m-auto item-center p-3 ">
                        <div>
                            <span className='headerStyle text-4xl'>Offer for today</span>
                            <br />
                            <h2 className='text-3xl font-sans'>Premium User offer</h2>
                            <p className=''>
                                Lorem ipsum dolor sit amet
                                <br />
                                consectetur adipisicing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-9'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-8'>
                            <div className='col-span-9'>
                                <div>
                                    <img src={img01} alt='' />
                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <img src={img02} alt='' />
                                    </div>
                                    <div>
                                        <img src={img02} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-4'>
                            <div className='shuvo2 bg-black'>
                                <img src={img03} alt='' />
                            </div>
                            <div className='shuvo2 bg-red-600'>
                                <img src={img04} alt='' />
                            </div>
                            


                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Valentine;