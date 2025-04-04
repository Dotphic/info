import heroProfile from "../assets/images/hero-profile.png";
import ArtBoardOne from "../assets/images/Artboard-1.jpg";
import ArtBoardTwo from "../assets/images/Artboard-2.jpg";
import ArtBoardThree from "../assets/images/Artboard-3.jpg";
import ArtBoardFour from "../assets/images/Artboard-4.png";
import ArtBoardFive from "../assets/images/Artboard-5.jpg";

import Pure from "../assets/images/pure.gif";
import MusicSet from "../assets/images/music-set.gif";
import CreativeSet from "../assets/images/creative-set.gif";
import YearnSet from "../assets/images/yearn-set.gif";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

import Section from "../components/Section";
import ArtBoard from "../components/ArtBoard";

import { Link } from "react-router-dom";
import { transform } from "motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const x_main_title = useTransform(scrollYProgress, [0, 1], [0, -1250]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/* Hero section */}
      <div className="relative h-[250vh]">
        <div className="mt-[100vh] absolute inset-0"></div>

        <div className="sticky top-0 z-20 overflow-visible h-svh flex flex-col">
          <Section
            background={heroProfile}
            className="sticky top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center h-screen text-white text-center z-0 overflow-hidden"
          >
            <motion.h1
              className="h-dvh flex flex-col justify-center items-center text-amber-50 w-full font-coolvetica font-20vw"
              style={{ x: x_main_title }}
              ref={ref}
              initial={{ opacity: 0, y: 10 }} // Start invisible & off-screen right
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              DOTPHIC
            </motion.h1>
          </Section>
        </div>
      </div>

      {/* About section */}
      <div
        className="relative z-100 mt-[-50rem] sm:mt-[-66rem] lg:mt-[-46rem]  flex flex-col justify-center items-center "
        id="about"
      >
        <Section
          className=" flex flex-col justify-center items-center overflow-hidden text-white text-center z-100 bg-black lg:px-72 md:px-48 px-10 py-10 md:py-48 pb-96"
          customStyles={{ width: "100vw" }}
        >
          <p className="text-amber-50 md:text-2xl text-xl mt-[5rem] md:mt-[2rem] lg:mt-[-5rem] max-w-3xl ">
            I'm a multidisciplinary creative professional passionate about sound
            and visuals, with a love for design and storytelling. My journey
            began in architecture, which served as a gateway to discovering and
            understanding a variety of creative skills—from drawing and
            character design to sound design and visual storytelling. Over time,
            this foundation led me to explore digital art and audio design,
            where I’ve been able to combine technical precision with artistic
            expression. <br></br> <br></br> <br></br> In every project I take
            on, I bring dedication, perseverance, and a deep love for the
            creative process. My goal is to make meaningful art that resonates
            with people and tells a story, whether through visuals, sound, or a
            mix of both. I try to inspire others through my work, turning ideas
            into experiences that leave a lasting impression.
          </p>

          <button
            className="bg-white mt-26 text-2xl text-black  border-none py-2 px-10 hover:cursor-pointer hover:font-bold text transition-all duration-100 ease-[cubic-bezier(0.165,0.84,0.44,1)]
                    hover:bg-[rgb(248,22,14)] hover:text-white  
                    hover:-translate-y-0.5 "
          >
            Let's talk
          </button>
          <motion.div
            className="mt-6 text-blue-50 text-xl hover:text-gray-800 font-medium transition-colors smooth-link"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <a href="#">Download CV</a>
          </motion.div>
        </Section>
      </div>

      {/* Artboard section */}
      <div className="grid grid-cols-1 place-items-center gap-8 overflow-hidden">
        {/* Creative Direction */}
        <ArtBoard background={CreativeSet} title={"Creative Direction"}>
          <Link to={"/creativedirector"}>
            <div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center gap-2 bg-white text-2xl text-black border-none py-2 px-10 
  hover:cursor-pointer hover:font-bold transition-all duration-100 
  ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(248,22,14)] hover:text-white  
  "
            >
              See More
            </div>
          </Link>
        </ArtBoard>

        {/* Graphics design */}
        <ArtBoard background={Pure} title={"Graphics design"}></ArtBoard>

        {/* Music */}
        <ArtBoard background={MusicSet} title={"Music"}>
          <Link to={"/music"}>
            <div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center gap-2 bg-white text-2xl text-black border-none py-2 px-10 
   hover:cursor-pointer hover:font-bold transition-all duration-100 
  ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(19,19,19)] hover:text-white  
  "
            >
              See More
            </div>
          </Link>
        </ArtBoard>

        <ArtBoard background={YearnSet} title={"Art"}>
          <Link to={"/art"}>
            <div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center gap-2 bg-white text-2xl text-black border-none py-2 px-10 
   hover:cursor-pointer hover:font-bold transition-all duration-100 
  ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(14,99,248)] hover:text-white  
  "
            >
              See More
            </div>
          </Link>
        </ArtBoard>
        <ArtBoard background={ArtBoardFour} title={"Branding"}></ArtBoard>
      </div>
    </>
  );
}
