import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDatabase, faMobile, faServer} from "@fortawesome/free-solid-svg-icons";
import { faJs, faNode, faReact, faNodeJs, faCss3, faHtml5} from '@fortawesome/free-brands-svg-icons'
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 100,
  },
  animate: {
    x: "-1000%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 15,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const iconsArray = [faJs, faNode, faReact, faNodeJs, faCss3, faHtml5, faDatabase, faMobile, faServer]
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"#FF5500"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#FF5500"}}>For Your</motion.b> Business.
          </h1>
          <button>Stack i work on.</button>
        </div>
        <div className="bothContainer">
          <motion.div 
          variants={sliderVariants}
          className="slidingTextContainer">
            React.js React-Native Express.js Node.js MongoDB Redux Css3 Html5 Tailwind-Css
            Adding-More....✌️
          </motion.div>
        <motion.div 
          variants={variants}
          className="listContainer" 
          >
          {
            iconsArray.map((item,index)=>(
              <motion.a 
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="skillContainer">
                <FontAwesomeIcon 
                  size="4x"
                  icon={item} />
              </motion.a>
            ))
          }
      </motion.div>
      </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

          
{
  /**
   * 
  <motion.div
    variants={sliderVariants}
    initial="initial"
    animate="animate"
    className="listContainer"
  >
  </motion.div>

<motion.div
className="box"
whileHover={{ background: "lightgray", color: "black" }}
>
<h2>React.js</h2>
<p>
React is a JavaScript library created by Facebook. It’s the most popular library for building single-page applications and interactive user interfaces. Interestingly enough, oftentimes React is referred to as a framework.
</p>
<button>Read more...</button>
</motion.div>
<motion.div
className="box"
whileHover={{ background: "lightgray", color: "black" }}
>
<h2>Express.js</h2>
<p>
Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing.
</p>
<button>Read more...</button>
</motion.div>
<motion.div
className="box"
whileHover={{ background: "lightgray", color: "black" }}
>
<h2>Node.js</h2>
<p>
Node JS is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.
</p>
<button>Read more...</button>
</motion.div>
<motion.div
className="box"
whileHover={{ background: "lightgray", color: "black" }}
>
<h2>Mongo DB</h2>
<p>
MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the MongoDB are not in the form of tables. 
</p>
<button>Read more...</button>
</motion.div>

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



*/
}