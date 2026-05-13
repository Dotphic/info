import { motion } from "motion/react";
import { CreativeDirection, Masonry } from "../constants/creativeMurals";
import SplitTextReveal from "../components/SplitTextReveal";
import FloatingStrokes from "../components/FloatingStrokes";
import ImageMasonry from "../components/ImageMasonry";

const creativeItems = CreativeDirection.map((src) => ({ src }));
const masonryItems = Masonry.map((m) => ({ src: m.image }));

export default function CreativeDirector() {
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
            [CREATIVE DIRECTION]
          </motion.p>
          <h1 className="font-coolvetica text-amber-50 text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] leading-none mb-16">
            <SplitTextReveal splitBy="char" staggerDelay={0.04} duration={0.7} triggerOnLoad>
              Creative Direction
            </SplitTextReveal>
          </h1>

          {/* Editorial two-column narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10 mt-8">
            <div className="lg:col-span-7 space-y-8">
              <p className="text-amber-50 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-snug">
                <SplitTextReveal splitBy="word" staggerDelay={0.02} duration={0.6}>
                  As a Creative Director, I lead and shape visual narratives across campaigns, events, and projects — bringing a distinct artistic vision to life through fashion editorials, event branding, photography direction, and graphic design.
                </SplitTextReveal>
              </p>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                <SplitTextReveal splitBy="word" staggerDelay={0.018} duration={0.55}>
                  I specialize in concept development, visual styling, and overseeing production — ensuring each project delivers a cohesive and impactful creative experience. My background spans fashion, events, and food-focused content, including work as a magazine curator where I handled graphics, photography, and overall creative direction.
                </SplitTextReveal>
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Disciplines</p>
                {["Fashion Editorials", "Event Branding", "Photography Direction", "Magazine Curation", "Concept Development", "Set Design"].map((s) => (
                  <div key={s} className="border-b border-white/5 pb-3 text-sm uppercase tracking-wide text-amber-50/70 hover:text-amber-50 transition-colors">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — Creative Direction shots */}
      <section className="px-0 pb-px">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Gallery · Editorial</p>
        </div>
        <ImageMasonry items={creativeItems} cols={2} />
      </section>

      {/* Gallery — Masonry / DressUp */}
      <section className="px-0 pt-px mt-px pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 my-12">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Gallery · DressUp Magazine</p>
        </div>
        <ImageMasonry items={masonryItems} cols={2} />
      </section>
    </div>
  );
}
