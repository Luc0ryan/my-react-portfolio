// src/pages/Home.jsx
import About from "../components/About.jsx";
import PortfolioSection from "../components/PortfolioCard.jsx";
import StaticWheel from "../components/StaticWheel.jsx";
import { Link } from "react-router-dom";

// 🔽 Import images from src/assets so Vite rewrites URLs correctly
import aarbfImg from "../assets/aarbf-case-study.png";
import thermoImg from "../assets/thermofisher-scr.png";
import squashImg from "../assets/squash.png";

export default function Home() {
  return (
    <main className="max-w-screen-4xl mx-auto px-6 font-sans">
      {/* Vertical stack */}
      <div className="flex flex-col gap-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-8">
            {/* Left column: Wheel */}
            <div className="flex justify-center md:justify-end">
              <StaticWheel />
            </div>

            {/* Right column: About */}
            <div className="max-w-md md:justify-self-start">
              <About />
            </div>
          </div>
        </div>
{/*
        <div className="mx-auto w-full max-w-2xl">
          <div className="my-6">
            <StaticWheel />
          </div>
          <div className="max-w-lg ">
            <About />
          </div>
        </div>  */}

        {/* Portfolio rail (same centered column) */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* If these routes are hidden/disabled for now, comment out or make them "Coming soon" */}
            <Link to="/aarbf" className="block">
              <PortfolioSection
                title="A full-scale redesign for seasonal relevance and community"
                description="Figma · Web Designer · UI/UX Design"
                color="bg-blue-100"
                image={aarbfImg}
                imageAlt="Two-screen mockup of a nonprofit website redesign."
              />
            </Link>

            <Link to="/thermofisher" className="block">
              <PortfolioSection
                title="Event discovery reimagined for mobile responsiveness & accessibility"
                description="Responsive Design · Design System · Figma"
                color="bg-rose-100"
                image={thermoImg}
                imageAlt="ThermoFisher events page design framed in a Macintosh desktop mockup"
              />
            </Link>

            <Link to="/squash" className="block">
              <PortfolioSection
                title="Turning local connections into clear experiences"
                description="UX Research · Prototyping · Community"
                color="bg-emerald-100"
                image={squashImg}
                imageAlt="Squash mockup in iphone frame"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
