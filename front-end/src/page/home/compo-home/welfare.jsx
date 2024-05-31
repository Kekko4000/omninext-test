import React from "react";

const Welfare = ({ imgSrc, title, description }) => {
  return (
    <>
        <div className="text-center  md:w-64" >
            <img className="h-28 m-auto" src={imgSrc}></img>
            <p className="text-[#6D7791] w-full max-md:text-[24px]">{title}</p>
            <p className="text-[#6D7791] font-normal m-auto max-md:text-[18px] max-md:w-[275px]">{description}</p>
            <div className="text-[#112340] bg-[#F6F9FF] w-40 h-12 mx-auto mt-4 flex items-center justify-center rounded-2xl duration-150 cursor-pointer hover:bg-[#A1B5E8]">Scopri di più</div>
        </div>
    </>
  );
};

export default Welfare;