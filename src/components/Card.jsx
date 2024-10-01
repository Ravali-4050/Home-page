import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="border-[#FB5021] border w-[250px] h-[300px] flex flex-col bg-zinc-100 items-center py-10 px-8 rounded-lg">
      <div className="p-[20px] rounded-[36px] bg-[#FB5021] justify-center items-center">
        {icon}
      </div>
      <h2 className="text-black text-xl font-bold text-center mt-5">
        {title}
      </h2>
      <p className="text-black text-base font-medium text-center mt-5">
        {description}
      </p>
    </div>
  );
};

export default Card;
