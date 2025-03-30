export default function Marquee() {
  return (
    <div className="mt-[10rem] w-full overflow-hidden whitespace-nowrap bg-amber-400 hover:bg-gray-800 h-96 flex items-center relative cursor-pointer transition-all duration-300">
      <div className="marquee-container">
        <div className="marquee font-coolvetica text-[20rem] hover:text-amber-100 transition-all duration-300">
          <span> work with me - work with me - work with me - </span>
          <span> work with me - let's Chat - work with me - </span>
        </div>
      </div>
      <div className="fixed bottom-0 noise-overlay w-[100vw]"></div>
    </div>
  );
}
