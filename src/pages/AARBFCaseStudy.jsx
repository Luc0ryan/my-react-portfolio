import CaseStudyIntro from "../components/CaseStudyIntro";
import aarbfcov from "../assets/aarbf-case-study.png";

export default function AARBFCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12 py-8 space-y-8">
      <CaseStudyIntro
        title="Turning compassion into clarity for a statewide nonprofit"
        image={aarbfcov}
        imageAlt="AARBF homepage redesign mockup"
        meta={[
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "Feb-Apr 2024" },
          {
            label: "Scope",
            value: ["Full site redesign", "Donation flow", "Program pages"],
          },
          {
            label: "Impact",
            value: [
              "Accessible structure",
              "Emotional storytelling",
              "Clear donation path",
            ],
          },
        ]}
      />

      <section className="mx-auto w-full scroll-mt-24 space-y-3 px-4">
        <h2 className="font-spectral text-2xl lowercase font-semibold text-stone-600">
          problem stataement
        </h2>

        <div className="text-xl md:text-2xl text-neutral-900">
          AARBF's programs were buried behind unclear navigation, inconsistent
          language, and a lack of human storytelling
        </div>

        <p className="text-neutral-700 max-w-3xl">
          AARBF (Alisa Ann Ruch Burn Foundation) is a statewide nonprofit that
          supports burn survivors and their families through prevention
          programs, events, and recovery services. I rebuilt the structure and
          design to highlight their mission, simplify navigation, and guide
          visitors to support and resources without friction.
        </p>
      </section>
    </main>
  );
}
