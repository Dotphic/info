import { motion, AnimatePresence } from "motion/react";
import { useEffect, useCallback } from "react";

export default function Lightbox({ items, selectedIndex, onClose, onPrev, onNext }) {
  const item = selectedIndex !== null ? items[selectedIndex] : null;

  const handleKey = useCallback(
    (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [selectedIndex, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-11 h-11 flex items-center justify-center bg-white/15 hover:bg-white/25 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            disabled={selectedIndex === 0}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-white/15 hover:bg-white/25 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            disabled={selectedIndex === items.length - 1}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-white/15 hover:bg-white/25 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Content */}
          <motion.div
            key={selectedIndex}
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.93, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center max-h-[90vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              alt={item.title || ""}
              className="max-h-[75vh] max-w-[85vw] w-auto object-contain"
            />
            {(item.title || item.description) && (
              <div className="mt-5 text-center max-w-lg">
                {item.year && (
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-1">{item.year}</p>
                )}
                {item.title && (
                  <p className="text-white font-coolvetica text-xl md:text-2xl">{item.title}</p>
                )}
                {item.description && (
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                )}
              </div>
            )}
            <p className="text-neutral-600 text-xs mt-3 tracking-widest">
              {selectedIndex + 1} / {items.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
