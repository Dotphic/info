import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import dotphicLogo from "../assets/dotphics-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { title: "Home", url: "/info/" },
    { title: "About", url: "/info/#about" },
    { title: "Contact", url: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full sm:px-6 py-2 bg-gradient-to-b from-black to-transparent z-1000">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 ">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-xl text-indigo-600"
          >
            <img src={dotphicLogo} className="logo"></img>
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

        {/* Mobile Menu (Full Screen) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-50 md:hidden flex flex-col items-center justify-center "
            >
              <div className="flex flex-col items-center space-y-8">
                {links.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    className="text-2xl font-bold text-gray-800 hover:text-indigo-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 + 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      y: 20,
                      transition: { delay: (2 - index) * 0.05 },
                    }}
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
              <motion.button
                className="absolute top-16 right-16 text-gray-700 hover:text-indigo-600"
                onClick={toggleMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              <div className="noise-overlay"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
