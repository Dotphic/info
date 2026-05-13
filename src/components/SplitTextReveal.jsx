import { motion } from "motion/react";

export default function SplitTextReveal({
  children,
  className = "",
  splitBy = "word",
  staggerDelay = 0.03,
  duration = 0.6,
  triggerOnLoad = false,
  delay = 0,
}) {
  const splitText = (text) => {
    if (splitBy === "char") {
      return text.split("").map((char, i) => ({
        char: char === " " ? " " : char,
        key: i,
      }));
    }
    return text.split(" ").map((word, i) => ({ char: word, key: i }));
  };

  const items = splitText(children);

  return (
    <span className={className}>
      {items.map((item, index) => (
        <motion.span
          key={item.key}
          initial={{ opacity: 0.1, y: 24, filter: "blur(12px)" }}
          {...(triggerOnLoad
            ? { animate: { opacity: 1, y: 0, filter: "blur(0px)" } }
            : {
                whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
                viewport: { once: true, margin: "0px 0px -15% 0px", amount: 0.1 },
              })}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {item.char}
          {splitBy === "word" && index < items.length - 1 && " "}
        </motion.span>
      ))}
    </span>
  );
}
