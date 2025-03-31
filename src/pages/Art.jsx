import Paragraph from "../components/Paragraph";
import Section from "../components/Section";

import { motion } from "motion/react";
import { useState } from "react";

import ArtOne from "../assets/images/art/art-collage-01.jpg";
import ArtTwo from "../assets/images/art/art-collage-02.jpg";
import ArtThree from "../assets/images/art/art-collage-03.jpg";
import ArtFour from "../assets/images/art/art-collage-04.jpg";
import ArtFive from "../assets/images/art/art-collage-05.jpg";
import ArtSix from "../assets/images/art/art-collage-06.jpg";
import ArtSeven from "../assets/images/art/art-collage-07.jpg";
import ArtEight from "../assets/images/art/art-collage-08.jpg";
import ArtNine from "../assets/images/art/art-collage-09.jpg";
import ArtTen from "../assets/images/art/art-collage-10.jpg";
import ArtEleven from "../assets/images/art/art-collage-11.jpg";
import ArtTwelve from "../assets/images/art/art-collage-12.jpg";
import ArtThirteen from "../assets/images/art/art-collage-13.jpg";
import ArtFourteen from "../assets/images/art/art-collage-14.jpg";
import ArtFifteen from "../assets/images/art/art-collage-15.jpg";
import ArtSixteen from "../assets/images/art/art-collage-16.jpg";
import ArtSeventeen from "../assets/images/art/art-collage-17.jpg";
import ArtEighteen from "../assets/images/art/art-collage-18.jpg";
import ArtNineteen from "../assets/images/art/art-collage-19.jpg";
import ArtTwenty from "../assets/images/art/art-collage-20.jpg";
import ArtTwentyOne from "../assets/images/art/art-collage-21.jpg";
import ArtTwentyTwo from "../assets/images/art/art-collage-22.jpg";

function Collage({ background, title, children, height }) {
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
          className={`w-[20rem] h-[20rem] sm:w-[40rem] sm:h-[40rem] flex flex-col justify-center items-center `}
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

export default function Art() {
  return (
    <div>
      <Section>
        <h1 className="mt-[10rem] text-center text-amber-50 w-full w- font-coolvetica text-[15vw]">
          Art
        </h1>
        <div className="relative z-100 flex flex-col justify-center items-center">
          <Section
            className=" flex flex-col justify-center items-center min-h-screen overflow-hidden text-white text-center z-100 bg-black lg:px-72 md:px-48 px-10 py-10"
            customStyles={{ width: "100vw" }}
          >
            <Paragraph>
              Being a self-taught artist, I've always valued creativity and saw
              it as the core of who I am. Converting abstract ideas into
              concrete forms—often revolving around themes of reality, peace,
              and self-discovery—is my passion. Bright, colorful aesthetics with
              a dash of the unusual—what I like to call "pushing the
              boundaries"—are my thing.
            </Paragraph>

            <Paragraph>
              Since I seek to capture voices and expressions using a variety of
              media, my work is firmly grounded in humanity and emotion. As I go
              through this process, I ask myself and other people things like
              "Is this it? Did they feel this way? Is this my emotional state?
              Because the digital world offers countless opportunities for
              creativity and expression, this exploration motivates me to use it
              as a canvas for both my music and illustrations. Through my work,
              I wish to promote more understanding and empathy among people, and
              I hope to inspire others in the same way that I am inspired every
              day.
            </Paragraph>
          </Section>
        </div>
      </Section>

      <Section>
        <h2 className="font-coolvetica  mb-40 text-amber-50 text-[5rem] md:text-[8rem]">
          Some of my works
        </h2>
      </Section>

      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 ">
          <Collage background={ArtOne}></Collage>
          <Collage background={ArtTwo}></Collage>
          <Collage background={ArtThree}></Collage>
          <Collage background={ArtFour}></Collage>
          <Collage background={ArtFive}></Collage>
          <Collage background={ArtSix}></Collage>
          <Collage background={ArtSeven}></Collage>
          <Collage background={ArtEight}></Collage>
          <Collage background={ArtNine}></Collage>
          <Collage background={ArtTen}></Collage>
          <Collage background={ArtEleven}></Collage>
          <Collage background={ArtTwelve}></Collage>
          <Collage background={ArtThirteen}></Collage>
          <Collage background={ArtFourteen}></Collage>
          <Collage background={ArtFifteen}></Collage>
          <Collage background={ArtSixteen}></Collage>
          <Collage background={ArtSeventeen}></Collage>
          <Collage background={ArtEighteen}></Collage>
          <Collage background={ArtNineteen}></Collage>
          <Collage background={ArtTwenty}></Collage>
          <Collage background={ArtTwentyOne}></Collage>
          <Collage background={ArtTwentyTwo}></Collage>
        </div>
      </Section>
    </div>
  );
}
