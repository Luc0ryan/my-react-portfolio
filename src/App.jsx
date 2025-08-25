import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import PortfolioSection from "./components/PortfolioCard.jsx";
import StaticWheel from "./components/StaticWheel.jsx";

function App() {
  return (
    <div className = "bg-[#FAFAF9] ">

      <Header />


      <StaticWheel />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 space-y-3 py-6 font-sans">

      <About />


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
            </div>
  );
}

export default App;
