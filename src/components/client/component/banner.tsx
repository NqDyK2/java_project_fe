import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../style/swiper.css'

import bannerImg from '../../../banner.png'
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
const Banner = () => {

    return (
        <>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper z-0"
            >
                <SwiperSlide><img src={bannerImg} alt="" width="100%" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg} alt="" width="100%" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg} alt="" width="100%" /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Banner