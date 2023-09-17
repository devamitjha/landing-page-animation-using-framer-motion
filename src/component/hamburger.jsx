import React from 'react';
import '../sass/main.scss';

import { motion } from 'framer-motion';



function hamburger(){
    return (
        <>   
            <motion.span className="menu" variants={header}>
                <span></span>
                <span></span>
                <span></span>
            </motion.span>
        </>
    )
}

export default hamburger