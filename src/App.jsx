import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop.js";
import PageTransition from "./components/PageTransition.jsx";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import AARBFCaseStudy from "./pages/AARBFCaseStudy.jsx";
import ThermoFisherCaseStudy from "./pages/ThermoFisherCaseStudy.jsx";
import SquashCaseStudy from "./pages/SquashCaseStudy.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-stone-50 min-h-screen">
      <ScrollToTop />

      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/thermofisher" element={<PageTransition><ThermoFisherCaseStudy /></PageTransition>} />
          <Route path="/aarbf" element={<PageTransition><AARBFCaseStudy /></PageTransition>} />
          <Route path="/squash" element={<PageTransition><SquashCaseStudy /></PageTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
