import { motion } from "motion/react";
import { GraphicsMural } from "../constants/GraphicsMural";
import { WebMural } from "../constants/WebMural";
import { MagazineMurals, Posters } from "../constants/MagazineMurals";
import { SocialMediaMural } from "../constants/SocialMediaMural";
import SplitTextReveal from "../components/SplitTextReveal";
import FloatingStrokes from "../components/FloatingStrokes";
import ImageMasonry from "../components/ImageMasonry";

const categories = [
  { id: "socialmedia", label: "Social Media", items: SocialMediaMural.map((src) => ({ src })) },
  { id: "branding", label: "Branding", items: GraphicsMural.map((src) => ({ src })) },
  { id: "magazine", label: "Magazine", items: MagazineMurals.map((src) => ({ src })) },
  { id: "poster", label: "Poster", items: Posters.map((src) => ({ src })) },
  { id: "webdesign", label: "Web Design", items: WebMural.map((src) => ({ src })) },
];


export default function Graphics() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-40 pb-24 text-left">
        <FloatingStrokes count={10} />
        <div className="max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8 text-center"
          >
            [GRAPHICS DESIGN]
          </motion.p>
          <h1 className="font-coolvetica text-center text-amber-50 text-[3.5rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[11rem] leading-none mb-12">
            <SplitTextReveal splitBy="char" staggerDelay={0.03} duration={0.7} triggerOnLoad>
              Graphics Design
            </SplitTextReveal>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10">
            <div className="lg:col-span-7 space-y-8">
              <p className="text-amber-50 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-snug">
                <SplitTextReveal splitBy="word" staggerDelay={0.02} duration={0.6}>
                  My design journey started with architecture — teaching me layout, presentation, and visual clarity. That love for the creative process gradually turned into a passion, and eventually, a career path.
                </SplitTextReveal>
              </p>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                <SplitTextReveal splitBy="word" staggerDelay={0.018} duration={0.55}>
                  4+ years across event branding, social media, newsletters, magazines, and marketing materials. From graphic designer to Creative Director at Afromile PLC — managing visual direction across LinkUp Addis, Atmosphere, and Proofit. Design is how I tell stories, solve problems, and bring ideas to life.
                </SplitTextReveal>
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Categories</p>
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="block border-b border-white/5 pb-3 text-sm uppercase tracking-wide text-amber-50/70 hover:text-amber-50 hover:pl-2 transition-all duration-200"
                  >
                    {cat.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery sections by category */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-12 flex items-baseline gap-6">
            <h2 className="font-coolvetica text-amber-50 text-4xl md:text-6xl">{cat.label}</h2>
            <span className="text-neutral-600 text-xs uppercase tracking-widest">{cat.items.length} works</span>
          </div>
          <ImageMasonry items={cat.items} cols={cat.id === "poster" ? 2 : 3} aspectRatio="natural" gap="sm" />
        </section>
      ))}
    </div>
  );
}
