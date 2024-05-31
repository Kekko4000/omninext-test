import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer/footer'
import Welfare from './compo-home/welfare'
import Price_card from './compo-home/card-price'
import './home.css'

import phone from '../../assets/images/app-phone.png'
import arrow from '../../assets/images/arrow-right.png'
import img1 from '../../assets/images/welfare-1.png'
import img2 from '../../assets/images/welfare-2.png'
import img3 from '../../assets/images/welfare-3.png'
import img4 from '../../assets/images/welfare-4.png'


const welfareData = [
  {
    imgSrc: img1,
    title: "Cos’è il Welfare Aziendale?",
    description: "Tutti ne parlano ma pochi conoscono il suo potenziale"
  },
  {
    imgSrc: img2,
    title: "Come posso attrarre?",
    description: "Fidelizza e attrai nuovi talenti con un piano welfare mirato"
  },
  {
    imgSrc: img3,
    title: "Normative e vantaggi fiscali",
    description: "Risparmiare è facile grazie al tuo nuovo piano welfare"
  },
  {
    imgSrc: img4,
    title: "Storie attrattive",
    description: "Ascolta le testimonianze di chi ha ha migliorato il proprio stile di vita"
  }
];


const PriceCard = [
  {
    color: "#E6ECF9",
    price_euro: 12,
    price_cent: 50,
    description: [
      "Utenti illimitati",
      "Piattaforma MySarma",
      "Gestione del contratto online",
      "MySarma Welfare Card (fino a 258€)",
      "Importi personalizzabili online",
      "Sconti e Coupon"
    ],
    button: "Attiva Piano GO!"
  },
  {
    color: "#E6ECF9",
    price_euro: 22,
    price_cent: 80,
    description: [
      "Utenti illimitati",
      "Welfare Guru",
      "Piattaforma MySarma",
      "Gestione del contratto online",
      "Credito Welfare (illimitato)",
      "Importi personalizzabili online",
      "Gestione Scadenziata degli importi",
      "Gestione di più borsellini welfare",
      "Flexible Benefit",
      "Sconti e Coupon"
    ],
    button: "Calcola preventivo"
  }
];


function home() {



  return (
    <div className='flex flex-col w-full'>
      <Home_head firstCard={PriceCard[0]} />
      <Group_1 />
      <Group_2 welfareData={welfareData} />
      <Group_3 />
      <Group_4 PriceCard={PriceCard} />
      <Group_5 />
    </div>
  )
}



const Home_head = (props) => {

  const { firstCard } = props;

  return (
    <section className='bc-home w-full'>
      <div className='home-head '>
        <div className='layer'>
          <div className='home-head-content flex justify-center flex-row md:gap-20 max-md:gap-10  max-md:flex-col'>
            <div className='home-head-description flex flex-col justify-between relative pt-28 max-md:w-[350px] '>
              <h1 className='text-white max-md:text-[3rem] leading-[65px]'>Il Welfare aziendale a portata di PMI</h1>
              <p className='text-white text-2xl font-light max-md:pt-[2rem] pt-10'>MySarma nasce con l’obiettivo di supportare le aziende a rispondere concretamente ai bisogni di welfare dei propri dipendenti e collaboratori.</p>
            </div>
            <div className=' flex md:flex-col max-md:flex-col-reverse '>
              <Price_card
                color={firstCard.color}
                price_euro={firstCard.price_euro}
                price_cent={firstCard.price_cent}
                description={firstCard.description}
                button={firstCard.button}
                bool_arrow={window.innerWidth > 758 ? true : false}
              />
              <div className='flex flex-col items-center  max-md:hidden pt-14'>
                <p className='text-white font-light'>Cerchi un piano su misura per la tua azienda?</p>
                <p className='text-white  font-bold border-b-2 pb-0 mb-0 h-5 cursor-pointer border-white duration-75 hover:text-[#dcdcdc] hover:border-[#dcdcdc]'>Scopri il Piano Pro</p>
              </div>
              <div>
                <p className='text-white md:hidden  font-light inline-block pb-14' >Da oggi puoi attivare il tuo piano welfare direttamente online ed in pochi semplici passaggi grazie al <p className=' font-bold border-b-2 pb-0 mb-0 h-5 border-white inline-block'>Piano GO!</p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





const Group_1 = (props) => {
  return (
    <div className='min-h-screen bg-white flex   md:place-content-center md:items-center pt-6 pl-2 md:gap-8'>
      <div className='flex flex-col md:gap-16 max-md:gap-10'>
        <h1 className='text-[#1A316B]'>App</h1>
        <img src={phone} alt="phone" className='h-[358px] w-auto m-auto md:hidden'></img>
        <div className='text-[#7D8797] font-normal  text-2xl md:w-128 max-md:[356px] max-md:pt-4'>Con l’app MySarma gestirai il tuo credito welfare e potrai accedere al catalogo dei Benefit e Servizi acquistabili.</div>
        <div className='relative md:top-10'><img className='inline-block w-[18px]' src={arrow} /> <p className='text-base Sans text-[#0B1038] cursor-pointer duration-150 inline-block pl-4 hover:font-bold'>COMING SOON</p></div>
      </div>
      <div>
        <img src={phone} alt="phone" className='h-128 max-md:hidden'></img>
      </div>
    </div>
  );
};






const Group_2 = (props) => {

  const { welfareData } = props;

  return (
    <section className='min-h-[40rem] bg-white mt-32'>
      <div className='min-w-full m-auto text-center'>
        <h1 className='text-[#121127]'>Welfare aziendale?</h1>
        <p className='text-[#7D8797] font-normal  text-2xl max-md:pt-8'  >Te lo diciamo noi se non lo sai</p>
      </div>
      <div className='flex justify-around w-full md:mt-36 max-md:mt-12 max-md:flex-col max-md:gap-20'>
        {welfareData.map((item, index) => (
          <Welfare
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};


const Group_3 = (props) => {
  return (
    <div className='desc-group-2  p-1 place-content-center max-md:min-h-[40rem] md:min-h-[25rem]'>
      <div className='min-w-full m-auto text-center pt-6'>
        <p className='text-[#D2DCF4] text-2xl'>Sfrutta al meglio il tuo potenziale e fai crescere </p>
        <p className='text-[#F1F0FA] text-[32px] pt-3'>il benessere dei tuoi collaboratori?</p>
        <p className='text-[#E8E8E8] text-lg font-normal pt-8'>Attiva subito un <b className='font-bold cursor-pointer text-white hover:underline'>Piano Go</b> oppure richiedi un preventivo gratuito per attivare un Piano Pro.<br />Il nostro Welfare guru è pronto a consigliarti la migliore soluzione in base alle tue esigenze.  </p>
      </div>
    </div>
  );
};

const Group_4 = (props) => {

  const { PriceCard } = props;

  return (
    <section className=' bg-white min-w-full text-center pt-32'>
      <div className='min-w-full m-auto'>
        <p className='text-[#112340] text-5xl font-bold'>Attiva il tuo piano</p>
        <p className='text-[#112340] text-5xl font-bold'>Go oppure Pro</p>
        <p className='text-[#7D8797] text-2xl font-normal pt-12 md:w-[36rem] mx-auto'>Scegli se attiavre subito il Piano Go oppure richiedere  un preventivo per il Piano Pro al nostro consulente </p>
      </div>
      <div className='flex pt-24 w-full place-content-center gap-32 pb-40 max-md:flex-col'>
        {PriceCard.map((card, index) => (
          <Price_card
            key={index}
            color={card.color}
            price_euro={card.price_euro}
            price_cent={card.price_cent}
            description={card.description}
            button={card.button}
            bool_arrow={true}
          />
        ))}
      </div>
    </section>
  );
};

const Group_5 = (props) => {
  return (
    <section className='desc-group-4 items-center flex justify-center md:gap-24 max-md:gap-12 max-md:flex-col max-md:p-4   md:min-h-[25rem] max-md:min-h-[35rem]  '>
      <div className='text-left'>
        <p className='text-[#ffffff] text-[32px]'>Resta aggiornato</p>
        <p className='text-[#D2DCF4] font-normal w-full md:w-96 max-md:text-[18px]'>Iscriviti alla newsletter per ricevere aggiornamenti sulle nuove offerte e partener MySarma</p>
      </div>
      <div className='flex flex-col justify-start  items-start gap-3 '>
        <p className='text-[#D2DCF4]'>Il tuo indirizzo mail</p>
        <div className='flex max-md:flex-col gap-10 '>
          <input className='flex-auto  rounded-xl text-[#B8BCCA] pl-2 font-normal   md:min-w-[24rem] md:h-10 max-md:min-w-[355px] max-md:h-[48px] ' placeholder="@" type='text'></input>
          <div className='self-end  flex-auto  bg-[#FFFFFF] text-[#112340] px-5 pt-2 inline-block  cursor-pointer duration-150 md:h-10 rounded-xl max-md:w-[110px] max-md:h-[50px] max-md:text-[18px] max-md:pl-9 hover:bg-[#A1B5E8]'>Invia</div>
        </div>
      </div>
    </section>
  );
};

export default home