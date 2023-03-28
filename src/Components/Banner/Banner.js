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
                modules={[Pagination, Autoplay]}
                className="mySwiper bannerSwiper">
                <SwiperSlide>
                    <div className='relative'>
                        <div className=''>
                            <img alt='' src={banner1} className="z-0" />
                        </div>
                        <div className='absolute top-1/4 lg:left-60 left-10 w-full z-10 hidden md:block'>
                            <h4 className="lg:text-2xl md:text-base text-sm font-medium uppercase">Fashion Trends</h4>
                            <h3 className='lg:text-4xl md:text-lg text-base font-semibold my-2 uppercase'>The hoslist of </h3>
                            <h1 className='lg:text-5xl md:text-xl text-lg font-bold py-2 uppercase'>Summer</h1>
                            <h6 className='text-lg'>The Biggest Spring/Summer 2023 Trends</h6>
                            <div className="lg:py-10 md:py-4">
                                <button className="btn rounded-none border-none text-black border-black bg-white hover:bg-black hover:text-white duration-300">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className=''>

                            <img alt='' src={banner2} className="z-0" />
                        </div>
                        <div className='absolute top-1/4 lg:left-60 left-10 w-full z-10 hidden md:block'>
                            <h4 className="lg:text-2xl md:text-base font-medium uppercase">Fashion Trends</h4>
                            <h3 className='lg:text-4xl md:text-lg font-semibold my-2 uppercase'>The hoslist of </h3>
                            <h1 className='lg:text-5xl md:text-xl font-bold py-2 uppercase'>Summer</h1>
                            <h6 className='text-lg'>The Biggest Spring/Summer 2023 Trends</h6>
                            <div className="lg:py-10 md:py-4">
                                <button className="btn rounded-none border-none text-black border-black bg-white hover:bg-black hover:text-white duration-300">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className=''>
                            <img alt='' src={banner3} className="z-0" />
                        </div>
                        <div className='absolute top-1/4 lg:left-60 left-10 w-full z-10 hidden md:block '>
                            <h4 className="lg:text-2xl md:text-base font-medium uppercase">New Collection</h4>
                            <h3 className='lg:text-4xl md:text-lg font-semibold my-2 uppercase'>Fashion </h3>
                            <h1 className='lg:text-5xl md:text-xl py-2 uppercase'>Glasses</h1>
                            <h6 className='text-lg'>Best eyeglasses for woman to channel your inner clark kent</h6>
                            <div className="lg:py-10 md:py-4">
                                <button className="btn rounded-none border-none text-black border-black bg-white hover:bg-black hover:text-white duration-300">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Banner;