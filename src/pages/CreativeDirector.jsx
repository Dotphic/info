import Paragraph from "../components/Paragraph";
import Section from "../components/Section";

import { motion } from "motion/react";
import { useState } from "react";

import { image } from "motion/react-client";
import { CreativeDirection, Masonry } from "../constants/creativeMurals";

import Collage from "../components/Collage";

export default function CreativeDirector() {
  return (
    <div className="">
      <Section>
        <h1 className="mt-[10rem] text-center text-amber-50 w-full w- font-coolvetica text-[15vw]">
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
          {CreativeDirection.map((art, index) => (
            <Collage
              key={index}
              background={art}
              className="w-[100vw] md:w-xl flex flex-col justify-center items-center h-[30rem]"
              height="50rem"
            ></Collage>
          ))}
        </div>
      </Section>

      <hr className="border-t border-2 border-b-gray-800  py-14"></hr>

      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 grid-dense">
          {Masonry.map((masonry, index) => (
            <Collage
              key={index}
              background={masonry.image}
              className="w-[100vw] md:w-xl flex flex-col justify-center items-center h-[30rem]"
              height={masonry.height}
            ></Collage>
          ))}
        </div>
      </Section>

      <hr className="border-t border-2 border-b-gray-800 py-14"></hr>
    </div>
  );
}
