import { motion } from "motion/react";
import { Mural } from "../constants/ArtMurals";
import SplitTextReveal from "../components/SplitTextReveal";
import FloatingStrokes from "../components/FloatingStrokes";
import ImageMasonry from "../components/ImageMasonry";

const items = Mural.map((src) => ({ src }));

export default function Art() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-40 pb-24 text-left border-b border-white/10">
        <FloatingStrokes count={10} />
        <div className="max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8 text-center"
          >
            [ART]
          </motion.p>
          <h1 className="font-coolvetica text-center text-amber-50 text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] leading-none mb-12">
            <SplitTextReveal splitBy="char" staggerDelay={0.06} duration={0.7} triggerOnLoad>
              Art
            </SplitTextReveal>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10">
            <div className="lg:col-span-7 space-y-8">
              <p className="text-amber-50 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-snug">
                <SplitTextReveal splitBy="word" staggerDelay={0.02} duration={0.6}>
                  Being a self-taught artist, I've always valued creativity as the core of who I am. Converting abstract ideas into concrete forms — revolving around themes of reality, peace, and self-discovery.
                </SplitTextReveal>
              </p>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                <SplitTextReveal splitBy="word" staggerDelay={0.018} duration={0.55}>
                  Bright, colorful aesthetics with a dash of the unusual — what I call pushing the boundaries. My work is grounded in humanity and emotion, using a variety of media to capture voices and expressions. Through my work, I wish to promote understanding and empathy, and inspire others the same way I am inspired every day.
                </SplitTextReveal>
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Themes</p>
                {["Digital Illustration", "Character Design", "Abstract Concepts", "Emotional Narrative", "Color Exploration", "Self-Discovery"].map((s) => (
                  <div key={s} className="border-b border-white/5 pb-3 text-sm uppercase tracking-wide text-amber-50/70 hover:text-amber-50 transition-colors">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-12 flex items-baseline gap-6">
          <h2 className="font-coolvetica text-amber-50 text-4xl md:text-6xl">Gallery</h2>
          <span className="text-neutral-600 text-xs uppercase tracking-widest">{items.length} works</span>
        </div>
        <ImageMasonry items={items} cols={3} aspectRatio="natural" gap="sm" />
      </section>
    </div>
  );
}
