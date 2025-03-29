import SpotifyIcon from "../assets/icons/spotify.svg";
import { motion } from "motion/react";

export default function Music() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
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

      {/* <button
            onClick={() => window.open("https://open.spotify.com", "_blank")}
            className="group flex items-center gap-2 bg-white text-2xl text-black border-none py-2 px-10 
            shadow-[2px_2px_4px_rgba(0,0,0,0.5)] hover:cursor-pointer hover:font-bold transition-all duration-100 
            ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(14,99,248)] hover:text-white hover:shadow-[2px_2px_4px_rgba(0,0,0,0.5)] 
            hover:-translate-y-0.5"
        >
            Check me out on
            <img
                src={SpotifyIcon}
                alt="Spotify"
                className="w-6 h-6 transition-all duration-200 group-hover:invert"
            />
        </button> */}
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
    </div>
  );
}
