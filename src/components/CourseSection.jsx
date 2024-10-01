import React from "react";
import { PiLink } from "react-icons/pi";

const CourseSection = () => {
  return (
    <div className="mt-[700px]">
      <h2 className="text-6xl text-gray-950 gap-4 text-center font-bold mb-10">
        Advance your <span className="underline text-orange-600">career</span>
      </h2>
      <p className="text-xl font-light text-center mb-12">
        Learn in-demand skills, Here's our best-selling courses, handpicked for you.
      </p>
      <div className="grid grid-cols-3 gap-4 w-screen px-20 ">
        <div className="grid grid-rows-2 gap-2 px-22 py-22 border border-slate-300 rounded-lg shadow-2xl">
          <img className="h-50  W-100 rounded" src="https://boisestate.pressbooks.pub/app/uploads/sites/101/2021/04/Two-women-entrepreneurs-jump-next-to-a-large-lightbulb-of-a-business-idea-taking-off-like-a-rocket..jpg" alt="/" />
          <h2 className="text-lg text-left ml-4">
            <PiLink size={20} color="red" className="inline" /> Entrepreneurship
            <p><strong className="text-xl text-left">Entrepreneurship Course</strong></p>
            <p>Learn to start your own business with skills, experience, and knowledge.</p>
      
          <button className="mt-6  rounded-lg h-8 w-[150px] bg-[#FB5021] text-center text-lg text-slate-50">Readmore</button>
          </h2>
        </div>

        <div className="grid grid-rows-2 gap-2 px-25 py-25 border border-slate-300 rounded-lg shadow-2xl">
          <img className=" h-64 w-[700px] rounded" src="https://terem.tech/wp-content/uploads/2021/04/Why-you-need-Product-Management-1024x640.png" alt="/" />
          <h2 className="text-lg text-left ml-4">
            <PiLink size={20} color="red" className="inline" /> Product Management
            <p><strong className="text-xl text-left">Product Management Course</strong></p>
            <p>Reinvent your career with product management course</p>
          
          <button className=" mt-12 rounded-lg h-8 w-[150px] bg-[#FB5021] text-center text-lg text-slate-50">Readmore</button>
          </h2>
        </div>

        <div className="grid grid-rows-2 gap-2 px-25 py-25 border border-slate-300 rounded-lg shadow-2xl">
          <img className="rounded h-64 w-[700px]" src="https://www.cheggindia.com/wp-content/uploads/2021/09/25-Low-Investment-Business-Ideas-To-Start-Under-Rs.-1-Lakh.png" alt="/" />
          <h2 className="text-lg text-left ml-4">
            <PiLink size={20} color="red" className="inline" /> Business Ideas
            <p><strong className="text-xl text-left">Data Analytics</strong></p>
            <p>Explore the field of data processing</p>
          
          <button className=" mt-12 rounded-lg h-8 w-[150px] bg-[#FB5021] text-center text-lg text-slate-50">Readmore</button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
