// components/CaseStudyIntroAligned.tsx
import React from "react";

type MetaItem = { label: string; value: string };

type Props = {
  title: string;
  subtitle?: string;
  description: string; // right column copy
  meta: MetaItem[]; // left column items (Role, When, Tools, Team...)
  bandBgClass?: string; // e.g. "bg-stone-50" (default), "bg-white", "bg-rose-50"
  borderClass?: string; // e.g. "border-neutral-200" (default)
};

export default function CaseStudyIntro({
  title,
  subtitle,
  description,
  meta,
  bandBgClass = "bg-stone-50",
  borderClass = "border-neutral-200",
}: Props) {
  return (
    <header aria-labelledby="case-title">
      <section className={`w-full ${borderClass} ${bandBgClass}`}>
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-12 lg:px-16 py-10 sm:py-14">
          {/* 2-row grid: 
              Row 1 → Title/Subtitle in LEFT column
              Row 2 → LEFT (Meta), RIGHT (Description) */}
          <div className="grid gap-8 md:grid-cols-[minmax(220px,320px)_1fr] md:grid-rows-[auto_auto]">
            {/* Row 1: Title + Subtitle spans full width */}
            <div className="md:row-start-1 md:col-span-2">
              <h1
                id="case-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900"
              >
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-base sm:text-lg text-neutral-700">
                  {subtitle}
                </p>
              )}
            </div>
            {/* Row 2, Col 1: Meta*/}
            <dl className="md:row-start-2 md:col-start-1">
              {meta.map((item, i) => (
                <React.Fragment key={i}>
                  <dt className="text-sm leading-none pt-3 font-semibold text-neutral-900">
                    {item.label}
                  </dt>
                  <dd className=" text-sm leading-none text-neutral-700">
                    {item.value}
                  </dd>
                </React.Fragment>
              ))}
            </dl>

            {/* Row 2, Col 2: Description */}
            <div className="md:row-start-2 md:col-start-2 md:max-w-[72ch]">
              <p className="text-[15.5px] sm:text-base leading-relaxed text-neutral-800">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
