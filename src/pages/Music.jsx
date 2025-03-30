import SpotifyIcon from "../assets/icons/spotify.svg";
import { motion } from "motion/react";
import Section from "../components/Section";

import MusicOne from "../assets/images/music/music-1.jpg";
import MusicTwo from "../assets/images/music/music-2.jpg";
import MusicThree from "../assets/images/music/music-3.jpg";
import MusicFour from "../assets/images/music/music-4.jpg";
import MusicFive from "../assets/images/music/music-5.jpg";

import PerformanceOne from "../assets/images/music/performances/performance-01.jpg";
import PerformanceTwo from "../assets/images/music/performances/performance-02.jpg";
import PerformanceThree from "../assets/images/music/performances/performance-03.jpg";
import PerformanceFour from "../assets/images/music/performances/performance-04.jpg";
import PerformanceFive from "../assets/images/music/performances/performance-05.jpg";
import PerformanceSix from "../assets/images/music/performances/performance-06.jpg";
import PerformanceSeven from "../assets/images/music/performances/performance-07.jpg";
import PerformanceEight from "../assets/images/music/performances/performance-08.jpg";
import PerformanceNine from "../assets/images/music/performances/performance-09.jpg";

export default function Music() {
  return (
    <div className="flex flex-col justify-center items-center  bg-black text-white">
      <motion.h1
        className="my-18 text-amber-50 font-coolvetica text-[10rem] md:text-[20rem]"
        animate={{
          scale: [1, 0.89, 1.01, 0.9, 1],
        }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        MUSIC
      </motion.h1>

      {/* Spotify */}
      <div className="flex flex-col items-center justify-center w-[90%] md:w-full">
        <div className="w-full lg:w-3xl xl:w-6xl">
          <iframe
            src="https://open.spotify.com/embed/artist/7Df0EzIGOjD6f50pHY38d0?utm_source=generator"
            width="100%"
            height="472"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Section
        className=" flex flex-col justify-center items-center overflow-hidden text-white text-center z-100 bg-black lg:px-72 md:px-48 px-10 py-10 md:py-48 pb-96"
        customStyles={{ width: "100vw" }}
      >
        <p className="text-amber-50 md:text-2xl text-xl mt-[5rem] md:mt-[2rem] lg:mt-[-5rem] ">
          I'm a multidisciplinary creative professional passionate about sound
          and visuals, with a love for design and storytelling. My journey began
          in architecture, which served as a gateway to discovering and
          understanding a variety of creative skills—from drawing and character
          design to sound design and visual storytelling. Over time, this
          foundation led me to explore digital art and audio design, where I’ve
          been able to combine technical precision with artistic expression.{" "}
          <br></br> <br></br> <br></br> In every project I take on, I bring
          dedication, perseverance, and a deep love for the creative process. My
          goal is to make meaningful art that resonates with people and tells a
          story, whether through visuals, sound, or a mix of both. I try to
          inspire others through my work, turning ideas into experiences that
          leave a lasting impression.
        </p>
      </Section>
      {/* Youtube */}
      <div className="flex items-center justify-center w-[90%] gap-2 mt-8">
        <iframe
          width="100%"
          height="715"
          src="https://www.youtube.com/embed/vAg069S6sEI?si=Oz-mrcR0HoEFqXYc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center justify-center w-[90%] gap-2 mt-8">
        <h2 className="font-coolvetica my-18 text-amber-50 text-[6rem]">
          Music Projects
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 place-items-center gap-8 grid-dense">
          <a
            href="https://youtu.be/76q0r5Fl6WU"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-gray-900 hover:cursor-pointer md:col-span-3"
          >
            <Section
              className={"h-80 w-80 md:w-[70rem]"}
              background={MusicOne}
            ></Section>
          </a>
          <a
            href="https://youtu.be/h3v1voTVl6I"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-gray-900 hover:cursor-pointer"
          >
            <Section className={"h-80 w-80"} background={MusicTwo}></Section>
          </a>
          <a
            href="https://youtu.be/wL7GLZDekVk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-gray-900 hover:cursor-pointer"
          >
            <Section className={"h-80 w-80"} background={MusicThree}></Section>
          </a>
          <a
            href="https://youtu.be/_R_ApSImyKk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-gray-900 hover:cursor-pointer"
          >
            <Section className={"h-80 w-80"} background={MusicFour}></Section>
          </a>
          <a
            href="https://youtu.be/MlgjnIOVYpM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-gray-900 hover:cursor-pointer md:col-span-3"
          >
            <Section
              className={"h-80 w-80 md:w-[70rem]"}
              background={MusicFive}
            ></Section>
          </a>
        </div>
      </div>

      {/* Performances */}
      <div className="flex flex-col items-center justify-center w-[90%] gap-36 mt-8">
        <h2 className="font-coolvetica mt-20 mb-[-3rem] text-amber-50 text-[5rem] md:text-[8rem]">
          performances
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 grid-dense">
          <Section
            className={"h-80 w-80 md:h-[30rem] md:w-[30rem]"}
            background={PerformanceOne}
          ></Section>
          <Section
            className={"h-80 w-80 md:h-[40rem] md:w-[30rem] "}
            background={PerformanceTwo}
          ></Section>
          <Section
            className={"h-80 w-80 md:h-[40rem] md:w-[30rem]"}
            background={PerformanceThree}
          ></Section>
          <Section
            className={"h-80 w-80 md:h-[20rem] md:w-[30rem] "}
            background={PerformanceFour}
          ></Section>
          <Section
            className={"h-80 w-80 md:h-[40rem] md:w-[30rem] "}
            background={PerformanceFive}
          ></Section>
          <Section
            className={"h-80 w-80 md:h-[40rem] md:w-[30rem]"}
            background={PerformanceSix}
          ></Section>
          <Section
            className={"h-80 w-80 md:h-[40rem] md:w-[30rem]"}
            background={PerformanceSeven}
          ></Section>
          <Section
            className={"h-80 w-80 md:h-[40rem] md:w-[30rem] "}
            background={PerformanceEight}
          ></Section>
          <Section
            className={"h-80 w-80 md:h-[20rem] md:w-[30rem]"}
            background={PerformanceNine}
          ></Section>
        </div>
      </div>
    </div>
  );
}
