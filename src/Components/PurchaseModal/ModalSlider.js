import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";


const ModalSlider = ({images}) => {
    return (
        <Swiper
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        
        modules={[Pagination,Autoplay]}
        className="mySwiper bannerSwiper">
       
        {
            images?.map(image=>  <SwiperSlide>
           <img className='w-full' src={image.i} alt=''/>
           
           </SwiperSlide>)
        }
    </Swiper>
    );
};

export default ModalSlider;