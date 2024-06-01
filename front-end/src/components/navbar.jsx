import React, { useState, useEffect } from "react";
import './navbar.css';
import IconLogin from '../assets/images/login.png';
import IconLoginGreen from '../assets/images/login-green.png';
import { Outlet, Link } from "react-router-dom";

import Logo from '../assets/images/logo.png'
import Hamburger from '../assets/images/hamburger.png'
import Close from '../assets/images/close.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 758) {
        setMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);


  return (
    <nav className="layout-navbar h-20 w-full flex flex-row justify-between items-center 2xl:px-32  ">


      <div className="">
      <a href="\">
        <img src={Logo} className={`cursor-pointer flex-1 md:w-44 max-md:w-36 max-md:pl-2  ${menuOpen ? 'max-md:hidden' : ''}`} alt="logo"></img>
      </a>
      </div>

      <div className="md:hidden flex flex-row gap-5 items-center pr-4">
        <div className="text-[#299882] text-[16px] pr-2 cursor-pointer " > <img className="h-[30px] inline-block pb-1  pr-1 " src={IconLoginGreen} alt="login" />Accedi</div>
        <img className="w-[26px] h-[22px] cursor-pointer" onClick={toggleMenu} src={Hamburger} alt="hamburger " />
      </div>

      <div className={`navigation flex font-bold text-base h-full text-[#2B50B0]  ${menuOpen ? '' : 'max-md:hidden'}`}>

        {menuOpen &&
          <div className={` bg-white flex justify-between w-full`}>
            <img src={Logo} className="w-44 " alt="logo"></img>
            <img src={Close} className="w-7 ml-20" onClick={toggleMenu} alt="close" />
          </div>}
        <div><a href="\Aziendale">Welfare aziendale</a></div>
        <div><a href="\Chi-siamo">Chi siamo</a></div>
        <div><a href="\Servizi">I nostri servizi</a></div>
        <div><a href="\Welfare">Soluzioni welfare</a></div>
        <div><a href="\Blog">Blog</a></div>
        <div><a href="\Accedi"><div className="bg-[#ABE8DC] h-10 px-4 text-[#112340] rounded-2xl inline-flex items-center duration-75 hover:bg-[#34BFA3]"><img className="inline-block h-5 pr-2" src={IconLogin} alt="login" />Accedi alla piattaforma</div></a></div>
      </div>
    </nav>
  );
};

export default NavBar;

