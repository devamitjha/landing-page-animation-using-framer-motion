
import React from 'react';
import './App.scss';
import './sass/main.scss';


import Header from './component/Header.jsx';
import Card from './component/Card';
import Hero from './component/Hero';

import {motion} from 'framer-motion';



function App() {
  return (
    <motion.div initial='initial' animate='animate'>
    <Header />
      <Hero />
      <Card />




    </motion.div>
  );
}

export default App;


