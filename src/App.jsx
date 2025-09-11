import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import AARBFCaseStudy from "./pages/AARBFCaseStudy.jsx";
import ThermoFisherCaseStudy from "./pages/ThermoFisherCaseStudy.jsx";
import SquashCaseStudy from "./pages/SquashCaseStudy.jsx";

export default function App() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/tfr" element={<TFRCaseStudy />} /> */}
        {/* <Route path="/aarbf" element={<AARBFCaseStudy />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/squash" element ={<SquashCaseStudy/>}/>
      </Routes>
    </div>
  );
}

function NotFound() {
  return <div className="p-8">Not found</div>;
}
