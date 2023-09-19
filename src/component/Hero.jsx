import {
  letter,
  firstName,
  lastName,
  fadeInUp,
  stagger,
  easeing,
  star,
  btnGroup,
} from "../animations";
import { motion } from "framer-motion";
import { IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";

function Hero() {
  return (
    <>
      <motion.div
        className="content_wrapper | even-columns"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: easeing }}
      >
        <motion.div className="left_content_wrapper">
          <motion.h2>
            <motion.span
              variants={firstName}
              initial="initial"
              animate="animate"
              className="first"
            >
              {/* <motion.span variants={letter}>S</motion.span>
        <motion.span variants={letter}>P</motion.span>
        <motion.span variants={letter}>A</motion.span>
        <motion.span variants={letter}>C</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>T</motion.span>
        <motion.span variants={letter}>Y</motion.span> */}

              <motion.span variants={letter}>W</motion.span>
              <motion.span variants={letter}>h</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter} className="second">
                S
              </motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>f</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>v</motion.span>
              <motion.span variants={letter}>e</motion.span>
            </motion.span>
            <br />
            <motion.span
              variants={lastName}
              initial="initial"
              animate="animate"
              className="last"
            >
              <motion.span variants={letter}>M</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>'s</motion.span>
              <motion.span variants={letter} className="second">
                S
              </motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>f</motion.span>
              <motion.span variants={letter} className="second">
                C
              </motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>e</motion.span>
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeInUp}>
            When, while lovely valley teems with vapor around meand <br />
            meridian sun strikes the upper impenetrable.
          </motion.p>

          <motion.div className="btn_group" variants={stagger}>
            <motion.div
              className="btn btn_primary"
              variants={btnGroup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://statuesque-toffee-2713d9.netlify.app/">
                Book us
              </a>
              <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </motion.div>
            <motion.div
              className="btn btn_secondary"
              variants={btnGroup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://statuesque-toffee-2713d9.netlify.app/signup/">

              Sign up
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="review_container" variants={stagger}>
            <motion.p className="total_review" variants={star}>
              64+ Reviews
            </motion.p>
            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
            </IconContext.Provider>
            <motion.p className="more_review" variants={star}>
              More then 450+ people taking services.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="right_content_wrapper | imgbx">
          <motion.img
            src={process.env.PUBLIC_URL + "/images/Spa-bro.png"}
            alt="bg"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
