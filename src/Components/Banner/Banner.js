import React from 'react';
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import banner1 from "../../resource/banner1.jpg"
import banner2 from "../../resource/banner2.jpg"
import banner3 from "../../resource/banner3.jpg"

const Banner = () => {
    return (
        <div>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination,Autoplay]}
                className="mySwiper bannerSwiper">
                <SwiperSlide>
                    <div className='relative'>
                        <div className=''>
                        
                            <img alt='' src={banner1} className="z-0"/>
                        </div>
                        <div className='absolute top-1/4 left-60 w-full z-10'>
                            <h4 className="text-2xl font-medium uppercase">Fashion Trends</h4>
                            <h3 className='text-4xl font-semibold my-2 uppercase'>The hoslist of </h3>
                            <h1 className='text-5xl font-bold my-2 uppercase'>Summer</h1>
                            <h6 className='text-lg'>The Biggest Spring/Summer 2023 Trends</h6>
                            <div className="my-10">
                                <button className="btn rounded-none text-black border-black bg-white">Shop Now</button>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <div className=''>
                        
                            <img alt='' src={banner2} className="z-0"/>
                        </div>
                        <div className='absolute top-1/4 left-60 w-full z-10'>
                            <h4 className="text-2xl font-medium uppercase">Fashion Trends</h4>
                            <h3 className='text-4xl font-semibold my-2 uppercase'>The hoslist of </h3>
                            <h1 className='text-5xl font-bold my-2 uppercase'>Summer</h1>
                            <h6 className='text-lg'>The Biggest Spring/Summer 2023 Trends</h6>
                            <div className="my-10">
                                <button className="btn rounded-none text-black border-black bg-white">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <div className=''>
                            <img alt='' src={banner3} className="z-0"/>
                        </div>
                        <div className='absolute top-1/4 left-60 w-full z-10'>
                            <h4 className="text-2xl font-medium uppercase">New Collection</h4>
                            <h3 className='text-4xl font-semibold my-2 uppercase'>Fashion </h3>
                            <h1 className='text-5xl font-bold my-2 uppercase'>Glasses</h1>
                            <h6 className='text-lg'>Best eyeglasses for woman to channel your inner clark kent</h6>
                            <div className="my-10">
                                <button className="btn rounded-none text-black border-black bg-white">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


export default Banner;