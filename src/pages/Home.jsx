import heroProfile from "../assets/images/hero-profile.png";
import CV from "../assets/documents/Robel-Tamiru-Sebsibe-Resume[04-2025].pdf";

import Straight from "../assets/images/straight.jpg";

import Pure from "../assets/images/pure.gif";
import MusicSet from "../assets/images/music-set.gif";
import CreativeSet from "../assets/images/creative-set.gif";
import YearnSet from "../assets/images/yearn-set.gif";

import { motion, useScroll, useTransform } from "motion/react";

import Section from "../components/Section";
import SplitTextReveal from "../components/SplitTextReveal";
import FloatingStrokes from "../components/FloatingStrokes";

import { Link } from "react-router-dom";
import Collage from "../components/Collage";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const x_main_title = useTransform(scrollYProgress, [0, 1], [0, -1250]);

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
        className="relative z-30 mt-[-50rem] sm:mt-[-66rem] lg:mt-[-46rem] bg-black w-full"
        id="about"
      >
        <FloatingStrokes count={14} />

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-48">
          {/* Top two-column: narrative + disciplines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16">
            <div className="lg:col-span-7 space-y-10 text-left">
              <SplitTextReveal
                splitBy="word"
                staggerDelay={0.02}
                duration={0.65}
                className="text-amber-50 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug"
              >
                I’m Robel Tamiru Sebsibe — a multidisciplinary creative with a deep passion for sound, visuals, and storytelling. My journey started in architecture, which opened the door to drawing, character design, sound design, and visual narrative.
              </SplitTextReveal>
              <SplitTextReveal
                splitBy="word"
                staggerDelay={0.018}
                duration={0.6}
                className="text-amber-50 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug"
              >
                Over 4 years in graphic design and digital art, and now stepping into creative direction — guiding projects with a bigger-picture vision while staying hands-on with the craft. I create meaningful work that tells a story through visuals, sound, or both.
              </SplitTextReveal>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24 flex flex-col gap-6">
                <h3 className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-2">What I do</h3>
                <ul className="space-y-3 text-sm font-semibold uppercase tracking-wide text-amber-50/80">
                  {["Creative Direction", "Graphic Design", "Digital Art", "Sound Design", "Music Production", "Visual Storytelling"].map((s) => (
                    <li key={s} className="hover:text-amber-50 transition-colors border-b border-white/5 pb-3">{s}</li>
                  ))}
                </ul>
                <div className="pt-4 text-neutral-500 text-xs leading-relaxed max-w-xs">
                  addis ababa, ethiopia — available for creative collaborations worldwide
                </div>
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-20 flex flex-wrap gap-6 items-center">
            <a
              href="#contact"
              className="bg-white text-xl text-black border-none py-3 px-10 hover:cursor-pointer hover:font-bold transition-all duration-100 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(248,22,14)] hover:text-white hover:-translate-y-0.5"
            >
              Let’s talk
            </a>
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
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500 scale-105"
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
      <div className=" my-56 flex flex-col justify-center items-center">
        <Section>
          <h2 className="text-amber-50 w-full font-coolvetica font-20vw">
            <SplitTextReveal splitBy="char" staggerDelay={0.05} duration={0.7}>
              Straight
            </SplitTextReveal>
          </h2>
          <h2 className="flex flex-row justify-center gap-8 items-center text-amber-50 w-full font-coolvetica font-20vw">
            <SplitTextReveal splitBy="char" staggerDelay={0.05} duration={0.7} delay={0.15}>
              to the
            </SplitTextReveal>
            <Collage
              background={Straight}
              height={"15rem"}
              className="hidden lg:block min-w-[25rem]"
            ></Collage>
          </h2>
          <h2 className="text-amber-50 w-full font-coolvetica font-20vw">
            <SplitTextReveal splitBy="char" staggerDelay={0.05} duration={0.7} delay={0.3}>
              Bold Ideas
            </SplitTextReveal>
          </h2>
        </Section>
      </div>

      {/* Contact Me */}
      <div
        className="bg-black text-white py-20 px-4 md:px-10 lg:px-20"
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-coolvetica mb-10 text-center">
            <SplitTextReveal splitBy="char" staggerDelay={0.04} duration={0.7}>
              LET'S CONNECT
            </SplitTextReveal>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-2xl mb-6">Send me a message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const subject = e.target.subject.value;
                  const message = e.target.message.value;

                  // Open email client with pre-populated data
                  window.location.href = `mailto:robsizerex@gmail.com?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                  )}`;
                }}
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 p-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(248,22,14)]"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 p-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(248,22,14)]"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 text-left">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 p-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(248,22,14)]"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-left">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 p-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(248,22,14)]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-white text-2xl text-black border-none py-2 px-10 w-full 
                  hover:cursor-pointer hover:font-bold transition-all duration-100 
                  ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(248,22,14)] hover:text-white"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Links and Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl mb-6">Get in touch</h3>
                <p className="mb-8 text-zinc-300">
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your vision.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg mb-2 text-zinc-400">Email</h4>
                  <a
                    href="mailto:robsizerex@gmail.com"
                    className="text-xl hover:text-[rgb(248,22,14)] transition-colors"
                  >
                    robsizerex@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-lg mb-4 text-zinc-400">Social Media</h4>
                  <div className="flex items-center justify-center gap-6">
                    {/* Instagram */}
                    <motion.a
                      href="https://www.instagram.com/dotphic"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-zinc-800 hover:bg-[rgb(225,48,108)] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                      href="https://www.linkedin.com/in/robelsebsibe"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-zinc-800 hover:bg-[rgb(10,102,194)] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </motion.a>

                    {/* ArtStation */}
                    <motion.a
                      href="https://www.artstation.com/dotphic"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-zinc-800 hover:bg-[rgb(46,204,113)] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="currentColor"
                          d="M2.141 34l3.771 6.519.001.001C6.656 41.991 8.18 43 9.94 43l.003 0 0 0h25.03l-5.194-9H2.141zM45.859 34.341c0-.872-.257-1.683-.697-2.364L30.977 7.319C30.245 5.94 28.794 5 27.124 5h-7.496l21.91 37.962 3.454-5.982C45.673 35.835 45.859 35.328 45.859 34.341zM25.838 28L16.045 11.038 6.252 28z"
                        ></path>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://open.spotify.com/artist/7Df0EzIGOjD6f50pHY38d0?si=ImwANbriTqmucaR2FcwrdA"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-zinc-800 hover:bg-[rgb(30,215,96)] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </motion.a>

                    {/* YouTube */}
                    <motion.a
                      href="https://www.youtube.com/@dotphic"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-zinc-800 hover:bg-[rgb(255,0,0)] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>

              <motion.div
                className="mt-10 p-8 bg-zinc-900 rounded-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl mb-4">Looking for collaborations?</h3>
                <p className="mb-6 text-zinc-300">
                  I'm always open to collaborating on creative projects and
                  innovative ideas.
                </p>
                <Link to="/creativedirector">
                  <button
                    className="bg-white text-lg text-black border-none py-2 px-6
                    hover:cursor-pointer hover:font-bold transition-all duration-100 
                    ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[rgb(14,99,248)] hover:text-white"
                  >
                    View my work
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
