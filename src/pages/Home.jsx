import heroProfile from "../assets/images/hero-profile.png";
import CV from "../assets/documents/Robel-Tamiru-Sebsibe-Resume[04-2025].pdf";

import Straight from "../assets/images/straight.jpg";

import Pure from "../assets/images/pure.gif";
import MusicSet from "../assets/images/music-set.gif";
import CreativeSet from "../assets/images/creative-set.gif";
import YearnSet from "../assets/images/yearn-set.gif";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

import Section from "../components/Section";
import SplitTextReveal from "../components/SplitTextReveal";
import FloatingStrokes from "../components/FloatingStrokes";

import { Link } from "react-router-dom";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover)");
    setIsDesktop(mq.matches);
  }, []);

  const { scrollYProgress } = useScroll();
  const x_main_title = useTransform(scrollYProgress, [0, 0.25], [0, isDesktop ? -800 : 0]);

  return (
    <>
      {/* Hero section */}
      <div className="relative h-[150vh]">
        <div className="mt-[100vh] absolute inset-0"></div>

        <div className="sticky top-0 z-20 overflow-hidden h-svh flex flex-col">
          <Section
            className="sticky top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center h-screen text-white text-center z-0 overflow-hidden"
          >
            {/* Parallax zoom background */}
            <motion.img
              src={heroProfile}
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                scale: useTransform(scrollYProgress, [0, 0.25], [1, 1.15]),
                willChange: "transform",
              }}
            />
            <motion.h1
              className="relative z-10 h-dvh flex flex-col justify-center items-center text-amber-50 w-full font-coolvetica font-20vw"
              style={{ x: x_main_title, willChange: "transform" }}
            >
              <SplitTextReveal
                splitBy="char"
                staggerDelay={0.06}
                duration={0.8}
                delay={0.2}
                triggerOnLoad
              >
                DOTPHIC
              </SplitTextReveal>
            </motion.h1>
          </Section>
        </div>
      </div>

      {/* About section — editorial two-column */}
      <div
        className="relative z-30 mt-[-20rem] sm:mt-[-30rem] lg:mt-[-24rem] bg-black w-full"
        id="about"
      >
        <FloatingStrokes count={14} />

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-48">
          {/* Top two-column: narrative + disciplines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16">
            <div className="lg:col-span-7 space-y-10 text-left">
              <p className="text-amber-50 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug">
                <SplitTextReveal splitBy="word" staggerDelay={0.02} duration={0.65}>
                  I’m Robel Tamiru Sebsibe — a multidisciplinary creative with a deep passion for sound, visuals, and storytelling. My journey started in architecture, which opened the door to drawing, character design, sound design, and visual narrative.
                </SplitTextReveal>
              </p>
              <p className="text-amber-50 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug">
                <SplitTextReveal splitBy="word" staggerDelay={0.018} duration={0.6}>
                  Over 4 years in graphic design and digital art, and now stepping into creative direction — guiding projects with a bigger-picture vision while staying hands-on with the craft. I create meaningful work that tells a story through visuals, sound, or both.
                </SplitTextReveal>
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24 flex flex-col gap-6">
                <h3 className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-2">What I do</h3>
                <ul className="space-y-3 text-sm font-semibold uppercase tracking-wide text-amber-50/80">
                  {["Creative Direction", "Graphic Design", "Digital Art", "Sound Design", "Music Production", "Visual Storytelling"].map((s) => (
                    <li key={s} className="hover:text-amber-50 transition-colors border-b border-white/5 pb-3">{s}</li>
                  ))}
                </ul>
                <div className="pt-4 text-neutral-500 text-xs leading-relaxed max-w-xs text-center">
                  denver, colorado — available for creative collaborations worldwide
                </div>
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-20 flex flex-col sm:flex-row gap-6 items-center">
            <Link
              to="/contact"
              className="bg-white text-xl text-black border-none py-3 px-10 hover:cursor-pointer hover:font-bold transition-all duration-100 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(248,22,14)] hover:text-white hover:-translate-y-0.5"
            >
              Let’s talk
            </Link>
            <motion.a
              href={CV}
              download="Robel-Tamiru-Sebsibe-Resume[04-2025].pdf"
              className="text-neutral-400 text-sm uppercase tracking-[0.2em] hover:text-amber-50 transition-colors border-b border-neutral-700 hover:border-amber-50 pb-0.5"
              whileHover={{ y: -1 }}
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </div>

      {/* Works section — editorial list */}
      <div id="works" className="relative z-30 bg-black py-20 w-full">
        <div className="w-full px-6 md:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-16">Selected Work</p>

          {[
            { bg: CreativeSet, title: "Creative Direction", to: "/creativedirector", num: "01" },
            { bg: Pure, title: "Graphics Design", to: "/graphics", num: "02" },
            { bg: MusicSet, title: "Music", to: "/music", num: "03" },
            { bg: YearnSet, title: "Art", to: "/art", num: "04" },
          ].map((item, i) => (
            <Link to={item.to} key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex items-center justify-between border-t border-white/10 py-14 hover:py-24 overflow-hidden cursor-pointer transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {/* Background image on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 md:opacity-0 md:group-hover:opacity-20 transition-opacity duration-500 scale-105"
                  style={{ backgroundImage: `url(${item.bg})` }}
                />
                <div className="relative flex items-center gap-10">
                  <span className="text-neutral-600 text-xs tracking-widest font-mono">{item.num}</span>
                  <span className="font-coolvetica text-amber-50 text-5xl md:text-7xl lg:text-8xl group-hover:translate-x-3 transition-transform duration-300">
                    {item.title}
                  </span>
                </div>
                <span className="relative text-neutral-500 text-sm uppercase tracking-[0.2em] group-hover:text-amber-50 transition-colors">
                  View →
                </span>
              </motion.div>
            </Link>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>

        {/* Straight to the point */}
      <div className="relative z-30 bg-black w-full py-32 md:py-48 overflow-hidden">
        <FloatingStrokes count={8} />

        {/* Label row */}
        <div className="px-6 md:px-10 lg:px-16 flex items-center justify-between mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Philosophy</span>
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Dotphic / 2025</span>
        </div>

        {/* Full-bleed type stack */}
        <div className="px-4 md:px-8 leading-[0.88]">
          <div className="overflow-hidden">
            <h2 className="font-coolvetica text-amber-50 text-[18vw] leading-[0.88]">
              <SplitTextReveal splitBy="char" staggerDelay={0.04} duration={0.8}>
                Straight
              </SplitTextReveal>
            </h2>
          </div>

          {/* "to the" row — text + inset photo */}
          <div className="flex items-center gap-6 md:gap-10">
            <h2 className="font-coolvetica text-amber-50 text-[18vw] leading-[0.88] shrink-0">
              <SplitTextReveal splitBy="char" staggerDelay={0.04} duration={0.8} delay={0.15}>
                to the
              </SplitTextReveal>
            </h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative overflow-hidden shrink-0 w-[28vw] h-[18vw] md:w-[20vw] md:h-[13vw]"
            >
              <img
                src={Straight}
                alt="Straight to the point"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <h2 className="font-coolvetica text-amber-50 text-[18vw] leading-[0.88]">
              <SplitTextReveal splitBy="char" staggerDelay={0.04} duration={0.8} delay={0.3}>
                Bold Ideas
              </SplitTextReveal>
            </h2>
          </div>
        </div>

        {/* Bottom rule + descriptor */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="px-6 md:px-10 lg:px-16 mt-14 flex flex-col sm:flex-row items-center sm:justify-between gap-4 border-t border-white/10 pt-6"
        >
          <p className="text-neutral-500 text-xs md:text-sm max-w-xs leading-relaxed">
            Every project carries a clear intent — no noise, no filler. Just the work.
          </p>
          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.25em] text-amber-50/60 hover:text-amber-50 transition-colors border-b border-amber-50/20 hover:border-amber-50/60 pb-0.5"
          >
            Work with me →
          </Link>
        </motion.div>
      </div>

      {/* Socials */}
      <div className="relative z-30 bg-black w-full border-t border-white/10">
        <div className="px-6 md:px-10 lg:px-16 py-6 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Find me</span>
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-600">@dotphic</span>
        </div>

        {[
          { label: "Instagram", handle: "@dotphic", href: "https://www.instagram.com/dotphic" },
          { label: "YouTube", handle: "@dotphic", href: "https://www.youtube.com/@dotphic" },
          { label: "Spotify", handle: "Dotphic", href: "https://open.spotify.com/artist/7Df0EzIGOjD6f50pHY38d0" },
          { label: "ArtStation", handle: "dotphic", href: "https://www.artstation.com/dotphic" },
          { label: "LinkedIn", handle: "robelsebsibe", href: "https://www.linkedin.com/in/robelsebsibe" },
        ].map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group flex items-center justify-between border-t border-white/5 px-6 md:px-10 lg:px-16 py-6 hover:bg-white/[0.03] transition-colors cursor-pointer"
          >
            <span className="font-coolvetica text-amber-50 text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-300">
              {s.label}
            </span>
            <span className="text-neutral-600 text-xs uppercase tracking-[0.25em] group-hover:text-amber-50 transition-colors">
              {s.handle} →
            </span>
          </motion.a>
        ))}
        <div className="border-t border-white/5" />
      </div>

    </>
  );
}
