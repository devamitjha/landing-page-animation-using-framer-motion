import React, { useState } from "react";
import "../sass/main.scss";
import {motion} from "framer-motion"
import Modal from "./modal";

function Hamburger() {
  const [isOpen, setIsOpen ] = useState( false );
  const close = ()=> setIsOpen(false);
  const open = ()=> setIsOpen(true);
  
  return (
    <>
      <motion.button className="modalbtn"
      
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={()=>(isOpen ? close() : open())}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.button>
      {isOpen && <Modal isOpen={isOpen}  handleClose={close}/> }
   
    </>
  );
}

export default Hamburger;
