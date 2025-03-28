import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreativeDirector from "./pages/CreativeDirector";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Music from "./pages/Music";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes basename="/info/">
          <Route path="/" element={<Home />} />
          <Route path="/creativedirector" element={<CreativeDirector />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
