import About from "../components/About.jsx";
import PortfolioSection from "../components/PortfolioCard.jsx";
import StaticWheel from "../components/StaticWheel.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-16 py-6 font-sans">
      {/* Vertical stack */}
      <div className="flex flex-col gap-12">
        {/* Rail wrapper (centered column) */}
        <div className="mx-auto w-full max-w-2xl">
          <StaticWheel />
          {/* About is left-justified within the centered rail */}
          <div className="max-w-lg">
            <About />
          </div>
        </div>

        {/* Portfolio rail (same centered column) */}
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex flex-col gap-6">
            <Link to="/aarbf" className="block">
              <PortfolioSection
                title="Full-scale redesign to boost relevancy and keep the community engaged with seasonal events"
                description="Figma · Web Designer · UI/UX Design"
                color="bg-blue-50"
                image="/images/aarbf-case-study.png"
                imageAlt="Two-screen mockup of a nonprofit website redesign."
              />
            </Link>

            <Link to="/thermofisher" className="block">
              <PortfolioSection
                title="Revamping event discovery to enhance relevance, accessibility & mobile experience"
                description= "Responsive Design · Design System · Figma"
                color="bg-rose-50"
                image="/images/thermofisher-scr.png"
                imageAlt="ThermoFisher events page design framed in a Macintosh desktop mockup"
              />
            </Link>

            <Link to="/squash" className="block">
              <PortfolioSection
                title="Turning local connections into clear experiences"
                description= "UX Research · Prototyping · Community"
                color="bg-emerald-50"
                image="/images/squash.png"
                imageAlt="Squash mockup in iphone frame"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
