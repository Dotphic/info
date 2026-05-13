import { useState } from "react";
import { motion } from "motion/react";
import SplitTextReveal from "./SplitTextReveal";
import Lightbox from "./Lightbox";

/**
 * Sage-inspired alternating editorial gallery.
 * items: Array of { src, title, description, year?, category? }
 */
export default function EditorialGallery({ items = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="space-y-24 md:space-y-32 lg:space-y-40">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
            >
              {/* Image */}
              <div
                className={`cursor-pointer group relative overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </div>

              {/* Text */}
              <div className={`flex flex-col justify-center gap-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                {item.year && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-xs uppercase tracking-[0.3em] text-neutral-500"
                  >
                    {item.category ? `${item.category} · ` : ""}{item.year}
                  </motion.p>
                )}
                <SplitTextReveal
                  splitBy="word"
                  staggerDelay={0.03}
                  duration={0.6}
                  className="font-coolvetica text-amber-50 text-3xl md:text-4xl lg:text-5xl leading-tight"
                >
                  {item.title}
                </SplitTextReveal>
                {item.description && (
                  <SplitTextReveal
                    splitBy="word"
                    staggerDelay={0.015}
                    duration={0.5}
                    className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md"
                  >
                    {item.description}
                  </SplitTextReveal>
                )}
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  onClick={() => setSelectedIndex(index)}
                  className="self-start mt-2 text-xs uppercase tracking-[0.25em] text-amber-50/60 hover:text-amber-50 transition-colors border-b border-amber-50/20 hover:border-amber-50/60 pb-0.5"
                >
                  View →
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Lightbox
        items={items}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={() => setSelectedIndex((i) => Math.max(0, i - 1))}
        onNext={() => setSelectedIndex((i) => Math.min(items.length - 1, i + 1))}
      />
    </>
  );
}
