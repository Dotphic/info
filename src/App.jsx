import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreativeDirector from "./pages/CreativeDirector";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Music from "./pages/Music";
import Marquee from "./components/Marquee";
import Art from "./pages/Art";
import Graphics from "./pages/Graphics";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence } from "motion/react";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen finishLoading={finishLoading} key="loading" />
        ) : (
          <>
            <div id="root-layout">
              <Navbar />
              <ScrollToTop />
              <main>
                <Routes basename="/info/">
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/creativedirector"
                    element={<CreativeDirector />}
                  />
                  <Route path="/music" element={<Music />} />
                  <Route path="/art" element={<Art />} />
                  <Route path="/graphics" element={<Graphics />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
            </div>
            <Marquee />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
