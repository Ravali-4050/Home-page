// import React from "react";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Navigation, Pagination, Autoplay } from 'swiper/modules'



// Swiper image slides
import slide1 from '../assets/banner1.png';
import slide2 from '../assets/banner2.png';
import slide3 from '../assets/banner3.png';


//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={50}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//             loop={true}
//           >
export default function Slides()  {
  return (
    <div>
      <Swiper
       // Enable Swiper modules
        spaceBetween={30}
        centeredSlides={true}
        // slidesPerView={1}
        // loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Optional: Enables autoplay
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]} 
      
         className="mySwiper"
      >

              <SwiperSlide>
              <img src={slide1} alt="Slide 1 description" />
              </SwiperSlide>

              <SwiperSlide>
              <img src={slide2} alt="Slide 2 description" />
              </SwiperSlide>

              <SwiperSlide>
              <img src={slide3} alt="Slide 3 description" /> 
              </SwiperSlide>
            
          </Swiper>
        </div>
      
    
  );
}

// export default Slides;
