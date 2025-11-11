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
    <section className="mx-auto px-4 py-3 sm:py-5">


      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h1>

      {/* Meta tags */}
      <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-6 py-2 text-[14px] leading-snug text-neutral-700">
  {meta.map((item, i) => (
    <div key={i} className="min-w-[10rem] flex-1 sm:flex-none">
      <dt className="font-semibold font-crimson text-neutral-600 mb-1">
        {item.label}
      </dt>
      <dd className="text-neutral-600">
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

      {/* Cover Image */}
      <div className="my-4 relative w-full aspect-[16/9] overflow-hidden rounded-md">
        <img
          src={image}
          alt={imageAlt}
          loading="eager"
          decoding = "async"
        className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      
    </section>
  );
}
