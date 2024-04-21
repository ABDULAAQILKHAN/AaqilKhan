import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faL } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p  style={{width: "200px", textAlign: "center"}}>
          Aaqil khan
          </p>
        </motion.span>
        <div className="social">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}      
            class="iconHov" 
            href="https://www.linkedin.com/in/aaqil-khan-b45135170/">
              <FontAwesomeIcon 
              size="2x"
              icon={faLinkedin} />
          </motion.a>
          <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} 
          class="iconHov" 
          href="https://github.com/ABDULAAQILKHAN/">
              <FontAwesomeIcon 
              size="2x"
              icon={faGithub} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            class="iconHov" 
            href="https://www.instagram.com/aaqil.codes/">
              <FontAwesomeIcon 
              size="2x"
              icon={faInstagram} />
          </motion.a>
          {
            /**
             * 
          <a class="iconHov" href="#">
          <FontAwesomeIcon 
          size="2x"
          icon={faFacebook} />
          </a>
            */
         }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
