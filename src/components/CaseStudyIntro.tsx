// components/CaseStudyIntro.tsx
import React from "react";

type MetaItem = { label: string; value: string | string[] };

export default function CaseStudyIntro({
  title,
  image,
  imageAlt,
  meta,
}: {
  title: string;
  image: string;
  imageAlt: string;
  meta: MetaItem[];
}) {
  return (
    <section className="max-w-screen-lg mx-auto px-6 sm:px-12 lg:px-16 my-auto py-3 sm:py-5">
      {/* Cover Image */}
      <div className="w-full overflow-hidden rounded-md">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h1>

      {/* Meta tags */}
      <dl className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-4 text-[14px] leading-snug text-neutral-700">
        {meta.map((item, i) => (
          <div key={i}>
            <dt className="font-semibold font-crimson text-neutral-600 mb-1">{item.label}</dt>
            <dd className="text-neutral-600 text-xs">
              {Array.isArray(item.value) ? (
                <ul className="space-y-1">
                  {item.value.map((v, j) => (
                    <li key={j}>{v}</li>
                  ))}
                </ul>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
