import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

const ModalSlider = ({images}) => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
         {
            images?.map(image=> <SwiperSlide>
            <img className="w-full" src={image.i} />
          </SwiperSlide>)
         }
          
        </Swiper>
      </>
    );
};

export default ModalSlider;