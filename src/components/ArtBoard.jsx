import Section from "./Section";

export default function ArtBoard({ background, title, children, className }) {
  return (
    <Section
      background={background}
      className={`w-dvw md:w-xl flex flex-col justify-center items-center h-[50rem] ${className}`}
    >
      <h2 className=" text-amber-50 w-full font-coolvetica text-[5rem] md:text-[8rem]">
        {title}
      </h2>
      {children}
    </Section>
  );
}
