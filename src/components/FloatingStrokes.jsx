import { motion } from "motion/react";
import { useMemo } from "react";

export default function FloatingStrokes({ count = 12 }) {
  const strokes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 73 + 17) % 100,
        top: (i * 47 + 31) % 100,
        delay: (i % 7) * 1.2,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {strokes.map((s, i) => (
        <motion.span
          key={i}
          className="absolute h-px w-10 bg-white/10 rotate-45"
          style={{ left: `${s.left}%`, top: `${s.top}%` }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 1, 0], y: -120 }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
