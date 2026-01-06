import React from "react";
import CaseStudyIntro from "../components/CaseStudyIntro";
import aarbfcov from "../assets/aarbf-case-study.png";

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
            lead: "Repositioning for credibility,",
            body: " addressing trust gaps in a public-facing nonprofit site.",
          },
          {
            lead: "Structuring human stories,",
            body: " turning survivor and community voices into clear, repeatable content.",
          },
          {
            lead: "Owning the work end to end,",
            body: " delivering a durable redesign while balancing speed, scope, and stakeholders.",
          },
        ]}
        meta={[
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "Feb ‘24 — Jan ‘25" },
          { label: "Scope", value: "End-to-end redesign" },
        ]}
      />

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
