import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// modules=[ Navigation, Pagination ,Autoplay]

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../assets/jse.png';
import slide2 from '../assets/jse.png';
import slide3 from  '../assets/jse.png';





const Swipe = () => {
  return (
    <div className="ml-8 ">
      <h2 className="text-4xl text-gray-950  font-bold ml-6 mt-14 mb-10">
        Virtues and protocols <span className="underline text-orange-600">BAOIAM</span> works on
      </h2>
      <div className='flex justify-between flex-row'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Enable Swiper modules
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }} // Optional: Enables autoplay
        pagination={{ clickable: true }}
        // navigation
        //  modules={[ Navigation, Pagination ,Autoplay]}
         className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-between ml-24 mr-10">
            <img className="h-60 w-60" src={slide1} alt="Full-time support image 1"/>
            <div className="ml-4">
              <h3 className="text-base font-black text-left mt-24">FULL-TIME SUPPORT</h3>
              <p className="font-light text-sm text-left">
                BAOIAM is an E-learning platform that focuses on the overall skill development of its learners by offering courses in a variety of disciplines that can help anyone level up their skills and pursue their passion.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-between ml-24 mr-10">
            <img className="h-60 w-60" src={slide2} alt="Full-time support image 2"/>
            <div className="ml-4">
              <h3 className="text-base font-black text-left mt-24">FULL-TIME SUPPORT</h3>
              <p className="font-light text-sm text-left">
                BAOIAM is an E-learning platform that focuses on the overall skill development of its learners by offering courses in a variety of disciplines that can help anyone level up their skills and pursue their passion.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-between ml-24 mr-10">
            <img className="h-60 w-60" src={slide3} alt="Full-time support image 3"/>
            <div className="ml-4">
              <h3 className="text-base font-black text-left mt-24">FULL-TIME SUPPORT</h3>
              <p className="font-light text-sm text-left">
                BAOIAM is an E-learning platform that focuses on the overall skill development of its learners by offering courses in a variety of disciplines that can help anyone level up their skills and pursue their passion.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <img className=" w-[600px]" src='https://static.vecteezy.com/system/resources/previews/004/578/699/non_2x/man-working-with-computer-with-app-in-isometric-illustration-free-vector.jpg' alt=""/>
      
   </div>
    </div>
  );
};

export default Swipe;
