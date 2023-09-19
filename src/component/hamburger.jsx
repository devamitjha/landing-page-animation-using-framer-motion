import React, { useState } from "react";
import "../sass/main.scss";

import Modal from "./modal";

function Hamburger() {
  const [isOpen, setIsOpen ] = useState( false )
  
  
  return (
    <>
      <button className="modalbtn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Modal open={ isOpen } onClose={ ( ) => setIsOpen( false ) } >
        this is content_wrapper
      </Modal>
    </>
  );
}

export default Hamburger;
