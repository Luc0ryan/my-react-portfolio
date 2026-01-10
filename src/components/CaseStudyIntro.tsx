// components/CaseStudyIntro.tsx
type ListItem = { lead: string; body: string };

type MetaItem = { label: string; value: string | string[] };

type CaseStudyIntroProps = {
  title: string;
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  overview?: string;

  list?: ListItem[];
  meta?: MetaItem[];
};

export default function CaseStudyIntro({
  title,
  image,
  imageAlt,
  logo,
  logoAlt,
  overview,

  list,
  meta,
}: CaseStudyIntroProps) {
  return (
    <section className="mx-auto px-4 py-6 max-w-5xl">
      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="eager"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>

      {(overview || list || meta) && (
        <div className="mt-6 grid gap-6 md:grid-cols-[180px_1fr]">
          {/* Meta (left column) */}
          {meta && meta.length > 0 && (
            <aside>
              {logo && (
                <div className="mb-4">
                  <img
                    src={logo}
                    alt={logoAlt || "Organization logo"}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              )}
              <dl className="space-y-3 text-[13px] leading-snug text-neutral-600">
                {meta.map((item, i) => (
                  <div key={i}>
                    <dt className="uppercase tracking-widest text-[10px] font-semibold text-neutral-500 mb-1">
                      {item.label}
                    </dt>
                    <dd className="text-neutral-800">
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
            </aside>
          )}

          {/* Overview content */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              {title}
            </h1>
            {overview && (
              <p className="text-lg sm:text-xl text-neutral-900 leading-snug">
                {overview}
              </p>
            )}

            {list && list.length > 0 && (
              <ol className="mt-4 space-y-2 list-decimal list-outside pl-5 text-neutral-700 max-w-3xl">
                {list.map((item, i) => (
                  <li key={i}>
                    <strong>{item.lead}</strong>
                    {item.body}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
