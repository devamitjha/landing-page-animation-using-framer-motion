import React from 'react';
import '../sass/main.scss';


import { FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {IoMailOutline } from 'react-icons/io5';
import {IconContext} from "react-icons";

import {  header, stagger} from "../animations";
import Hamburger from './hamburger';



function Header(){


return( 
    <>

    
    <motion.header className='site-header' variants={stagger}>
  
      <motion.div className="logo_wrapper " variants={header}>Spa<span>City</span></motion.div>
      <motion.div className="menu_container" variants={stagger}>
        <motion.span variants={header}>
          <IconContext.Provider value={{color:"#000", size:"18px", className:"icons_container"}}>
            <div className="icon"><FaTwitter/></div>
            <div className="icon"><FaLinkedin/></div>
          </IconContext.Provider>
        </motion.span>
        <motion.span variants={header}>
          <IconContext.Provider value={{color:"#000", size:"18px"}}>
            <div className="icon"><IoMailOutline/></div>
            <div className="icon"><FaInstagram/></div>
            {/* olanipekunmicheal65@gmail.com */}
          </IconContext.Provider>
        </motion.span>
        </motion.div>
    
        <motion.span className="menu" variants={header}>
               <Hamburger />
            </motion.span>   
    </motion.header>
    </>

)
}

export default Header