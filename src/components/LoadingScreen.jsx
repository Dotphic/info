import { useState, useEffect } from "react";
import { motion } from "motion/react";
import heroProfile from "../assets/images/hero-profile.png";
import creativeSet from "../assets/images/creative-set.gif";
import musicSet from "../assets/images/music-set.gif";
import pureGif from "../assets/images/pure.gif";
import yearnSet from "../assets/images/yearn-set.gif";

const LoadingScreen = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      // Create an array of all critical images to preload
      const imageSources = [
        heroProfile,
        creativeSet,
        musicSet,
        pureGif,
        yearnSet,
      ];

      let loadedCount = 0;
      const totalImages = imageSources.length;

      imageSources.forEach((imgSrc) => {
        const img = new Image();
        img.src = imgSrc;
        img.onload = () => {
          loadedCount++;
          setCounter(Math.floor((loadedCount / totalImages) * 100));
          if (loadedCount === totalImages) {
            finishLoading();
          }
        };
        img.onerror = () => {
          loadedCount++;
          setCounter(Math.floor((loadedCount / totalImages) * 100));
          if (loadedCount === totalImages) {
            finishLoading();
          }
        };
      });
    };

    // Start preloading images
    preloadImages();

    // Fallback timer in case some images fail to load
    const timeoutId = setTimeout(() => {
      finishLoading();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-50"
    >
      <motion.h1
        className="text-amber-50 font-coolvetica text-8xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        DOTPHIC
      </motion.h1>

      <motion.div
        className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          className="h-full bg-amber-50"
          initial={{ width: 0 }}
          animate={{ width: `${counter}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.p
        className="text-amber-50 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {counter}%
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
