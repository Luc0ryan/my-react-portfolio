import React from "react";
import CaseStudyIntro from "../components/CaseStudyIntro";
import { ZoomableGallery, ZoomableItem } from "../components/ZoomableImage.tsx";
import aarbfcov from "../assets/aarbf-case-study.png";
import homeSlice1 from "../assets/home-slice-1.png";
import homeSlice2 from "../assets/home-slice-2.png";
import homeSlice3 from "../assets/home-slice-3.png";
import aarbfIA from "../assets/aarbf_ia.png";
import BeforeAfterSlider from "../components/beforeAfter.jsx";
import oldHome from "../assets/aarbfOldHome.png";
import newHome from "../assets/aarbfNewHome.png";
import peerSupp from "../assets/peersupp.png";
import croAARBF from "../assets/croAARBF.png";
import donate from "../assets/donateAARBF.png";
import eventHome from "../assets/eventHome.png";

export default function AARBFCaseStudy() {
  return (
    <main>
      <CaseStudyIntro
        title="From Single Event to Statewide Community"
        image={aarbfcov}
        imageAlt="AARBF homepage redesign mockup"
        overview="Repositioning a statewide burn foundation's digital presence to reflect the full scope of its community and programs"
        meta={[
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "Feb '24 - Jan '25" },
          { label: "Scope", value: "End-to-end redesign" },
        ]}
      />
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-8 space-y-8">
        <section className="py-12 px-6 max-w-3xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Background
          </h2>
          <h3 className="text-2xl font-bold mb-6">What's AARBF About?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Alisa Ann Ruch Burn Foundation (AARBF) is one of California's
            largest burn support organizations. Through hospital partnerships,
            educational outreach, and direct survivor programs, the foundation
            provides <strong>long-term community and care statewide</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            While Champ Camp remains its most publicly recognized program,
            <strong>
              AARBF's impact extends far beyond a single annual event.
            </strong>
            The website needed to communicate that broader, year-round presence
            with clarity and authority.
          </p>

          {/* VISUAL CUE */}
          {/* Recommended visual: Side-by-side old vs. new homepage screenshot */}
        </section>
        <section className="py-12 px-6 mb-0  max-w-3xl mx-auto border-t border-gray-200">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Objectives
          </h2>
          <h3 className="text-2xl font-bold mb-8">Project Objectives</h3>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="text-3xl font-black text-gray-300 leading-none select-none">
                01
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Clarify the organization's full scope.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Ensure burn survivors, fire agencies, community partners, and
                  donors could quickly understand AARBF's statewide impact and
                  access the services relevant to them.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="text-3xl font-black text-gray-300 leading-none select-none">
                02
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Rebalance public perception.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Present a distributed, comprehensive view of year-round
                  programs beyond the flagship recognition of Champ Camp.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="text-3xl font-black text-gray-300 leading-none select-none">
                03
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Improve usability and sustainability.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Create a responsive, conversion-ready experience that was easy
                  for non-technical staff to maintain.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 mb-0 max-w-3xl mx-auto border-t border-gray-200">
          <div className="w-full pb-16">
            <BeforeAfterSlider
              beforeSrc={oldHome}
              afterSrc={newHome}
              beforeAlt="Screenshot of AARBF's old homepage"
              afterAlt="Screenshot of AARBF's new homepage"
              beforeLabel="before"
              afterLabel="after"
              initialPosition={50}
            />
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Discovery
          </h2>
          <h3 className="text-2xl font-bold mb-6">Discovery & Constraints</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Stakeholder discussions centered on fundraising sustainability.{" "}
            <strong>Donations were not meeting organizational needs,</strong>{" "}
            and secondary programs were comparatively underrepresented across
            the site.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The organization's credibility was strong, evidenced by sustained
            community engagement and the long-standing success of its
            newsletter, but{" "}
            <strong>
              the website did not clearly articulate the full scope of its
              services
            </strong>{" "}
            or provide a streamlined path to donate.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I served as the sole designer with full creative ownership alongside
            a project lead and development team. There was no dedicated UX
            research budget; decisions were informed by stakeholder input and an
            external Stanford GSB study that identified financial sustainability
            as the primary strategic objective.
          </p>

          {/* VISUAL CUE */}
          {/* Recommended visual: Audit screenshot of old site or heuristic evaluation notes */}
        </section>

        <section className="py-12 px-6 mb-0 max-w-3xl mx-auto">
          <div className="w-full pb-16">
            <img
              src={croAARBF}
              alt="UI slice of the camps, retreats and outings section"
              className="w-full h-auto border-gray-200 border rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Strategy
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            Repositioning the Digital Presence
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            The redesign{" "}
            <strong>
              shifted the site from an event-centered narrative to a year-round
              service model.
            </strong>{" "}
            Navigation and page structure were rebalanced to proportionately
            represent ongoing programs, survivor services, partnerships, and
            fundraising initiatives.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Champ Camp remained prominent, but no longer singular. The
            architecture was rebuilt to make the organization's full scope
            immediately legible: reinforcing credibility while supporting
            diverse engagement and donation pathways.
          </p>

          {/* VISUAL CUE */}
          {/* Recommended visual: Sitemap or IA diagram showing before/after structure */}
        </section>

        <section className="py-12 px-6 mb-0 max-w-3xl mx-auto">
          <div className="w-full pb-16">
            <img
              src={aarbfIA}
              alt="AARBF Information Architecture Diagram"
              className="w-full h-auto border-gray-200 border rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Information Architecture
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            Architecting a Scalable Navigation System
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            The original site lacked a governing structure. While core pillars
            were present, content was distributed across loosely defined
            categories and inconsistent page hierarchies. Users could access
            resources, but the pathway to them was not always predictable or
            progressively structured.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The redesign introduced a{" "}
            <strong>
              governed L1 → L2 → L3 framework modeled as a transit network:
            </strong>{" "}
            clear hubs, defined pathways, and predictable stops. Users enter
            through focused L1 anchors and select a pathway aligned with their
            intent, moving toward targeted destinations — whether educational
            tools, medical support, or grants and scholarships.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A reusable tab component was deployed across the site to reinforce
            structure and scannability. Tabs segment related content into
            distinct lanes, reduce cognitive load, and allow lateral navigation
            without disrupting context.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Scalability was engineered through modular WordPress building blocks
            that enable new programs and resources to be added without
            restructuring the system. The result is a navigation architecture
            designed for clarity, flexibility, and sustained growth.
          </p>

          {/* VISUAL CUE */}
          {/* Recommended visuals:
       1. L1→L2→L3 diagram / transit map sketch
       2. Screenshot of tab component in context (e.g. Camps page) */}
        </section>
        <section className="py-12 px-6 mb-0 max-w-3xl mx-auto border-t border-gray-200">
          <div className="w-full pb-16">
            <img
              src={donate}
              alt="Donate flow redesign showing multi-step form and progress indicators"
              className="w-full h-auto border-gray-200 border rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Conversion Design
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            Reframing the Donation Experience
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            One of the primary redesign objectives was to improve fundraising
            performance. The existing donation form introduced unnecessary
            friction: a legacy layout, redundant inputs, excessive required
            fields, and little emotional reassurance.{" "}
            <strong>
              The interaction felt procedural rather than mission-driven
            </strong>{" "}
            at the most trust-sensitive moment of the user journey.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I restructured the donation flow as a focused, multi-phase
            experience. Non-essential data collection was removed, and the
            process was reorganized into a staged, multi-step flow with visible
            progress indicators. Each stage isolates a specific type of
            decision, reducing visible complexity and making progress legible.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The form is anchored within a full-viewport layout that reinforces
            AARBF's mission and community impact,{" "}
            <strong>
              reframing the interaction from transaction to contribution.
            </strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The objective was not simply to simplify a form, but to treat the
            moment as a credibility test. Donors decide in seconds whether an
            organization appears trustworthy and competent. By minimizing
            friction and reinforcing organizational clarity throughout the
            process, the experience supports both conversion and trust.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed italic">
            Future iterations could further reduce friction by limiting required
            personal data and prioritizing opt-in fields. In fundraising
            contexts, restraint in data collection is often as important as
            visual refinement.
          </p>

          {/* VISUAL CUE */}
          {/* Recommended visuals:
       1. Old donation form screenshot (friction callouts annotated)
       2. New multi-step flow mockup or screen recording */}
        </section>
        <section className="py-12 px-6 mb-0 max-w-3xl mx-auto">
          <div className="w-full pb-16 flex flex-col items-center">
            <img
              src={peerSupp}
              alt="Example of AARBF credibility-building content with survivor testimonials"
              className=" w-full h-auto border-gray-200 border rounded-lg shadow-md"
            />
            <p className="text-gray-500 text-sm italic leading-relaxed mt-4">
              Testimonials and survivor stories lend emotional credibility for key services
            </p>
          </div>
          <div className="w-full pb-16 flex flex-col items-center">
            <img
              src={eventHome}
              alt="Example of AARBF credibility-building content with survivor testimonials"
              className=" w-full h-auto border-gray-200 border rounded-lg shadow-md"
            />
            <p className="text-gray-500 text-sm italic leading-relaxed mt-4">
              Dynamic events component situated above event recaps reinforcing
              year-round engagement
            </p>
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Credibility & Narrative
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            Beyond Mission Statements: Emotional Storytelling
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            One of the most important aspects of strong nonprofit websites is
            building credibility. Mission statements give organizations a chance
            to tell visitors what they're about. I wanted to take this a step
            further and show their direct impact through survivor stories and
            event recaps.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Powerful survivor stories from longtime community members were a
            core element of AARBF buried in the older architecture. With the
            redesign,{" "}
            <strong>
              stories were surfaced across the site and placed with intent:
            </strong>{" "}
            a scholarship recipient's story appears on the page leading into the
            grants and scholarships section, so visitors encounter proof of
            impact at the exact moment they're considering a program. Newer
            firefighter and community testimonials were woven in throughout to
            reinforce that credibility further.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The same logic applied to the homepage. Shifting from a
            one-event-centric org to an active year-round community started
            here. Working with stakeholders, I was confident the site could
            feature a keynote event each quarter in the primary viewport. Below
            it,{" "}
            <strong>
              a dynamic events section kept upcoming programming visible,
              anchored by event recaps
            </strong>
            , real evidence that people consistently show up for a community
            that always showed up for them.
          </p>

          {/* VISUAL CUE */}
          {/* Recommended visuals:
       1. Scholarship page with survivor story placement highlighted
       2. Homepage viewport showing featured event + recap section */}
        </section>
        <section className="py-12 px-6 mb-0 max-w-3xl mx-auto border-t border-gray-200">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Reflection
          </h2>
          <h3 className="text-2xl font-bold mb-6">Closing</h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            AARBF was an extensive project. Design was delivered in 3 months,
            but design QA and development took up the remainder of the year. On
            a limited budget,{" "}
            <strong>
              we delivered a product that was no longer a static expression of
              values, but a dynamic entry point into the burn survivor
              community.
            </strong>
          </p>
          <p className="text-gray-700 leading-relaxed">
            One specific iteration worth pursuing is the camps and outings page.
            Replacing static date messaging on inactive events with a mailing
            list CTA would convert passive interest into an ongoing
            relationship, a warm lead for when programs reopen. The
            infrastructure to support this already exists. Part of the work on
            this project extended to helping set up a quasi-CRM, giving AARBF
            the pipeline to treat community engagement as a sustained process.
            The idea had some B2B SAAS vibes, but the logic is sound: converting
            passive interest into volunteers, recurring donors, and active
            community members over time. The architecture is there but he ceiling
            is staff bandwidth and the training investment to use it fully. The
            groundwork is laid for AARBF's next chapter, wherever they chose to take it.
          </p>
        </section>
      </section>
    </main>
  );
}
