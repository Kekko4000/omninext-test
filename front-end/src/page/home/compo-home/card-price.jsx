import React, { useState } from "react";
import Info from '../../../assets/images/Vector.png';
import Arrow_bot from '../../../assets/images/arrow_bot.png';
import "./card-price.css";

const Price_card = ({ color, price_euro, price_cent, description, button, bool_arrow }) => {

  const [arrow, setArrow] = useState(bool_arrow);


  const handdle_arrow = () => {
    setArrow(!arrow);
  };

  

  return (
    <div className={`home-head-price-content  flex flex-col pb-10 h-min max-md:m-auto`} style={{ backgroundColor: color }}>
      <div className='flex flex-col justify-center items-center border-b-2 pb-3'>
        <b className='text-purple-800 text-3xl'>Piano GO!</b>
        <p className='text-purple-600 pt-4 text-xs font-normal'>a partire da</p>
        <div className='flex flex-row layout-price'>
          <div className='font-extrabold price'>€{price_euro}</div>
          <div className='flex flex-col pt-5 items-center'>
            <b className='flex-1 font-extrabold text-2xl'>,{price_cent}</b>
            <b className='flex-1 text-purple-800 font-normal text-sm leading-[0.4rem] iva '>+iva</b>
          </div>
        </div>
        <p className='text-[#2B50B0] font-normal pt-1 flex flex-row items-center gap-1'>all’anno / per utente <img className='info' src={Info} alt="info" /></p>
      </div>
      {arrow ?
        <div className='text-base font-medium text-gray-900 flex flex-col gap-3 pt-6'>
          {description.map((item, index) => (
            <div className='flex flex-row gap-2' key={index}>
              <div className='background-tick'><div className="checkmark"></div></div>
              <p>{item}</p>
            </div>
          ))}
          <div className="m-auto pb-7 pt-6 rotate-180 md:hidden" onClick={handdle_arrow}>
            <img className="w-[15px] " src={Arrow_bot} alt="arrow_bot" />
          </div>
        </div>
        :
        <div className="m-auto  pt-6  pb-8 md:hidden" onClick={handdle_arrow}>
          <img className="w-[15px] " src={Arrow_bot} alt="arrow_bot" />
        </div>
      }

      <div className='w-full flex items-center justify-center md:pt-12 max-md:pt6'>
        <div className='w-64 bg-white rounded-xl h-12 text-lg font-bold flex items-center justify-center cursor-pointer duration-75 hover:bg-[#A1B5E8]'>
          {button}
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center pt-5'>
        <p className='text-base text-[#A7AEBE] font-medium pb-0 mb-0  '>Vuoi maggiori informazioni sul piano?</p>
        <p className='text-base text-[#2B50B0] font-bold border-b-2 pb-0 mb-0 h-5 border-[#2B50B0] cursor-pointer duration-75 hover:text-[#6392eb] hover:border-[#6392eb]'>Scopri di più</p>
      </div>
    </div>
  );
};

export default Price_card;
