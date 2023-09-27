import React, { useState } from "react";
import "../sass/main.scss";
import {motion} from "framer-motion"
// import Modal from "./modal";

function Hamburger() {
  // const [isOpen, setIsOpen ] = useState( false )
  
  
  return (
    <>
      <motion.button className="modalbtn"
      
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // onClick={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.button>
   
    </>
  );
}

export default Hamburger;
