import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="grid grid-rows-3 ">
      <div className="grid grid-cols-2 mt-0 h-0">
        <img className="h-dvh mb-60 px-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfsi7iDlpmRccZIlQVrs_l7lAJTqPqjOIOQ&s" alt="/" />
        <div className="space-y-[20px] text-5xl text-black mt-28">
          <h2>
            Expand Your 
            <span className="underline font-bold text-[#fc8019]"> Horizons,</span> Enhance Your Skills
          </h2>
          <p className="text-xl gap-2">
            BAOIAM is an E-learning platform that focuses on the overall skill development of its learners by furnishing courses in a variety of disciplines that can help anyone level their skills & pursue their passion.
          </p>
          <ul className="text-sm font-bold grid grid-cols-2 gap-2">
            <li><IoMdCheckmark size={20} color="red" className="bg-slate-200 rounded-2xl inline shadow-xl" /> Self-Paced Learning</li>
            <li><IoMdCheckmark size={20} color="red" className="bg-slate-200 rounded-2xl inline" /> Quality Content</li>
            <li><IoMdCheckmark size={20} color="red" className="bg-slate-200 rounded-2xl inline" /> Experienced Trainers</li>
          </ul>
          <hr className="h-0.5 my-8 bg-black border-0 dark:bg-gray-700" />
          <div className="flex justify-between">
            <p className="text-3xl">
              <span className="underline font-bold text-orange-700">250+  </span> Mentors
            </p>
            <p className="text-right text-base grid grid-cols-1">
              Have Queries? Click Below Link 
              <span className="underline text-[#fc8019] text-base font-semibold">
                <FaHandPointRight size={20} className="gap-4 rounded-2xl text-[#fc8019] inline right-8" /> Contact Us
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
