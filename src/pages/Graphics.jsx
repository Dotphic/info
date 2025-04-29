import Paragraph from "../components/Paragraph";
import Section from "../components/Section";

import Collage from "../components/Collage";
import { GraphicsMural } from "../constants/GraphicsMural";
import { WebMural } from "../constants/WebMural";

export default function Graphics() {
  return (
    <div>
      <Section>
        <h1 className="md:my-18 mt-28 text-amber-50 font-coolvetica text-[5rem] md:text-[10rem] lg:text-[15rem]">
          Graphics Design
        </h1>
        <div className="relative z-100 flex flex-col justify-center items-center">
          <Section
            className=" flex flex-col justify-center items-center min-h-screen overflow-hidden text-white text-center z-100 bg-black lg:px-72 md:px-48 px-10 py-10"
            customStyles={{ width: "100vw" }}
          >
            <Paragraph>
              My journey into graphic design and digital art actually started
              with architecture. Back in university, architecture taught me the
              importance of layout, presentation, and visual clarity. I’d spend
              hours designing slides and assignments, and over time, I realized
              I wasn’t just doing it for grades—I genuinely loved the creative
              process. That love gradually turned into a passion, and
              eventually, a career path.
              <br /> <br />
              While still in school, I started picking up freelance gigs,
              working on small design projects whenever I could. After
              graduating, I landed my first full-time job as a graphic designer
              at Afromile PLC, where I got to work across several exciting
              platforms—LinkUp Addis (events and media), Atmosphere (a
              multicultural event space), Afromile (a discount e-commerce
              platform), and Proofit (a marketing agency).
              <br /> <br />
              Each sector gave me a chance to learn something new—from event
              branding and social media design, to newsletters, magazines, and
              marketing materials. After a year, I stepped into the role of
              Creative Director, managing the full visual direction of all those
              platforms. I got hands-on with photography, videography, and even
              set design for events, while still taking on freelance projects
              for other companies on the side.
              <br /> <br />
              Now, with over 4 years of experience in the field, design is more
              than just a job—it’s a way I tell stories, solve problems, and
              bring ideas to life.
            </Paragraph>
          </Section>
        </div>
      </Section>

      <Section>
        <h2 className="font-coolvetica mb-40 text-amber-50 text-[5rem] md:text-[8rem]">
          Some of my works
        </h2>
      </Section>
      {/* Branding */}
      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 ">
          <h3 className="font-coolvetica mb-40 text-amber-50 text-[3rem] md:text-[5rem]">
            Branding
          </h3>
          {GraphicsMural.map((art, index) => (
            <Collage
              key={index}
              background={art}
              className="w-[20rem] h-[15rem] sm:w-[40rem] sm:h-[30rem] flex flex-col justify-center items-center"
            ></Collage>
          ))}
        </div>
      </Section>

      {/* Web Design */}
      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 mt-44">
          <h3 className="font-coolvetica mb-40 text-amber-50 text-[3rem] md:text-[5rem]">
            Web Design
          </h3>
          {WebMural.map((art, index) => (
            <Collage
              key={index}
              background={art}
              className="w-[20rem] h-[15rem] sm:w-[40rem] sm:h-[30rem] flex flex-col justify-center items-center"
            ></Collage>
          ))}
        </div>
      </Section>
    </div>
  );
}
