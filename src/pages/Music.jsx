import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import SplitTextReveal from "../components/SplitTextReveal";
import FloatingStrokes from "../components/FloatingStrokes";
import ImageMasonry from "../components/ImageMasonry";

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

import BoilerRoomOne from "../assets/images/music/boilerroom/boilerroom-01.jpg";
import BoilerRoomTwo from "../assets/images/music/boilerroom/boilerroom-02.jpg";
import BoilerRoomThree from "../assets/images/music/boilerroom/boilerroom-03.jpg";
import BoilerRoomFour from "../assets/images/music/boilerroom/boilerroom-04.jpg";
import BoilerRoomFive from "../assets/images/music/boilerroom/boilerroom-05.jpg";
import BoilerRoomSix from "../assets/images/music/boilerroom/boilerroom-06.jpg";
import BoilerRoomSeven from "../assets/images/music/boilerroom/boilerroom-07.jpg";

const musicProjects = [
  { src: MusicOne,   num: "01", title: "Akkam",         year: "2024", href: "https://youtu.be/76q0r5Fl6WU", description: "A sonic exploration of longing and texture — debut release from Dotphic." },
  { src: MusicTwo,   num: "02", title: "Dying",         year: "2024", href: "https://youtu.be/h3v1voTVl6I", description: "Electronic soundscape with architectural influences." },
  { src: MusicThree, num: "03", title: "Mreh",          year: "2024", href: "https://youtu.be/wL7GLZDekVk", description: "Pushing the limits of rhythm and space." },
  { src: MusicFour,  num: "04", title: "Beza",          year: "2024", href: "https://youtu.be/_R_ApSImyKk", description: "Deep, immersive ambient production." },
  { src: MusicFive,  num: "05", title: "Life of Frank", year: "2024", href: "https://youtu.be/MlgjnIOVYpM", description: "A collaborative journey through sound and silence." },
];

const performanceItems = [
  PerformanceOne, PerformanceTwo, PerformanceThree, PerformanceFour,
  PerformanceFive, PerformanceSix, PerformanceSeven, PerformanceEight, PerformanceNine,
  BoilerRoomTwo, BoilerRoomThree, BoilerRoomFour, BoilerRoomFive, BoilerRoomSix,
].map((src) => ({ src }));

const boilerItems = [
  BoilerRoomOne, BoilerRoomSeven,
].map((src) => ({ src }));

function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col border-t border-white/10 overflow-hidden cursor-pointer"
    >
      {/* Background thumbnail on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500 scale-105"
        style={{ backgroundImage: `url(${project.src})` }}
      />

      {/* Main row */}
      <div className="relative flex items-center justify-between py-8 md:py-10">
        <div className="flex items-center gap-8 md:gap-12">
          <span className="text-neutral-600 text-xs tracking-widest font-mono shrink-0">{project.num}</span>
          <span className="font-coolvetica text-amber-50 text-4xl md:text-6xl lg:text-7xl group-hover:translate-x-2 transition-transform duration-300">
            {project.title}
          </span>
        </div>
        <div className="flex items-center gap-6 shrink-0">
          <span className="text-neutral-600 text-xs uppercase tracking-widest hidden sm:block">{project.year}</span>
          <span className="text-neutral-500 text-sm uppercase tracking-[0.2em] group-hover:text-amber-50 transition-colors">
            Watch →
          </span>
        </div>
      </div>

      {/* Description — slides in on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden"
          >
            <p className="text-neutral-400 text-sm md:text-base pb-8 pl-[calc(1.5rem+2rem+2rem)] md:pl-[calc(1.5rem+3rem+3rem)] max-w-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export default function Music() {
  return (
    <div className="bg-black min-h-screen text-white">

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-40 pb-24 text-left">
        <FloatingStrokes count={10} />
        <div className="max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8 text-center"
          >
            [MUSIC]
          </motion.p>
          <h1 className="font-coolvetica text-center text-amber-50 text-[7rem] sm:text-[12rem] md:text-[18rem] lg:text-[24rem] leading-none mb-16">
            <SplitTextReveal splitBy="char" staggerDelay={0.06} duration={0.8} triggerOnLoad>
              MUSIC
            </SplitTextReveal>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10">
            <div className="lg:col-span-7 space-y-8">
              <p className="text-amber-50 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-snug">
                <SplitTextReveal splitBy="word" staggerDelay={0.02} duration={0.6}>
                  My music journey began in 11th grade when Skrillex's "Bangarang" changed everything. That was the moment I fell in love with electronic music — not just to listen, but to create.
                </SplitTextReveal>
              </p>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                <SplitTextReveal splitBy="word" staggerDelay={0.018} duration={0.55}>
                  In 2020, during quarantine, I dove into Ableton. After years of obsessing over sound design, I stepped into live performance in 2024 — going from playing for 10 people to performing on Zoya and the Boiler Room stage in Addis Ababa. With Nerliv, I co-founded Feleksounds in 2023 — a music label pushing Ethiopian electronic music forward.
                </SplitTextReveal>
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Highlights</p>
                {["8 Years Production", "Boiler Room · 2024", "Zoya Stage · 2024", "Feleksounds Co-founder", "Ableton · Sound Design", "Electronic / Ambient"].map((s) => (
                  <div key={s} className="border-b border-white/5 pb-3 text-sm uppercase tracking-wide text-amber-50/70 hover:text-amber-50 transition-colors">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boiler Room */}
      <section className="pb-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-16 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 mb-2">
            <h2 className="font-coolvetica text-amber-50 text-5xl md:text-7xl lg:text-8xl">Boiler Room</h2>
            <span className="text-neutral-600 text-xs uppercase tracking-widest">Addis Ababa · 2024</span>
          </div>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl mt-4 mb-12 text-left">
            A defining moment — performing live on the Boiler Room stage in Addis Ababa, bringing Dotphic's sound to one of the world's most iconic electronic music platforms.
          </p>

          {/* Full video embed */}
          <div className="relative w-full mb-16" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/XRWFyXZNJEY"
              title="Dotphic — Boiler Room Addis Ababa 2024"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <ImageMasonry items={boilerItems} cols={2} aspectRatio="natural" gap="sm" />
      </section>

      {/* Listen & Watch */}
      <section className="px-6 md:px-10 lg:px-16 pb-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mt-16 mb-12">Listen & Watch</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4">Spotify</p>
              <iframe
                src="https://open.spotify.com/embed/artist/7Df0EzIGOjD6f50pHY38d0?utm_source=generator"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="border-0"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-4">YouTube</p>
              <iframe
                width="100%"
                height="352"
                src="https://www.youtube.com/embed/vAg069S6sEI?si=Oz-mrcR0HoEFqXYc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Music Projects */}
      <section className="px-6 md:px-10 lg:px-16 pb-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mt-16 mb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Projects</p>
            <span className="text-neutral-700 text-xs font-mono">{musicProjects.length} releases</span>
          </div>
          {musicProjects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* Performances */}
      <section className="pb-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-16 mb-12 flex items-baseline gap-6">
          <h2 className="font-coolvetica text-amber-50 text-4xl md:text-6xl">Performances</h2>
          <span className="text-neutral-600 text-xs uppercase tracking-widest">Live · 2024</span>
        </div>
        <ImageMasonry items={performanceItems} cols={3} aspectRatio="natural" gap="sm" />
      </section>

    </div>
  );
}
