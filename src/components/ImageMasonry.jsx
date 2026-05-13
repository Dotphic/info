import { useState } from "react";
import { motion } from "motion/react";
import Lightbox from "./Lightbox";

/**
 * Renders a responsive masonry-style grid of images with lightbox.
 * items: Array of { src, title?, description?, year? } or bare image URL strings
 * cols: number of columns at xl breakpoint (default 2)
 */
export default function ImageMasonry({ items = [], cols = 2 }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const normalized = items.map((item) =>
    typeof item === "string" ? { src: item } : item
  );

  const colClass = cols === 3 ? "xl:grid-cols-3" : "xl:grid-cols-2";

  return (
    <>
      <div className={`grid grid-cols-1 ${colClass} gap-px bg-white/5`}>
        {normalized.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % cols) * 0.08 }}
            className="relative overflow-hidden bg-zinc-950 cursor-pointer group aspect-square"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={item.src}
              alt={item.title || ""}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {item.title && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-6">
                <p className="text-white font-coolvetica text-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.title}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <Lightbox
        items={normalized}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={() => setSelectedIndex((i) => Math.max(0, i - 1))}
        onNext={() => setSelectedIndex((i) => Math.min(normalized.length - 1, i + 1))}
      />
    </>
  );
}
