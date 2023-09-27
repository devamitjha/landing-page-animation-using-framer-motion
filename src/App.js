
import React from 'react';
import './App.scss';
import './sass/main.scss';
import './sass/modal.scss';


import Header from './component/Header.jsx';
import Card from './component/Card';
// import ServiceSection from './component/card.jsx'
import Hero from './component/Hero';

import {motion} from 'framer-motion';



function App() {
  return (
    <motion.div initial='initial' animate='animate'>
    <Header />
      <Hero />
      <Card />
      {/* {
        cardsData.map( (card)=><Card backgroundColor={card.backgroundColor} Icontype={card.Icontype} servicename={card.servicename}/> )
      }

      <ServiceSection /> */}




    </motion.div>
  );
}

export default App;


