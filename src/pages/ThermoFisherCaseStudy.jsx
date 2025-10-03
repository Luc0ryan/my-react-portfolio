import CaseStudyIntro from "../components/CaseStudyIntro";
import coverphoto from "../assets/coverphoto-tfr.png";
import InPageNav from "../components/InPageNav";
import PersonaCard from "../components/personaCard";

import epavi from "../assets/epavi.png";
import pmavi from "../assets/pmavi.png";
import ecavi from "../assets/ecavi.png";

export default function ThermoFisherCaseStudy() {
  return (
    <main className="mx-auto py-8 space-y-8">
      <CaseStudyIntro
        title="A clearer path to events that matter"
        image={coverphoto}
        imageAlt="Thermo Fisher event pages mockup"
        meta={[
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "May-August 2023" },
          {
            label: "Scope",
            value: ["Event listings & pages", "Registration flows"],
          },
          {
            label: "Impact",
            value: ["Faster wayfinding", "Accessible design"],
          },
        ]}
      />

      <section
        id="problem"
        className="mx-auto max-w-screen-lg px-4  scroll-mt-24"
      >
        <h2 className="text-lg font-medium font-lora text-zinc-500">
          Overview
        </h2>
        <div className="text-xl md:text-3xl lg:text-4xl">
          Overhauling event discovery by streamlining filtering and navigation
          while unifying with Thermo Fisher's design system.
        </div>
      </section>

      <section
        id="approach"
        className="mx-auto max-w-screen-lg px-4 scroll-mt-24"
      >
        <h2 className="text-lg font-medium font-lora text-zinc-500">
          Approach
        </h2>
        <div className="text-lg text-neutral-900">
          The first step was mapping out the biggest friction points in the
          catalog. Compared to modern event listings, the page had no clear ways
          to narrow down a sprawling set of events across industries. To ground
          the redesign, I considered how different types of users (from research
          scientists to graduate students) would expect to find events tailored
          to their needs.
        </div>
        <div className="grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
          <PersonaCard
            title="Emerging Professional"
            subtitle="18-25 year olds"
            avatarSrc={epavi}
            avatarAlt="Emerging Professional avatar "
            bullets={[
              "Overwhelmed by options",
              "Limited industry knowledge",
              "Needs clear signifiers/guidance",
            ]}
              priority="Needs clear signifiers"

          />

          <PersonaCard
            title="Early-Career Scientist"
            subtitle="21-30 year olds"
            avatarSrc={ecavi}
            avatarAlt="Early Career Scientist avatar"
            bullets={[
              "Pressed for time",
              "Needs quick, relevant filtering",
              "Prefers scanning over browsing",
            ]}
  priority="Quick, relevant filtering"
          />
          <PersonaCard
            title="Corporate PM"
            subtitle="35-50 year olds"
            avatarSrc={pmavi}
            avatarAlt="Corporate Product Managment avatar"
            bullets={[
              "Cross-industry scanning",
              "Prioritizes practical takeaways",
              "Targets big conferences first",
            ]}
            priority= "Spotlight on major conferences"
          />
        </div>
        <div className="text-lg text-neutral-900">
  Beyond the personas, I reviewed platforms like Eventbrite and Meetup to check
  how they handle event discovery. Their use of clear categories, icons, and filters
  reinforced the same themes that emerged from my research, giving me confidence
  that the redesign should prioritize clarity and scannability.
        </div>
      </section>

      <section
        id="outcomes"
        className="mx-auto max-w-screen-lg px-4 scroll-mt-24"
      >
        <h2 className="text-2xl font-lora text-zinc-500">Outcomes</h2>
        {/* content */}
      </section>

      <section
        id="screens"
        className="mx-auto max-w-screen-lg px-4 scroll-mt-24"
      >
        <h2 className="text-2xl font-lora text-zinc-500">Final Screens</h2>
        {/* content */}
      </section>

      <section
        id="learnings"
        className="mx-auto max-w-screen-lg px-4 scroll-mt-24"
      >
        <h2 className="text-2xl font-lora text-zinc-500">Learnings</h2>
        {/* content */}
      </section>
    </main>
  );
}
