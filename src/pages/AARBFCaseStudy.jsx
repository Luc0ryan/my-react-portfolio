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
        overview="Rebuilding clarity and compassion for a mission that saves lives and rebuilds community."
        subtitle="A full redesign of AARBF’s site to improve accessibility, program clarity, and donor engagement."
        list={[
          {
            lead: "Credibility-first repositioning,",
            body: " closing legitimacy gaps in a public-facing nonprofit presence.",
          },
          {
            lead: "Human stories as structured content,",
            body: " translating survivor and community voices into repeatable, accessible patterns.",
          },
          {
            lead: "End-to-end ownership,",
            body: " delivering a durable redesign while balancing speed, scope, and stakeholders.",
          },
        ]}
        meta={[
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "Feb ‘24 — Jan ‘25" },
          { label: "Scope", value: "End-to-end redesign" },
        ]}
      />
    </main>
  );
}
