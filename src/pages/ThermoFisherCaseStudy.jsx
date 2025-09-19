import CaseStudyIntro from "../components/CaseStudyIntro";
import coverphoto from "../assets/coverphoto-tfr.png";
import InPageNav from "../components/InPageNav";

export default function ThermoFisherCaseStudy() {
  return (
    <main className=" mx-auto py-8 space-y-8">
      <CaseStudyIntro
        title="A clearer path to events that matter"
        image= {coverphoto}
        imageAlt="Thermo Fisher event pages mockup"
        meta={[
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "May-August 2023" },
          { label: "Scope", value: [ "Event listings & pages", "Registration flows"] },
          { label: "Impact", value: [ "Faster wayfinding", "Accessible design"] },
        ]}
      />

      
      <section id="problem" className="mx-auto max-w-screen-lg px-6 sm:px-12 lg:px-16 scroll-mt-24">
        <h2 className="text-2xl font-crimson text-zinc-500">Overview</h2>
        <div className="text-3xl">Overhauling event discovery by streamlining filtering and navigation while unifying with Thermo Fisher's design system.</div>
      </section>

      <section id="approach" className="mx-auto max-w-screen-lg px-6 sm:px-12 lg:px-16 scroll-mt-24">
        <h2 className="text-2xl font-crimson text-zinc-500">Approach</h2>
        <div className="text-xl text text-neutral-900">The first step was mapping out the biggest friction points in the catalog. Compared to modern event listings, the page had no clear ways to narrow down a sprawling set of events across industries. To ground the redesign, I considered how different types of users (from research scientists to graduate students)  would expect to find events tailored to their needs.</div>
      </section>

      <section id="outcomes" className="mx-auto max-w-screen-lg px-6 sm:px-12 lg:px-16 scroll-mt-24">
        <h2 className="text-2xl font-crimson text-zinc-500">Outcomes</h2>
        {/* content */}
      </section>

      <section id="screens" className="mx-auto max-w-screen-lg px-6 sm:px-12 lg:px-16 scroll-mt-24">
        <h2 className="text-2xl font-crimson text-zinc-500">Final Screens</h2>
        {/* content */}
      </section>

      <section id="learnings" className="mx-auto max-w-screen-lg px-6 sm:px-12 lg:px-16 scroll-mt-24">
        <h2 className="text-2xl font-crimson text-zinc-500">Learnings</h2>
        {/* content */}
      </section>
    </main>
  );
}
