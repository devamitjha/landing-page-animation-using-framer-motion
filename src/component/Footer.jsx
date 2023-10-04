import React from 'react';
import '../sass/main.scss';
import {motion } from "framer-motion"
import {
 
    stagger,
 
  } from "../animations";




function Footer(){


return( 
    <>
    
    <motion.footer className='footer' variants={stagger}>

      <div className="container">
        <p className="text-center">&copy; {new Date().getFullYear()} Spacity</p>
      </div>

    </motion.footer>
    </>

)
}

export default Footer