// src/pages/SquashCaseStudy.jsx

import ZoomableImage, {
  ZoomableGallery,
  ZoomableItem,
} from "../components/ZoomableImage.jsx";

export default function SquashCaseStudy() {
  return (
    <main className="bg-stone-50 text-stone-900">
      {/* ── Hero: Title + Tags + Meta (horizontal)  */}
      <section className="max-w-screen-md mx-auto px-6 md:px-12 lg:px-16 py-8">
        {/* Title + subtitle */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Squash
        </h1>
        <p className="mt-2 text-xl md:text-2xl">
          A modern way to find and enjoy farmers markets
        </p>

        {/* Tags under title */}
        <ul className="mt-4 flex flex-wrap gap-2 text-xs">
          {[
            "Figma",
            "Wireframing",
            "Prototyping",
            "Design System",
            "Community",
          ].map((t) => (
            <li
              key={t}
              className="rounded-full border border-stone-300 bg-white px-3 py-1"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Meta (horizontal) */}
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone-700">
          <div>
            <span className="uppercase tracking-wide text-stone-500">Role</span>
            <div>UI/UX Designer</div>
          </div>
          <div>
            <span className="uppercase tracking-wide text-stone-500">When</span>
            <div>Fall 2020</div>
          </div>
        </div>
      </section>

      {/* Snapshot / Outcomes */}
      <section className="max-w-screen-md mx-auto px-6 md:px-12 lg:px-16 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Snapshot</h2>
        <p className="mt-3 leading-7">
          We designed a lightweight app to help people quickly discover nearby
          markets, vendors, and fresh produce, inspired of a shared love of farm
          to table living.
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>
            Simplified nav (Landing · Map · Profile) to reduce choice overload.
          </li>
          <li>
            Clear signifiers and card components for consistent scanability.
          </li>
          <li>Vendor-centric browsing added to support real user behavior.</li>
          {/* <li>Usability test completion rate ↑ from X% → Y% (n = ...)</li> */}
        </ul>

        <figure className="my-6">
          <ZoomableGallery>
            <ZoomableItem
              fullSrc="/images/squash-hero.png"
              thumbSrc="/images/squash-hero.png"
              width={2048}
              height={1280}
              alt="AARBF website redesign — homepage and donation flow"
            />
          </ZoomableGallery>
        </figure>
      </section>

      {/* Problem → Approach */}
      <section className="max-w-screen-md mx-auto px-6 md:px-12 lg:px-16 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Problem → Approach
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Problem</h3>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                Discovery is mostly offline; few reliable ways to find markets.
              </li>
              <li>
                Apps feel cluttered; users want quick routes to “what’s fresh
                near me.”
              </li>
              <li>People follow favorite vendors, not just locations.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Approach</h3>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                Lean research (surveys, interviews) to map needs and
                constraints.
              </li>
              <li>Lo-fi → Hi-fi flows; test and cut nonessential features.</li>
              <li>Mobile-first cards, clear IA, and reusable components.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research highlights */}
      <section className="max-w-screen-md mx-auto px-6 md:px-12 lg:px-16 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Research Highlights
        </h2>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>
            ~70% discovered markets via word-of-mouth or in-person cues (offline
            behaviors).
          </li>
          <li>Top drivers: freshness, proximity, one-stop convenience.</li>
          <li>
            Vendors value relationships; solutions should be low-effort for
            them.
          </li>
        </ul>
        <figure className="mt-6">
          <ZoomableGallery>
            <ZoomableItem
              fullSrc="/images/squash-personas.png"
              thumbSrc="/images/squash-personas.png"
              width={2048}
              height={1280}
              alt="Personas curated based on our interviews with vendors and frequent visitors"
            />
          </ZoomableGallery>
        </figure>
      </section>

      {/* Key design decisions */}
      <section className="max-w-screen-md mx-auto px-6 md:px-12 lg:px-16 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Key Design Decisions
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <h3 className="text-lg font-semibold">1) Navigation</h3>
            <p className="my-2 leading-7">
              Trimmed to three core areas (Landing, Map, Profile) to keep
              users focused on markets.
            </p>
            <ZoomableGallery>
              <ZoomableItem
                fullSrc="/images/squash-wireframes.png"
                thumbSrc="/images/squash-wireframes.png"
                width={2048}
                height={1280}
                alt="Lo-fi IA and nav"
              />
            </ZoomableGallery>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <h3 className="text-lg font-semibold">2) Cards & Scanability</h3>
            <p className="my-2 leading-7">
              Reusable cards highlight essentials (name, distance, hours);
              consistent signifiers reduce cognitive load.
            </p>
                        <ZoomableGallery>
              <ZoomableItem
                fullSrc="/images/squash-brandguide.png"
                thumbSrc="/images/squash-brandguide.png"
                width={2048}
                height={1280}
                alt="Card components and tokens"
                />
            </ZoomableGallery>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <h3 className="text-lg font-semibold">3) Vendor-centric Flow</h3>
            <p className="my-2 leading-7">
              Added vendor pages and follow paths to reflect how people track favorite stands across markets.
            </p>
            <ZoomableGallery>
              <ZoomableItem
                fullSrc="/images/squash-screens.png"
                thumbSrc="/images/squash-screens.png"
                width={2048}
                height={1280}
                alt="Vendor and market screens"
              />
            </ZoomableGallery>
          </div>  
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <h3 className="text-lg font-semibold">4) Visual System</h3>
            <p className="my-2 leading-7">
              Iterated from dark palettes to light, high-contrast UI for
              readability; reserved strong color for CTAs.
            </p>

                        <ZoomableGallery>
              <ZoomableItem
                fullSrc="/images/squash-colors.png"
                thumbSrc="/images/squash-colors.png"
                width={2048}
                height={1280}
                alt="Color evolution and contrast checks"
              />
            </ZoomableGallery>
          </div>
        </div>
      </section>

{/* Final Results — All-Star Landing */}
<section className="max-w-screen-md mx-auto px-6 md:px-12 lg:px-16 py-12">
  {/* Headline */}
  <header>
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
      Final Results
    </h2>
    <p className="mt-2 text-stone-700 leading-relaxed">
      A four-step path from discovery to action: follow favorite vendors, skim a social feed,
      confirm with the map, and head to the market—in fewer taps and with clearer choices.
    </p>
  </header>

  {/* KPI strip (directional is fine—edit to whatever you can defend) */}
  <ul className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
    {[
      { stat: "3 taps", label: "to Directions from list" },
      { stat: "↑ scan speed", label: "via card rhythm" },
      { stat: "Vendor-first", label: "follow across markets" },
    ].map((k) => (
      <li key={k.label} className="rounded-lg border border-stone-200 bg-white/70 backdrop-blur-sm px-4 py-3">
        <div className="text-lg font-semibold">{k.stat}</div>
        <div className="text-sm text-stone-600">{k.label}</div>
      </li>
    ))}
  </ul>

  {/* Hero montage (single big composite made from your 4 screens). 
      If you don't have a composite image yet, this grid acts as a stand-in and still looks premium. */}
  <figure className="mt-6">
    <div className="rounded-xl border border-stone-200 overflow-hidden">
      <ZoomableGallery>
        {/* Replace with a single montage image if/when you have one */}
        <div className="grid grid-cols-2 gap-0">
          <ZoomableItem
            fullSrc="/images/final-squash-1.png"
            thumbSrc="/images/final-squash-1-thumb.png"
            width={428} height={868}
            alt="Profile screen—follow   and manage preferences"
          />
          <ZoomableItem
            fullSrc="/images/final-squash-2.png"
            thumbSrc="/images/final-squash-2-thumb.png"
            width={605} height={1339}
            alt="Social feed—what's fresh and where vendors are today"
          />
          <ZoomableItem
            fullSrc="/images/squash-map.png"
            thumbSrc="/images/squash-map.png"
            width={2048} height={1280}
            alt="Map—proximity and open/closing status"
          />
          <ZoomableItem
            fullSrc="/images/squash-market.png"
            thumbSrc="/images/squash-market.png"
            width={2048} height={1280}
            alt="Market detail—hours, vendors, and primary CTAs"
          />
        </div>
      </ZoomableGallery>
    </div>
    <figcaption className="mt-2 text-sm text-stone-600">
      Composite of the final flow: Profile → Social Feed → Map → Market.
    </figcaption>
  </figure>
{/* Flow rail with micro-captions */}
<ol className="mt-6 flex flex-wrap gap-3">
  {[
    { title: "Profile", blurb: "Follow vendors; preferences travel with you." },
    { title: "Social Feed", blurb: "Fresh drops + today’s locations in one scroll." },
    { title: "Map", blurb: "Proximity + open-now badges reduce dead ends." },
    { title: "Market", blurb: "Primary CTAs always visible (Directions, Save)." },
  ].map((s, i) => (
    <li
      key={s.title}
      className="flex items-start gap-2 rounded-lg border border-stone-200 bg-white/70 px-3 py-2"
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-stone-300 bg-stone-50 font-medium">
        {i + 1}
      </span>
      <div className="flex flex-col">
        <span className="font-medium">{s.title}</span>
        <span className="text-stone-600 text-sm">{s.blurb}</span>
      </div>
    </li>
  ))}
</ol>

  {/* Optional CTA */}
  <div className="mt-6">
    <a
      href="https://your-prototype-link"
      className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium hover:shadow-sm"
      target="_blank" rel="noreferrer"
    >
      View interactive prototype
      <span aria-hidden>↗</span>
    </a>
  </div>
</section>

      {/* Results & Learnings */}
      <section className="max-w-screen-md mx-auto px-6 md:px-12 lg:px-16 py-10">
  <h2 className="text-2xl md:text-3xl font-semibold mb-4">
    Results & Learnings
  </h2>
  <p className="mb-4 text-stone-700 leading-relaxed">
    Over the course of ten weeks, Squash took me through the full product design
    cycle from early user surveys and vendor interviews, to navigation sketches,
    interface refinements, and a fully clickable prototype. The result was a design
    that gave shoppers clearer routes to “markets near me” and favorite vendors,
    while also exploring ways to build community around local food.
  </p>
  <p className="text-stone-700 leading-relaxed">
    If I revisited this project, I would expand usability testing to measure task 
    success more rigorously and put greater focus on vendor-side flows to validate 
    whether the system could sustain itself in real
    use. Overall, Squash gave me valuable hands-on experience running an end-to-end
    product design sprint under real constraints, sharpening my ability to channel user feedback into a honed product.
  </p>
</section>


    </main>
  );
}
