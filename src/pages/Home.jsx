import heroProfile from "../assets/images/hero-profile.png";
import ArtBoardOne from "../assets/images/Artboard-1.jpg";
import ArtBoardTwo from "../assets/images/Artboard-2.jpg";
import ArtBoardThree from "../assets/images/Artboard-3.jpg";
import ArtBoardFour from "../assets/images/Artboard-4.png";
import ArtBoardFive from "../assets/images/Artboard-5.jpg";
import CV from "../assets/documents/Robel-Tamiru-Sebsibe-Resume[04-2025].pdf";

import MasonryEleven from "../assets/images/creative-direction/Masonry-11.png";
import Straight from "../assets/images/straight.jpg";

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
import Collage from "../components/Collage";

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
            <a
              href={CV}
              download="Robel-Tamiru-Sebsibe-Resume[04-2025].pdf"
              aria-label="Download CV"
            >
              Download CV
            </a>
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
      </div>

      {/* Straight to the point */}
      <div className="h-dvh flex flex-col justify-center items-center">
        <Section>
          <motion.h2
            className="text-amber-50 w-full font-coolvetica font-20vw"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Straight
          </motion.h2>
          <motion.h2
            className="flex flex-row justify-center gap-8 items-center text-amber-50 w-full font-coolvetica font-20vw"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>to the</p>
            <Collage
              background={Straight}
              height={"15rem"}
              className="hidden lg:block min-w-[25rem]"
            ></Collage>
          </motion.h2>
          <motion.h2
            className="text-amber-50 w-full font-coolvetica font-20vw"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            Bold Ideas
          </motion.h2>
        </Section>
      </div>

      {/* Contact Me */}
      <div
        className="bg-black text-white py-20 px-4 md:px-10 lg:px-20"
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-coolvetica mb-10 text-center">
            LET'S CONNECT
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
                  <div className="flex gap-6">
                    <motion.a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-zinc-800 hover:bg-[rgb(248,22,14)] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
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

                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-zinc-800 hover:bg-[rgb(14,99,248)] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
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

                    <motion.a
                      href="https://behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-zinc-800 hover:bg-[rgb(19,19,19)] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-12.785 4v-14h7.289c4.827 0 7.091 2.828 6.07 6.901-.826 3.328-4.225 5.752-10.439 5.75l-2.92.049v1.3h-7v-14h6.938v4.001h-4.938v2.999h3.938v3h-3.938v2.999h4.938v-4.999l1.062-.001zm9.299-6.999h-5.063c.083-1.838 1.349-2.499 2.55-2.499 1.521 0 2.373.826 2.513 2.499z" />
                      </svg>
                    </motion.a>

                    <motion.a
                      href="https://dribbble.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="bg-zinc-800 hover:bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
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
