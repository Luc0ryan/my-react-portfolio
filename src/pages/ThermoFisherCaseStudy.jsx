import CaseStudyIntro from "../components/CaseStudyIntro";
import coverphoto from "../assets/coverphoto-tfr.png";
import PersonaCard from "../components/PersonaCard";
import { ZoomableGallery, ZoomableItem } from "../components/ZoomableImage.tsx";

import epavi from "../assets/epavi.png";
import pmavi from "../assets/pmavi.png";
import ecavi from "../assets/ecavi.png";
import tfrfilter from "../assets/tfrfilters.png";
import tfrcard from "../assets/tfrcard.png";
import mobile from "../assets/mobiletfr.png";
import featured from "../assets/fullwidthfeatured.png";
import tfrfinal from "../assets/tfr-events-final.png";

export default function ThermoFisherCaseStudy() {
  return (
    <main className="mx-auto max-w-3xl space-y-12 py-12">
      <CaseStudyIntro
        title="A clearer path to events that matter"
        image={coverphoto}
        imageAlt="Thermo Fisher event pages mockup"
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Audience", value: "Scientists & Event Attendees" },
          { label: "Focus", value: "Navigation, Accessibility, Engagement" },
          { label: "Scope", value: "National Event Platform" },
        ]}
        
      />
      <p className="bg-rose-100 border border-neutral-200 p-4 rounded-lg text-xl leading-relaxed">
      <h2 className="font-spectral text-2xl lowercase font-semibold text-stone-900">
          Quick summary
        </h2>  <ul className="list-disc list-outside pl-5 pt-1 space-y-1 text-lg text-neutral-800">
    <li>Redesigned Thermo Fisher's event platform used by thousands of scientists.</li>
    <li>Focused on improving navigation clarity and event discovery.</li>
    <li>Created responsive interface projected to enhance attendee participation.</li>
  </ul>
      </p>
      <section className="mx-auto max-w-screen-lg px-4 space-y-3">
        <h2 className="font-spectral text-2xl lowercase font-semibold text-stone-600">
          Problem Framing
        </h2>
        <div className="text-xl font-bold  md:text-3xl lg:text-4xl text-neutral-900">
          Users struggled to find relevant events in a cluttered catalog.
        </div>
        <p className="text-lg text-neutral-700 max-w-2xl">
          The original event listings mixed conferences, webinars, and trainings
          without strong hierarchy or filters. The goal was to simplify
          discovery, clarify hierarchy, and align the interface with Thermo
          Fisher’s design system.
        </p>
      </section>

      <section className="mx-auto max-w-screen-lg px-4">
        <h2 className="font-spec text-2xl lowercase font-semibold text-stone-600">
          Design Approach
        </h2>
        <div className="text-lg text-neutral-900">
          The first step was mapping out the biggest friction points in the
          catalog. Compared to modern event listings, the page had no clear ways
          to narrow down a sprawling set of events across industries. To ground
          the redesign, I considered how different types of users—from research
          scientists to graduate students— would expect to find events tailored
          to their needs.
        </div>
        <div className="grid gap-6 py-6 lg:grid-cols-2">
          <PersonaCard
            title="Emerging Professional"
            subtitle="18-25 year olds"
            avatarSrc={epavi}
            avatarAlt="Emerging Professional avatar"
            bullets={[
              "Overwhelmed by options",
              "Limited industry knowledge",
              "Needs clear signifiers/guidance",
            ]}
            priority="Needs clear signifiers"
            bgColor="bg-rose-50"
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
            bgColor="bg-rose-50"
          />

          <PersonaCard
            title="Corporate PM"
            subtitle="35-50 year olds"
            avatarSrc={pmavi}
            avatarAlt="Corporate Product Management avatar"
            bullets={[
              "Cross-industry scanning",
              "Prioritizes practical takeaways",
              "Targets big conferences first",
            ]}
            priority="Spotlight on major conferences"
            bgColor="bg-rose-50"
          />

          <div className="p-4 text-neutral-600">
            Beyond the personas, I reviewed popular event platforms like
            Eventbrite and Meetup to check how they handle event discovery.
            Their use of clear categories, icons, and filters reinforced my
            research, giving me confidence to move forward with the redesign.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-lg px-4">
        <h2 className="font-spec text-2xl lowercase font-semibold text-stone-600">
          First-Look Outcomes
        </h2>

        <p className="text-lg text-neutral-700">
          The first iteration centered on translating outdated layouts into a
          format today's audiences recognize and trust. The goal is an intuitive
          experience through rebuilding the event page around familiar patterns,
          clear signifiers, and organized hierarchy.
        </p>
        <div className="space-y-16 py-8">
          <div className="grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
            <img
              src={tfrfilter}
              alt="Improved filtering interface"
              className="rounded-lg border border-neutral-300"
              loading="lazy"
            />
            <div className="space-y-2">
              <p className="text-md lowercase tracking-tight text-neutral-500">
                Filtering
              </p>
              <h3 className="font-spec text-lg leading-none font-semibold text-neutral-900">
                Find relevant events faster
              </h3>
              <p className="text-neutral-700">
                The redesigned filter bar anchors the page and makes discovery
                immediate. Users can narrow events by topic and date without
                losing context.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="space-y-2 lg:w-1/3">
              <p className="text-md lowercase tracking-tight text-neutral-500">
                Event Cards
              </p>
              <h3 className="font-spec text-lg leading-none  font-semibold text-neutral-900">
                Key details at a glance
              </h3>
              <p className="text-neutral-700">
                Condensed event cards emphasize date, time, and location,
                allowing users to make quick value judgments.
              </p>
            </div>

            <img
              src={tfrcard}
              alt="Condensed event card layout"
              className="rounded-lg border border-neutral-300 lg:w-2/3"
              loading="lazy"
            />
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
            <img
              src={mobile}
              alt="Featured events section on mobile"
              className="w-full rounded-lg border border-neutral-300 object-cover"
              loading="lazy"
            />
            <div className="space-y-2">
              <p className="text-md lowercase tracking-tight text-neutral-500">
                Mobile Layout
              </p>
              <h3 className="font-spec text-lg leading-none  font-semibold text-neutral-900">
                Adapting across screens
              </h3>
              <p className="text-neutral-700">
                Nearly 70% of users viewed events on mobile, making a responsive
                foundation essential. The grid adjusts smoothly across
                breakpoints, keeping hierarchy in focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-lg space-y-8 px-4 lg:px-0">
        <div className="max-w-3xl space-y-4">
          <h2 className="font-spec text-2xl lowercase font-semibold text-stone-600">
            Stakeholder Collaboration
          </h2>
          <p className="text-lg text-neutral-700">
            After aligning on the foundation, I met with internal stakeholders
            to review early iterations and walkthrough early prototypes. Their
            feedback centered on surfacing key events more prominently and
            ensuring longer titles remained legible, which led to two major
            refinements.
          </p>
        </div>

        <figure className="mb-6 w-full">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-neutral-300">
            <img
              src={featured}
              alt="Featured Events module alongside a full-width event card"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 text-sm text-neutral-500">
            Featured Events and full-width card layout, introduced after
            stakeholder review.
          </figcaption>
        </figure>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-spec font-semibold text-neutral-900">
              Highlighting what matters
            </h3>
            <p className="text-neutral-700">
              Stakeholders requested a way to spotlight high-impact events such
              as conferences or sponsored sessions. The new “Featured Events”
              component anchors the top of the page and gives priority content a
              clear place to live without breaking the overall flow.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-spec font-semibold text-neutral-900">
              Revisiting card layout
            </h3>
            <p className="text-neutral-700">
              There were concerns about character count for longer titles. I
              explored a full-width card that accommodates more text while
              keeping spacing and hierarchy intact. The result balances
              legibility with the system's visual rhythm.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-lg space-y-8 px-4 lg:px-0">
        <header className="mb-8">
          <p className="text-sm text-neutral-500">refined design</p>
          <h2 className="text-2xl md:text-3xl font-spec font-semibold tracking-tight">
          An Elevated Event Experience          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            The final layout prioritizes quick wayfinding: a persistent filter
            bar, clear hierarchy for cards, and a “Featured Events” module that
            raises high-priority events. The original goal was to simply
            modernize the layout with Thermo Fisher's design system, but the end
            result aims to create a more intuitive and accessible experience for
            diverse users.
          </p>
        </header>

        {/* Zoomable hero image */}
        <div
          className="rounded-2xl border border-neutral-200 bg-white/70 shadow-sm p-3 md:p-4"
          aria-label="Framed final screen artifact"
        >
          <ZoomableGallery>
            <ZoomableItem
              fullSrc={tfrfinal}
              thumbSrc={tfrfinal}
              width={3200} // intrinsic width of full image
              height={2234} // intrinsic height of full image
              alt="Final Thermo Fisher Events page showing Featured Events at the top, filter bar, and condensed event cards."
            >
              Final Events Page — desktop (zoom to inspect filters, labels, and
              hierarchy)
            </ZoomableItem>
          </ZoomableGallery>
          <figcaption className="mt-3 text-xs text-neutral-500">
            Zoom is enabled to preserve legibility without loading an oversized
            inline image.
          </figcaption>
        </div>
      </section>

      <section className="mx-auto max-w-screen-lg space-y-4 px-4 lg:px-0">
        <h2 className="font-spec text-2xl lowercase font-semibold text-stone-600">
          Key Learnings
        </h2>
        <div className="space-y-4 text-neutral-700">
          <p>
            At the time of writing, the redesigned event pages haven't been
            implemented and I know they likely never will be. I've kept this
            case study on my portfolio not as proof of a launch, but as a
            reflection of how I approach design: through a user-centered lens,
            even when outcomes are uncertain.
          </p>
          <p>
            Designing for a broad audience under high cognitive load reinforced
            my belief that clarity and structure come before polish. There's no
            universal solution for pages like these, only iterative ones. The
            best event experiences offer choice without chaos; enough
            flexibility for users to feel in control without slipping into
            decision fatigue.
          </p>
          <p>
            Working through this taught me to balance local and global
            affordances; how patterns can guide users seamlessly across contexts
            while introducing new interactions that still feel intuitive. In a
            fast-paced corporate environment, where testing cycles are limited
            and expectations move quickly, grounding design in familiar
            signifiers proved the surest path to user trust.
          </p>
        </div>
      </section>
    </main>
  );
}
