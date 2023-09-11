import React from 'react';
import {IoMailOutline, IoChevronForward, IoApps, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill} from "react-icons/io5";
import {IconContext} from "react-icons";
import {motion} from 'framer-motion';
// this has well
// let easing = [0.6,-0.05,0.01,0.99];

const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};

const item = {
    hidden:{opacity:0,y:20},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration:.2
        }
    }
}
// find out what this does
// const title = {
//     hidden:{
//         y:60,
//         opacity:0
//     },
//     show:{
//         y:0,
//         opacity:1,
//         transition:{
//             delay:.2,
//             duration:0.6,
//             ease:easing
//         }
//     }
// };

const hoverEffect = {
    whileHover:{
        scale:1.5,rotate:630,borderRadius:"100%"
    },
    whileTap:{
        scale:.8,rotate:630,borderRadius:"100%"
    },
}



function Card() {
  return (
    <motion.div className="service_container">
        <div className="title_wrapper">
            <motion.span className="service_title"
                initial={{y:20, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1.8}}
            >Our Services</motion.span>
            <motion.h2
                initial={{y:200, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1}}
            >Save Time Managing <br/>Your Own Stress. lets do that for you.</motion.h2>
        </div>


        <motion.div className="service_card" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ddfbf9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#14da8f", size:"22px"}}>
                        <IoMailOutline/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Hair cuts<br/>And Hair-styling.</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#e7daf8"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#5700cf", size:"22px"}}>
                        <IoApps/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Manicure<br/>And Pedicure's</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffede6"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#ff8559", size:"22px"}}>
                        <IoColorFill/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Facial's<br/>(different variants)</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffe1e9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#fa3970", size:"22px"}}>
                        <IoNotifications/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Spa's<br/>And Massage's</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#dcedff"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#56a8f4", size:"22px"}}>
                        <IoNewspaper/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Waxing<br/>(Different variants)</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#dbf9ed"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#06d786", size:"22px"}}>
                        <IoPieChart/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Makeup<br/>(& Edges laying)</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#fffada"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#f1df11", size:"22px"}}>
                        <IoCard/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Hair Coloring<br/>(& Hair Styling)</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card dark" variants={item}>
                <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="line" className="line"/>               
                <h2>+4 <br/>More...</h2>
                <a href="#">
                    <span>View more...</span>
                    <motion.span className="service_icon" style={{backgroundColor:"#14da8f"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#fff", size:"18px"}}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </motion.span>
                </a>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Card



//thanks for watching
//please subscribe my channel..........