import heroProfile from "../assets/images/hero-profile.png";
import ArtBoardOne from "../assets/images/Artboard-1.jpg";
import ArtBoardTwo from "../assets/images/Artboard-2.jpg";
import ArtBoardThree from "../assets/images/Artboard-3.jpg";
import ArtBoardFour from "../assets/images/Artboard-4.png";
import ArtBoardFive from "../assets/images/Artboard-5.jpg";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

import Section from "../components/Section";
import ArtBoard from "../components/ArtBoard";

import { Link } from "react-router-dom";

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
        className="relative z-100 mt-[-50rem] sm:mt-[-66rem] lg:mt-[-46rem] flex flex-col justify-center items-center "
        id="about"
      >
        <Section
          className=" flex flex-col justify-center items-center overflow-hidden text-white text-center z-100 bg-black lg:px-72 md:px-48 px-10 py-10 md:py-48 pb-96"
          customStyles={{ width: "100vw" }}
        >
          <p className="text-amber-50 md:text-2xl text-xl mt-[5rem] md:mt-[2rem] lg:mt-[-5rem] ">
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
            className="bg-white mt-26 text-2xl text-black text-shadow border-none py-2 px-10 shadow-[2px_2px_4px_rgba(0,0,0,0.5)] hover:cursor-pointer hover:font-bold text transition-all duration-100 ease-[cubic-bezier(0.165,0.84,0.44,1)]
                    hover:bg-[rgb(14,99,248)] hover:text-white hover:shadow-[2px_2px_4px_rgba(0,0,0,0.5)] 
                    hover:-translate-y-0.5 "
          >
            Let's talk
          </button>
        </Section>
      </div>

      {/* Artboard section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8">
        {/* Creative Direction */}
        <ArtBoard background={ArtBoardOne} title={"Creative Direction"}>
          <Link to={"/creativedirector"}>
            <div
              className="group mt-16 flex items-center gap-2 bg-white text-2xl text-black border-none py-2 px-10 
  shadow-[2px_2px_4px_rgba(0,0,0,0.5)] hover:cursor-pointer hover:font-bold transition-all duration-100 
  ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(14,99,248)] hover:text-white hover:shadow-[2px_2px_4px_rgba(0,0,0,0.5)] 
  hover:-translate-y-0.5"
            >
              View
            </div>
          </Link>
        </ArtBoard>

        {/* Graphics design */}
        <ArtBoard background={ArtBoardTwo} title={"Graphics design"}></ArtBoard>

        {/* Music */}
        <ArtBoard background={ArtBoardThree} title={"Music"}>
          <Link to={"/music"}>
            <div
              className="group mt-16  flex items-center gap-2 bg-white text-2xl text-black border-none py-2 px-10 
  shadow-[2px_2px_4px_rgba(0,0,0,0.5)] hover:cursor-pointer hover:font-bold transition-all duration-100 
  ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(14,99,248)] hover:text-white hover:shadow-[2px_2px_4px_rgba(0,0,0,0.5)] 
  hover:-translate-y-0.5 hover:border-2 hover:border-amber-50"
            >
              View
            </div>
          </Link>
        </ArtBoard>

        <ArtBoard background={ArtBoardFour} title={"Branding"}></ArtBoard>
        <ArtBoard
          background={ArtBoardFive}
          title={"Art"}
          className={"xl:col-span-2 xl:w-5xl"}
        ></ArtBoard>
      </div>
    </>
  );
}
