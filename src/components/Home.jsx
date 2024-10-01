import React from "react";
// import Navbar from "../screens/Navbar.jsx";
import Secondblog from "./Secondblog.jsx";
import HeroSection from "./Herosection.jsx";
import CourseSection from "./CourseSection.jsx";
import Swiper from './Swiper.jsx';
import Slides from "./Slides.jsx";

const Home = () => {
    return (
        <div className="flex  flex-col mt-14">
            {/* <Navbar/> */}
            <Slides/>
            
            <Secondblog/>

            <HeroSection/>

            <CourseSection/>

            <Swiper/>
            
        </div>
    )
}


export default Home;
