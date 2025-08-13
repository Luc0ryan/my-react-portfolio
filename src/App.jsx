import { useState } from "react";
import Header from "./components/Header.jsx";
import PortfolioSection from "./components/PortfolioCard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
<>
  <Header />

  <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-20 space-y-3 py-6">

    {/* Hero section */}
    <div className="flex flex-col gap-12 text-[clamp(1.25rem,8vw,3.5rem)]">
      <div className="font-sans font-semibold">
        Clear design for a complex world <br />
        Solutions that work beyond the screen
        <br />
        Building in ☀️ San Jose
      </div>
      <div className="text-center font-sans font-semibold bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 w-full">
        Lucas Ryan
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
