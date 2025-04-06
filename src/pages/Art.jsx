import Paragraph from "../components/Paragraph";
import Section from "../components/Section";

import Collage from "../components/Collage";
import { Mural } from "../constants/ArtMurals";

export default function Art() {
  return (
    <div>
      <Section>
        <h1 className="my-18 text-amber-50 font-coolvetica text-[10rem] md:text-[20rem]">
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
        <h2 className="font-coolvetica mb-40 text-amber-50 text-[5rem] md:text-[8rem]">
          Some of my works
        </h2>
      </Section>

      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 ">
          {Mural.map((art, index) => (
            <Collage
              key={index}
              background={art}
              className="w-[20rem] h-[20rem] sm:w-[40rem] sm:h-[40rem] flex flex-col justify-center items-center"
            ></Collage>
          ))}
        </div>
      </Section>
    </div>
  );
}
