import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import dotphicLogo from "../assets/dotphics-logo.png";

const emojis = ["🔥", "🚀", "💎", "💖", "✨", "🎶", "🦄"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const [bubbles, setBubbles] = useState([]);

  const handleClick = () => {
    const newBubble = {
      id: Math.random(),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: (Math.random() - 0.5) * 100, // Random horizontal spread
    };
    setBubbles((prev) => [...prev, newBubble]);

    // Remove bubble after animation
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 2000);
  };

  const links = [
    { title: "Home", url: "/" },
    { title: "Work", url: "/#works" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full sm:px-6 py-2  bg-gradient-to-b from-black to-transparent z-1000">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Back Button */}
        <div className="flex-shrink-0 ">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-xl text-indigo-600 relative"
            onClick={isHome ? handleClick : () => navigate(-1)}
          >
            {isHome ? (
              <img src={dotphicLogo} className="logo" />
            ) : (
              <div className="flex items-center gap-2 text-amber-50 cursor-pointer" style={{ height: "7em", padding: "1.5em" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-base font-medium">Back</span>
              </div>
            )}
            {/* Floating Emojis */}
            <AnimatePresence>
              {isHome && bubbles.map((bubble) => (
                <motion.div
                  key={bubble.id}
                  initial={{ opacity: 0, y: 0, x: bubble.x }}
                  animate={{ opacity: 1, y: -150, x: bubble.x, rotate: 360 }}
                  exit={{ opacity: 0, y: -150 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2"
                >
                  <span className="text-2xl">{bubble.emoji}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 mx-12">
          {links.map((item) => (
            <motion.div
              key={item.title}
              className="text-blue-50 text-xl hover:text-gray-800 font-medium transition-colors smooth-link"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Link to={item.url}>{item.title}</Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mx-12">
          <button
            onClick={toggleMenu}
            className="text-amber-50 hover:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu — slide in from right */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={toggleMenu}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
              />
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-black md:hidden flex flex-col justify-center px-10"
              >
                <div className="space-y-8">
                  {links.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 + 0.15 }}
                      onClick={toggleMenu}
                    >
                      <Link
                        to={item.url}
                        className="block text-4xl font-coolvetica text-amber-50 hover:text-red-400 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="absolute top-6 right-6 text-amber-50 hover:text-red-400 transition-colors"
                  onClick={toggleMenu}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.35 } }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
