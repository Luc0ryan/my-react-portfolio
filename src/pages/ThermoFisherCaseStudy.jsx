import CaseStudyIntro from "../components/CaseStudyIntro";

export default function ThermoFisherCaseStudy() {
  return (
    <main className=" mx-auto py-8 space-y-8">
      <CaseStudyIntro
  title="Thermo Fisher Scientific — Events Platform Redesign"
  subtitle="Mobile-first event pages for a global audience."
  meta={[
    { label: "Role", value: "UI/UX Designer" },
    { label: "When", value: "Summer 2023" },
    { label: "Scope", value: "Event listings to registration" },
    
  ]}
  description="Thermo Fisher hosts large, high-visibility events where most attendees browse on mobile. I led a mobile-first redesign aligned to the company’s design system and accessibility standards, prioritizing quick paths to schedules, speakers, and registration. The result is faster wayfinding, consistent UI patterns, and a smoother experience across devices."
  bandBgClass = "bg-rose-50"
/>

    </main>
  );
}
