import React from 'react';
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";


import { Pagination, Autoplay } from "swiper";


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
                    <div className="relative bannerImg2" >
                        <div className="absolute top-1/4">
                            <div className="px-10">
                                
                                    <h3 className="text-3xl font-semibold">Dresses And Jumpsuits</h3>
                                    <h1 className="text-6xl font-bold">Daisy Dress</h1>
                                    <div className="my-10">
                                        <button className="px-4 py-2 text-black border border-black bg-white">Shop Now</button>
                                    </div>
                           
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative bannerImg">
                        <div className="absolute top-1/4">
                            <div className="px-10" >
                              
                                    <h3 className="text-3xl font-semibold">Dresses And Jumpsuits</h3>
                                    <h1 className="text-6xl font-bold">Daisy Dress</h1>
                                    <div className="my-10">
                                        <button className="px-4 py-2 text-black border border-black bg-white">Shop Now</button>
                                    </div>
                            
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


export default Banner;