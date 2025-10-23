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

      <section className="mx-auto max-w-3xl scroll-mt-24 space-y-6 px-4">
        <h2 className="font-spectral text-2xl lowercase font-semibold text-stone-600">
          Overview
        </h2>

        <div className="text-xl md:text-3xl lg:text-4xl text-neutral-900">
          Rebuilding clarity and compassion for a mission that saves lives and
          rebuilds community.
        </div>

        <p className="text-lg text-neutral-700 max-w-2xl">
          The Alisa Ann Ruch Burn Foundation (AARBF) supports burn survivors and
          promotes fire prevention education across California. Their past
          website was hard to navigate as key information was buried, the
          donation flow was confusing, and the design minimized the
          organization's reach. It was my goal to to redesign the site to create
          a clearer, more accessible experience that would brings their story
          and impact to the front stage.
        </p>
      </section>

      <section className="mx-auto max-w-3xl scroll-mt-24 space-y-6 px-4">
        <h2 className="font-spectral text-2xl lowercase font-semibold text-stone-600">
          Challenge
        </h2>
        <p className="text-lg text-neutral-700 max-w-2xl">
          The main challenges was to balance two key objectives: first to move
          the organiztion onto a more modern footing that would effecitvely
          highlight the human element. The second objective was to allow easy
          maintainance and updates by the small, community driven team at AARBF
          to allow them to focus on their work.
        </p>
        <p className="text-lg text-neutral-700 max-w-2xl">
          This was reflected in stakeholder interviews, which highlighted the
          need to show more events and current happenings, as most people with
          awareness of AARBF were generally focused around Champ Camp, their
          most prominent annual event. Only once peole became more involved with
          the organization were they made more aware of the various other camps
          and events that AARBF would host on a monthly basis.
        </p>

        <p>
          Upon starting this project, I spoke a lot with the stakeholders: longtime staff of AARBF who were passionate about their mission with multiple goals for how they wanted to reframe the broader public perception.
          They wanted to highlight not just the burn survivors, but also the volunteers, medical professionals, and community members who made up the AARBF family. 
          Concerns over lack of donations and engagement were mentioned, as well as self-professed lack of technical expertise within the team. 
          </p>
      </section>
    </main>
  );
}
