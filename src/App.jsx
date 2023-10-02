
import React, {useState } from 'react';
import './App.scss';
import './sass/main.scss';
import './sass/modal.scss';


import Header from './component/Header';
import Card from './component/Card.js';
// import ServiceSection from './component/card.jsx'
import Hero from './component/Hero.js';
import Modal from "./modal";


import {motion} from 'framer-motion';



function App() {
  const [isOpen, setIsOpen ] = useState( false );
  const close = ()=> setIsOpen(false);
  const open = ()=> setIsOpen(true);
  
  return (
    <motion.div initial='initial' animate='animate'>
    <Header />
      <Hero />
      <Card />
      {/* {
        cardsData.map( (card)=><Card backgroundColor={card.backgroundColor} Icontype={card.Icontype} servicename={card.servicename}/> )
      }

      <ServiceSection /> */}
      {isOpen && <Modal isOpen={isOpen}  handleClose={close}/> }




    </motion.div>
  );
}

export default App;


