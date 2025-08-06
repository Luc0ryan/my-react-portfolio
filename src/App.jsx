import { useState } from "react";
import Header from "./components/Header.jsx";
import PortfolioSection from "./components/PortfolioCard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />


       {/* Hero section */}

      <div className="max-w-screen-xl mx-auto flex flex-col py-20 gap-12">
        <div className="text-5xl/relaxed font-sans font-bold">
          Clear design for a complex world <br />
          Solutions that work beyond the screen
          <br />
          Building in ☀️ San Jose
        </div>
        <div className="text-5xl/relaxed text-center font-sans font-bold bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 w-full">
          Lucas Ryan
        </div>
      </div>

      {/* First case study - AARBF */}
    <div className = "space-y-24 max-w-screen-xl mx-auto">
      <PortfolioSection
        logo = "/images/aarbf-logo-horizontal.png"
        description = "Full-scale redesign to keep the organization relevant and the community engaged"
        link = "#"
        image = "/images/aarbf-case-study.png"
        />
        <PortfolioSection
        logo = "/images/tfr-logo.png"
        description = "Revamping the event page in accordance to design standards and a broad target audience"
        link = "#"
        image = "/images/thermofisher-scr.png"
        />
    </div>
      
    </>
  );
}

export default App;
