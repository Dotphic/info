import { useState } from "react";
import { motion } from "motion/react";
import Section from "./Section";

export default function Collage({
  background,
  title,
  children,
  height,
  className,
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateAmountY = ((y - centerY) / centerY) * 15;
    const rotateAmountX = ((centerX - x) / centerX) * 15;

    setRotateX(rotateAmountY);
    setRotateY(rotateAmountX);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative shadow-lg "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 5000 }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          //   scale: 1.05,
        }}
        transition={{ type: "tween", stiffness: 40, damping: 10 }}
      >
        <Section
          background={background}
          className={`${className} `}
          customStyles={{ height }}
        >
          <h2 className="text-amber-50 w-full font-coolvetica text-[10rem]">
            {title}
          </h2>
          {children}
        </Section>
      </motion.div>
    </motion.div>
  );
}
