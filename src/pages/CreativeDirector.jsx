import Paragraph from "../components/Paragraph";
import Section from "../components/Section";

import { motion } from "motion/react";
import { useState } from "react";

import CreativeOne from "../assets/images/creative-direction/Creative-1.jpg";
import CreativeTwo from "../assets/images/creative-direction/Creative-2.jpeg";
import CreativeThree from "../assets/images/creative-direction/Creative-3.jpg";
import CreativeFour from "../assets/images/creative-direction/Creative-4.jpeg";
import CreativeFive from "../assets/images/creative-direction/Creative-5.jpeg";
import CreativeSix from "../assets/images/creative-direction/Creative-6.jpg";
import CreativeSeven from "../assets/images/creative-direction/Creative-7.jpg";
import CreativeEight from "../assets/images/creative-direction/Creative-8.jpg";
import CreativeNine from "../assets/images/creative-direction/Creative-9.jpg";
import CreativeTen from "../assets/images/creative-direction/Creative-10.jpg";

import MasonryOne from "../assets/images/creative-direction/Masonry-1.png";
import MasonryTwo from "../assets/images/creative-direction/Masonry-2.jpg";
import MasonryThree from "../assets/images/creative-direction/Masonry-3.jpg";
import MasonryFour from "../assets/images/creative-direction/Masonry-4.jpg";
import MasonryFive from "../assets/images/creative-direction/Masonry-5.png";
import MasonrySix from "../assets/images/creative-direction/Masonry-6.jpg";
import MasonrySeven from "../assets/images/creative-direction/Masonry-7.png";
import MasonryEight from "../assets/images/creative-direction/Masonry-8.png";
import MasonryNine from "../assets/images/creative-direction/Masonry-9.jpg";
import MasonryTen from "../assets/images/creative-direction/Masonry-10.jpg";
import MasonryEleven from "../assets/images/creative-direction/Masonry-11.png";
import MasonryTwelve from "../assets/images/creative-direction/Masonry-12.jpg";

import MasonryTwenty from "../assets/images/creative-direction/Masonry-20.jpg";
import MasonryTwentyOne from "../assets/images/creative-direction/Masonry-21.jpg";
import MasonryTwentyTwo from "../assets/images/creative-direction/Masonry-22.png";
import MasonryTwentyThree from "../assets/images/creative-direction/Masonry-23.jpg";
import MasonryTwentyFour from "../assets/images/creative-direction/Masonry-24.png";
import MasonryTwentyFive from "../assets/images/creative-direction/Masonry-25.jpg";
import MasonryTwentySix from "../assets/images/creative-direction/Masonry-26.jpg";
import MasonryTwentySeven from "../assets/images/creative-direction/Masonry-27.jpeg";
import MasonryTwentyEight from "../assets/images/creative-direction/Masonry-28.jpg";
import MasonryTwentyNine from "../assets/images/creative-direction/Masonry-29.jpg";

function Collage({ background, title, children, height = "50rem" }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateAmountX = ((y - centerY) / centerY) * 15; // Adjust for effect strength
    const rotateAmountY = ((centerX - x) / centerX) * 15;

    setRotateX(rotateAmountX);
    setRotateY(rotateAmountY);
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
        transition={{ type: "spring", stiffness: 40, damping: 10 }}
      >
        <Section
          background={background}
          className={`w-dvw md:w-xl flex flex-col justify-center items-center`}
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

export default function CreativeDirector() {
  return (
    <div className="">
      <Section>
        <h1 className="mt-[10rem] text-center text-amber-50 w-full font-coolvetica font-20vw">
          Creative Direction
        </h1>
        <div className="relative z-100 flex flex-col justify-center items-center">
          <Section
            className=" flex flex-col justify-center items-center min-h-screen overflow-hidden text-white text-center z-100 bg-black lg:px-72 md:px-48 px-10 py-10"
            customStyles={{ width: "100vw" }}
          >
            <Paragraph>
              As a Creative Director, I have led and shaped visual narratives
              across various campaigns, events, and projects, bringing a
              distinct artistic vision to life. My expertise spans fashion
              editorials, event branding, photography direction, and graphic
              design, where I merge bold aesthetics with strategic storytelling.
              I specialize in concept development, visual styling, and
              overseeing production, ensuring each project delivers a cohesive
              and impactful creative experience.
            </Paragraph>

            <Paragraph>
              I have a strong background, especially in fashion, events, and
              food-focused content. As one of the curators for the DressUp
              sector of a magazine, I handled graphics, photography, and overall
              creative direction, shaping its visual identity.
            </Paragraph>

            <Paragraph>
              I worked on creating stylish layouts that brought fashion trends,
              event highlights, and culinary stories to life, making sure each
              feature was both visually striking and engaging. My goal was
              always to craft a cohesive and polished aesthetic that resonated
              with readers.
            </Paragraph>

            <Paragraph>
              I love using design, photography, and storytelling to create
              content that’s not just visually appealing but also captivates and
              connects with people
            </Paragraph>
          </Section>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 ">
          <Collage background={CreativeOne}></Collage>
          <Collage background={CreativeTwo}></Collage>
          <Collage background={CreativeThree}></Collage>
          <Collage background={CreativeFour}></Collage>
          <Collage background={CreativeFive}></Collage>
          <Collage background={CreativeSix}></Collage>
          <Collage background={CreativeSeven}></Collage>
          <Collage background={CreativeEight}></Collage>
          <Collage background={CreativeNine}></Collage>
          <Collage background={CreativeTen}></Collage>
        </div>
      </Section>

      <hr className="border-t border-2 border-b-gray-800"></hr>

      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 grid-dense">
          <Collage background={MasonryOne} height={"20rem"}></Collage>
          <Collage background={MasonryTwo}></Collage>
          <Collage background={MasonryThree}></Collage>
          <Collage background={MasonryFour}></Collage>
          <Collage background={MasonryFive}></Collage>
          <Collage background={MasonrySix} height={"20rem"}></Collage>
          <Collage background={MasonrySeven}></Collage>
          <Collage background={MasonryEight} height={"60rem"}></Collage>
          <Collage background={MasonryNine} height={"20rem"}></Collage>
          <Collage background={MasonryTen} height={"30rem"}></Collage>
          {/* <Collage background={MasonryEleven}></Collage> */}
          <Collage background={MasonryTwelve} height={"20rem"}></Collage>
        </div>
      </Section>

      <hr className="border-t border-2 border-b-gray-800"></hr>

      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 grid-dense">
          <Collage background={MasonryTwenty}></Collage>
          <Collage background={MasonryTwentyOne} height={"20rem"}></Collage>
          <Collage background={MasonryTwentyTwo} height={"30rem"}></Collage>
          <Collage background={MasonryTwentyThree} height={"20rem"}></Collage>
          <Collage background={MasonryTwentyFour} height={"20rem"}></Collage>
          <Collage background={MasonryTwentyFive} height={"20rem"}></Collage>
          <Collage background={MasonryTwentySix}></Collage>
          <Collage background={MasonryTwentySeven} height={"60rem"}></Collage>
          <Collage background={MasonryTwentyEight} height={"50rem"}></Collage>
          <Collage background={MasonryTwentyNine} height={"20rem"}></Collage>
        </div>
      </Section>
    </div>
  );
}
