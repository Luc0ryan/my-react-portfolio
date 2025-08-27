import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import PortfolioSection from "./components/PortfolioCard.jsx";
import StaticWheel from "./components/StaticWheel.jsx";

function App() {
  return (
    <div className="bg-stone-50">
      <Header />
      <StaticWheel />

      {/* Page container */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-16 py-6 font-sans">
        {/* Vertical stack */}
        <div className="flex flex-col gap-12">
          
          {/* Rail wrapper (centered column) */}
          <div className="mx-auto w-full max-w-2xl">
            {/* About is left-justified within the centered rail */}
            <div className="max-w-lg">
              <About />
            </div>
          </div>

          {/* Portfolio rail (same centered column) */}
          <div className="mx-auto w-full max-w-2xl">
            <div className="flex flex-col gap-6">
              <PortfolioSection
                title="Full-scale redesign to boost relevancy and keep the community engaged with seasonal events"
                description= "Figma · Web Designer · UI/UX Design "
                color="bg-blue-50"
                link="#"
                image="/images/aarbf-case-study.png"
                imageAlt="Two-screen mockup of a nonprofit website redesign, highlighting the homepage and donation flow with a clean, accessible layout."
              />
              <PortfolioSection
                logo="/images/tfr-logo.png"
                logoAlt="ThermoFisher Scientific logo"
                description="Revamping the event page in accordance to design standards and a broad target audience"
                color="bg-rose-50"
                link="#"
                image="/images/thermofisher-scr.png"
                imageAlt="ThermoFisher events page design framed in a Macintosh desktop mockup"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
