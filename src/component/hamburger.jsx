import React from "react";
import "../sass/main.scss";
import {motion} from "framer-motion"

function Hamburger( {onClick} ) {
  
  return (
    <>
      <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}

      >
        <span></span>
        <span></span>
        <span></span>
      </motion.div>
   
    </>
  );
}

export default Hamburger;
