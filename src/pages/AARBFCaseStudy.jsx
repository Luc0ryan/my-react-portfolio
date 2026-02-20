import React from "react";
import CaseStudyIntro from "../components/CaseStudyIntro";
import { ZoomableGallery, ZoomableItem } from "../components/ZoomableImage.tsx";
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
        meta={[
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "Feb ‘24 — Jan ‘25" },
          { label: "Scope", value: "End-to-end redesign" },
        ]}
      />
      <section className="mx-auto max-w-3xl space-y-3">
        <h2 className="text-2xl font-semibold text-neutral-900">
Design Challenges        </h2>

        <ul className="space-y-6 list-inside">
          <li>
            <p className="text-base font-semibold text-neutral-800">
              1. Reframing AARBF beyond a single flagship program
            </p>
            <p className="text-base text-neutral-600">
              Revealing the foundation as a year-round community nonprofit with
              active hospital partnerships, firefighter relationships, and
              programs serving survivors and families of all ages.
            </p>
          </li>

          <li>
            <p className="text-base font-semibold text-neutral-800">
              2. Structuring human stories
            </p>
            <p className="text-base text-neutral-600">
              Turning survivor and community voices into clear, repeatable
              content that reinforces credibility, empathy, and belonging.
            </p>
          </li>

          <li>
            <p className="text-base font-semibold text-neutral-800">
              3. Building a system the team could actually run
            </p>
            <p className="text-base text-neutral-600">
              Delivering a durable redesign while balancing speed, scope, and
              stakeholder realities in a resource-constrained nonprofit
              environment.
            </p>
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-900">
          What's AARBF About?
        </h2>

        <p className="text-neutral-600 leading-relaxed">
          Alisa Ann Ruch Burn Foundation (AARBF) is one of the largest organizations supporting burn survivors in California. Through hospital partnerships, educational outreach, and direct survivor programs, the foundation provides long-term community and care across the state.
        </p>

        <p className="text-neutral-600 leading-relaxed">
          Their visibility, however, was <strong>concentrated around a single moment: Champ Camp,</strong> the annual summer program that brings hundreds of burn survivors and families together to find connection and support. Outside of Champ Camp, 
          <strong> event participation and fundraising engagement had steadily declined.</strong> </p>
          <p className="text-neutral-600 leading-relaxed">
            Despite strong relationships with burn care units and firefighting departments, AARBF struggled to communicate the breadth of their year-round impact to the broader public. The opportunity was clear: <strong>reposition the website to reflect an organization whose strength extends far beyond one flagship event.</strong>
        </p>
      </section>

      <section className="w-full space-y-12">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Establishing a Clear Top-Down Structure
        </h2>
      </section>

      <section className="w-full space-y-12">

        <div className="w-full space-y-4">
          <div className="overflow-hidden border border-neutral-200 rounded-lg">
            <ZoomableGallery>
              <ZoomableItem
                fullSrc={homeSlice1}
                thumbSrc={homeSlice1}
                width={894}
                height={314}
                alt="AARBF redesign — featured events and calendar"
              />
            </ZoomableGallery>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-neutral-900">
              Featured Events & Calendar
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Clarifying event visibility and reducing reliance on a single flagship program by elevating year-round activity.
            </p>
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="overflow-hidden border border-neutral-200 rounded-lg">
            <ZoomableGallery>
              <ZoomableItem
                fullSrc={homeSlice2}
                thumbSrc={homeSlice2}
                width={1413}
                height={559}
                alt="AARBF redesign — partner news and community signals"
              />
            </ZoomableGallery>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-neutral-900">
              Partner News & Community Signals
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Reinforcing seasonal engagement and statewide presence through clearer storytelling and recurring updates.
            </p>
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="overflow-hidden border border-neutral-200 rounded-lg">
            <ZoomableGallery>
              <ZoomableItem
                fullSrc={homeSlice3}
                thumbSrc={homeSlice3}
                width={894}
                height={314}
                alt="AARBF redesign — programs and retreats"
              />
            </ZoomableGallery>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-neutral-900">
              Programs & Retreats
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Organizing camps, retreats, and outings into a system that feels accessible, human, and easy to navigate.
            </p>
          </div>
        </div>

      </section>

   
    </main>
  );
}
