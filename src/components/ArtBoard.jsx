import Section from "./Section";

export default function ArtBoard({
  background,
  title,
  children,
  className,
  customStyles,
}) {
  return (
    <Section
      background={background}
      className={`relative w-2xl lg:w-3xl xl:w-6xl flex flex-col justify-center items-center h-[50rem] ${className}`}
      customStyles={customStyles}
    >
      <h2 className=" text-amber-50 text-shadow-lg w-full font-coolvetica text-[5rem] md:text-[8rem]">
        {title}
      </h2>
      {children}
    </Section>
  );
}
