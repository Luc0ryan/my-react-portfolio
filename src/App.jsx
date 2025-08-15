import { useState } from "react";
import Header from "./components/Header.jsx";
import PortfolioSection from "./components/PortfolioCard.jsx";

function App() {
  return (
    <>
      <Header />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 space-y-3 py-6 font-sans">
        {/* Hero section */}
        <div className="font-regular antialiased flex flex-col items-start pb-12 text-[clamp(1.25rem,4vw,3rem)]">
          <div>
            Clear design for a complex world <br />
            Solutions that work beyond the screen
            <br />
            Building in ☀️ San Jose
          </div>

          <div className="mt-1 flex flex-col">
            <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent inline-block w-fit">
              Lucas Ryan
            </span>
            <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent inline-block w-fit text-[clamp(0.9rem,3vw,1.25rem)]">
              Product Designer/Front-end Developer
            </span>
          </div>
        </div>

        {/* Portfolio section */}
        <div>
          <PortfolioSection
            logo="/images/aarbf-logo-horizontal.png"
            logoAlt="Alisa Ann Ruth Burn Foundation logo"
            description="Full-scale redesign to keep the organization relevant and the community engaged"
            link="#"
            image="/images/aarbf-case-study.png"
            imageAlt="Two-screen mockup of a nonprofit website redesign, highlighting the homepage and donation flow with a clean, accessible layout."
          />
          <PortfolioSection
            logo="/images/tfr-logo.png"
            logoAlt="ThermoFisher Scientific logo"
            description="Revamping the event page in accordance to design standards and a broad target audience"
            link="#"
            image="/images/thermofisher-scr.png"
            imageAlt="ThermoFisher events page design framed in a Macintosh desktop mockup"
          />
        </div>
      </div>
    </>
  );
}

export default App;
