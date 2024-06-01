import React from "react";
import Logo from '../../assets/images/LogoMySarm.png'
import Logo_Linked from '../../assets/images/Linkedin_Icon.png'
import './footer.css'

const Footer = () => {
    return (
        <footer className='desc-group-5 min-h-[20rem] '>
            <div className="footer text-[#898989] self-center">
                <div className='md:mr-[8rem]  '>
                    <div className="inline-block w-[160px] cursor-pointer">
                        <img src={Logo} alt="logo" className="inline-block align-middle w-[156px] pb-6" />
                        <span className="border-italian block w-full"></span>
                        <p className="text-[#E6ECF9] text-sm font-normal pt-5">Il welfare aziendale tutto italiano a portata di PMI.</p>
                    </div>
                </div>

                <div className='footer-info mr-4'>
                    <b className="text-[#FFFFFF] font-bold">Chi siamo</b>
                    <a>Vision & Mission</a>
                    <a>Il gruppo Omninext</a>
                    <a>Contattaci</a>
                </div>
                <div className="footer-info">
                    <b className="text-[#FFFFFF] font-bold">Soluzioni welfare</b>
                    <a>Flexible benefit</a>
                    <a>Premio di risultato</a>
                    <a>Performance Management</a>
                </div>
                <div className="footer-info flex align-top h-full">
                    <b className="text-[#FFFFFF] font-bold">Seguici su</b>
                    <a className="inline-block"> <img className="inline-block pr-2" src={Logo_Linked} alt="LinkedIn" />Linkedin</a>
                </div>
                <div className="md:pl-10 md:border-l-2 md:border-[#5A5A5A]">
                    <div className="flex flex-col  justify-between h-32">
                        <div>
                            <a className="text-[#A1B5E8] font-bold block cursor-pointer hover:underline">Piano GO!</a>
                            <a className="text-[#A1B5E8] font-bold block cursor-pointer hover:underline">Piano PRO</a>
                        </div>
                        <b className="text-[#A7AEBE] font-bold cursor-pointer max-md:pb-7 hover:text-[#e3e4e9]">Diventa partner</b>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 md:border-t-[1px] md:border-[#5A5A5A] w-4/5 cursor-pointer">
                <p className="text-[#898989] font-normal hover:text-[#e3e4e9]">Copyright © MySarma srl - Tutti i diritti riservati</p>
            </div>
        </footer>

    );
};


export default Footer;