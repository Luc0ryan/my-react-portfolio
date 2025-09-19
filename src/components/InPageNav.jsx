import { useEffect, useState } from "react";

export default function InPageNav({
  items,                 // [{ id: "problem", label: "Problem" }, ...]
  offsetTop = 96,        // sticky offset beneath your site header
  className = "",
}) {
  const [active, setActive] = useState(items?.[0]?.id);

  useEffect(() => {
    if (!items?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target?.id) setActive(vis.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.4, 0.7] }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const jump = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  if (!items?.length) return null;

  return (
    <nav
      className={`hidden lg:block ${className}`}
      style={{ width: 220 }}
      aria-label="On this page"
    >
      <div className="sticky" style={{ top: offsetTop }}>
        <ol className="text-[14px] leading-snug text-neutral-700 space-y-2.5">
          {items.map(({ id, label }) => {
            const isActive = active === id || location.hash === `#${id}`;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={jump(id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block px-2 py-1 rounded-md transition
                    focus:outline-none focus:ring-2 focus:ring-neutral-300
                    ${isActive ? "bg-neutral-100 text-neutral-900" : "hover:bg-neutral-50"}`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
