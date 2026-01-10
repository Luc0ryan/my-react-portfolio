import React from "react";
import CaseStudyIntro from "../components/CaseStudyIntro";
import aarbfcov from "../assets/aarbf-case-study.png";
import homeSlice1 from "../assets/home-slice-1.png";
import homeSlice2 from "../assets/home-slice-2.png";
import homeSlice3 from "../assets/home-slice-3.png";

export default function AARBFCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12 py-8 space-y-8">
      <CaseStudyIntro
        title="Turning compassion into clarity for a statewide nonprofit"
        image={aarbfcov}
        imageAlt="AARBF homepage redesign mockup"
        overview="A full redesign of AARBF's site to improve accessibility, program clarity, and donor engagement."
        list={[
          {
            lead: "Reframing AARBF beyond a single flagship program,",
            body: " revealing the foundation as a year-round community nonprofit with active hospital partnerships, firefighter relationships, and programs serving survivors and families of all ages",
          },
          {
            lead: "Structuring human stories,",
            body: " turning survivor and community voices into clear, repeatable content that reinforces credibility, empathy, and belonging",
          },
          {
            lead: "Owning the work end to end,",
            body: " delivering a durable redesign while balancing speed, scope, and stakeholder realities in a resource-constrained nonprofit environment",
          },
        ]}
        meta={[
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "Feb ‘24 — Jan ‘25" },
          { label: "Scope", value: "End-to-end redesign" },
        ]}
      />

      <section className="mx-auto max-w-4xl grid grid-cols-1 gap-6 py-6">
        <img
          src={homeSlice1}
          alt="AARBF homepage vertical slice 1"
          className="w-full rounded-md"
        />
        <img
          src={homeSlice2}
          alt="AARBF homepage vertical slice 2"
          className="w-full rounded-md"
        />
        <img
          src={homeSlice3}
          alt="AARBF homepage vertical slice 3"
          className="w-full rounded-md"
        />
      </section>

      <section className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Context & Challenge
        </h2>
        <p className="text-neutral-600">
          Placeholder: Set the stage for the organization, audience, and core
          problem to solve.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Goals & Success Metrics
        </h2>
        <p className="text-neutral-600">
          Placeholder: Define project goals, constraints, and what success
          looked like.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Research Highlights
        </h2>
        <p className="text-neutral-600">
          Placeholder: Summarize key insights, quotes, or data that shaped the
          direction.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Strategy & Approach
        </h2>
        <p className="text-neutral-600">
          Placeholder: Outline the design approach, IA changes, and content
          strategy.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Design Iterations
        </h2>
        <p className="text-neutral-600">
          Placeholder: Show evolution from early concepts to refined layouts.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">Final Design</h2>
        <p className="text-neutral-600">
          Placeholder: Highlight the final system, key screens, and rationale.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Impact & Outcomes
        </h2>
        <p className="text-neutral-600">
          Placeholder: Note outcomes, stakeholder feedback, or projected impact.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Learnings & Next Steps
        </h2>
        <p className="text-neutral-600">
          Placeholder: Summarize takeaways and what you would improve or expand.
        </p>
      </section>
    </main>
  );
}
