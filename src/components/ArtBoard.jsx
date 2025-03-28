import Section from "./Section";

export default function ArtBoard({ background, title, children }) {
  return (
    <Section
      background={background}
      className="w-2xl lg:w-3xl xl:w-6xl h-[50rem] flex flex-col justify-center items-center"
    >
      <h2 className="  text-amber-50 w-full font-coolvetica text-[10rem] ">
        {title}
      </h2>
      {children}
    </Section>
  );
}
