import CaseStudyIntro from "../components/CaseStudyIntro";
import aarbfcov from "../assets/aarbf-case-study.png";


export default function AARBFCaseStudy() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 py-8 space-y-8">
<CaseStudyIntro
        title="Turning compassion into clarity for a statewide nonprofit"
        image={aarbfcov}
        imageAlt="AARBF homepage redesign mockup"
        meta={[
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "Feb-Apr 2024" },
          { label: "Scope", value: ["Full site redesign", "Donation flow", "Program pages"] },
          {
            label: "Impact",
            value: ["Accessible structure", "Emotional storytelling", "Clear donation path"],
          },
        ]}
      />

      <section
        className="mx-auto max-w-3xl scroll-mt-24 space-y-6 px-4"
      >
        <h2 className="font-spectral text-2xl lowercase font-semibold text-stone-600">
          Overview
        </h2>

        <div className="text-xl md:text-3xl lg:text-4xl text-neutral-900">
          Rebuilding clarity and compassion for a mission that saves lives and rebuilds community.
        </div>

        <p className="text-lg text-neutral-700 max-w-2xl">
          The Alisa Ann Ruch Burn Foundation (AARBF) supports burn survivors and promotes
          fire prevention education across California. Their existing website was hard to navigate—key information was buried, the donation flow was confusing,
          and the design no longer reflected the organization's reach or warmth. I redesigned
          the site from the ground up to create a clearer, more accessible experience that
          brings their story and impact forward.
        </p>
      </section>
    </main>
  );
}
