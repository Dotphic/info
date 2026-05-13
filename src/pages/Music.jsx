import { motion } from "motion/react";
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

const musicProjects = [
  { src: MusicOne, title: "Yearn", year: "2024", href: "https://youtu.be/76q0r5Fl6WU", description: "A sonic exploration of longing and texture — debut release from Dotphic." },
  { src: MusicTwo, title: "Project 2", year: "2024", href: "https://youtu.be/h3v1voTVl6I", description: "Electronic soundscape with architectural influences." },
  { src: MusicThree, title: "Project 3", year: "2024", href: "https://youtu.be/wL7GLZDekVk", description: "Pushing the limits of rhythm and space." },
  { src: MusicFour, title: "Project 4", year: "2024", href: "https://youtu.be/_R_ApSImyKk", description: "Deep, immersive ambient production." },
  { src: MusicFive, title: "Project 5", year: "2024", href: "https://youtu.be/MlgjnIOVYpM", description: "A collaborative journey through sound and silence." },
];

const performanceItems = [
  PerformanceOne, PerformanceTwo, PerformanceThree, PerformanceFour,
  PerformanceFive, PerformanceSix, PerformanceSeven, PerformanceEight, PerformanceNine,
].map((src) => ({ src }));

const boilerItems = [
  BoilerRoomOne, BoilerRoomTwo, BoilerRoomThree,
  BoilerRoomFour, BoilerRoomFive, BoilerRoomSix,
].map((src) => ({ src }));

export default function Music() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-40 pb-24">
        <FloatingStrokes count={10} />
        <div className="max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8"
          >
            [MUSIC]
          </motion.p>
          <h1 className="font-coolvetica text-amber-50 text-[7rem] sm:text-[12rem] md:text-[18rem] lg:text-[24rem] leading-none mb-16">
            <SplitTextReveal splitBy="char" staggerDelay={0.06} duration={0.8} triggerOnLoad>
              MUSIC
            </SplitTextReveal>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10">
            <div className="lg:col-span-7 space-y-8">
              <SplitTextReveal
                splitBy="word"
                staggerDelay={0.02}
                duration={0.6}
                className="text-amber-50 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-snug"
              >
                My music journey began in 11th grade when Skrillex's "Bangarang" changed everything. That was the moment I fell in love with electronic music — not just to listen, but to create.
              </SplitTextReveal>
              <SplitTextReveal
                splitBy="word"
                staggerDelay={0.018}
                duration={0.55}
                className="text-neutral-400 text-base md:text-lg leading-relaxed"
              >
                In 2020, during quarantine, I dove into Ableton. After years of obsessing over sound design, I stepped into live performance in 2024 — going from playing for 10 people to performing on Zoya and the Boiler Room stage in Addis Ababa. With Nerliv, I co-founded Feleksounds in 2023 — a music label pushing Ethiopian electronic music forward.
              </SplitTextReveal>
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

      {/* Spotify embed */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8">Listen</p>
          <div className="max-w-3xl">
            <iframe
              src="https://open.spotify.com/embed/artist/7Df0EzIGOjD6f50pHY38d0?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8">Watch</p>
          <div className="max-w-4xl">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/vAg069S6sEI?si=Oz-mrcR0HoEFqXYc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Music Projects — editorial alternating */}
      <section className="px-6 md:px-10 lg:px-16 pb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-coolvetica text-amber-50 text-4xl md:text-6xl mb-20">
            Music Projects
          </h2>
          <div className="space-y-28">
            {musicProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden block ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                        <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          Watch on YouTube →
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className={`flex flex-col justify-center gap-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{project.year}</p>
                    <SplitTextReveal
                      splitBy="word"
                      staggerDelay={0.04}
                      duration={0.6}
                      className="font-coolvetica text-amber-50 text-3xl md:text-4xl"
                    >
                      {project.title}
                    </SplitTextReveal>
                    <SplitTextReveal
                      splitBy="word"
                      staggerDelay={0.02}
                      duration={0.5}
                      className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md"
                    >
                      {project.description}
                    </SplitTextReveal>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start text-xs uppercase tracking-[0.25em] text-amber-50/60 hover:text-amber-50 transition-colors border-b border-amber-50/20 hover:border-amber-50/60 pb-0.5"
                    >
                      Watch on YouTube →
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performances */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-12">
          <h2 className="font-coolvetica text-amber-50 text-4xl md:text-6xl mb-2">Performances</h2>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Live · 2024</p>
        </div>
        <ImageMasonry items={performanceItems} cols={3} />
      </section>

      {/* Boiler Room */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-12">
          <h2 className="font-coolvetica text-amber-50 text-4xl md:text-6xl mb-2">Boiler Room</h2>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Addis Ababa · 2024</p>
        </div>
        <ImageMasonry items={boilerItems} cols={2} />
      </section>
    </div>
  );
}
