import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Masterly Education",
    img: "/masterly.jpg",
    desc: "The “Student Community Application” project is an innovative educational technology initiative that acknowledges the diverse aspects of the modern student experience beyond traditional classroom learning, as explored in this detailed report which delves into the project’s goals, approaches, and the importance of its key features—the “Mock Test” and “Resume Builder” modules.",
    link: "https://abdulaaqilkhan.github.io/MasterlyLanding/",
  },
  {
    id: 2,
    title: "Hinalicious portfolio",
    img: "/hina.jpg",
    desc: "Hina Afreen an Islamic teacher wanted an amazing portfolio that clould stand our from the row of ordinary so i created this master piece for her.",
    link: "https://hinalicious.vercel.app/",
  },
  {
    id: 3,
    title: "Feedants Social",
    img: "/feedweb.jpg",
    desc: "I am also working in Blaccskull pvt. ltd. as an Full-time intern, currently i am working on this social media web site and its android/Ios application simultenously.",
    link: "https://feedants.com/#/",
  },
  {
    id: 4,
    title: "Matrix.co",
    img: "/matrix.jpg",
    desc: "Matrix .co is my own project which aims to deliver some premimum services to students it is an extension the Masterly, Matrix objecty the tech related problems faced by students and tend to solve them in an easy manner & cost free.",
    link: "https://matrixv1.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>
                See Demo
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Live Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
