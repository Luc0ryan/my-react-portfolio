import { useState, useRef, useCallback, useEffect } from "react";

/**
 * BeforeAfterSlider
 *
 * Props:
 *   beforeSrc       — image URL for the "old" / before state
 *   afterSrc        — image URL for the "new" / after state
 *   beforeAlt       — alt text for before image        (default: "Before")
 *   afterAlt        — alt text for after image         (default: "After")
 *   beforeLabel     — overlay label text               (default: "Old")
 *   afterLabel      — overlay label text               (default: "New")
 *   initialPosition — starting split 0–100             (default: 50)
 *   background      — "light" | "dark" | "auto"        (default: "auto")
 *                     "auto" renders a dark mode toggle
 *   className       — extra classes on the root wrapper
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Old",
  afterLabel = "New",
  initialPosition = 50,
  background = "auto",
  className = "",
}) {
  const [position, setPosition] = useState(initialPosition);
  const [dark, setDark] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const dragging = useRef(false);
  const containerRef = useRef(null);

  // Resolve dark state from prop or internal toggle
  const isDark = background === "dark" || (background === "auto" && dark);

  // Measure container width accurately for true image reveal
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const clamp = (val) => Math.max(2, Math.min(98, val));

  const getPercent = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return position;
    return clamp(((clientX - rect.left) / rect.width) * 100);
  }, [position]);

  const onMouseDown = (e) => {
    dragging.current = true;
    setPosition(getPercent(e.clientX));
  };

  const onTouchStart = (e) => {
    dragging.current = true;
    setPosition(getPercent(e.touches[0].clientX));
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragging.current) return;
      setPosition(getPercent(e.clientX));
    };
    const onTouchMove = (e) => {
      if (!dragging.current) return;
      setPosition(getPercent(e.touches[0].clientX));
    };
    const onUp = () => { dragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [getPercent]);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>


      {/* Background wrapper — lifts white images off the page */}
      <div
        className={`
          p-4 rounded-2xl transition-colors duration-300
          ${isDark ? "bg-neutral-900" : "bg-neutral-100"}
        `}
      >
        {/* Slider container */}
        <div
          ref={containerRef}
          className={`
            relative w-full overflow-hidden rounded-xl select-none cursor-ew-resize
            ring-1 transition-all duration-300
            ${isDark
              ? "ring-neutral-700"
              : "ring-neutral-300 shadow-sm"}
          `}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          {/* After (new) — base layer, sets natural image height */}
          <img
            src={afterSrc}
            alt={afterAlt}
            draggable={false}
            className="block w-full h-auto pointer-events-none"
          />

          {/* Before (old) — true reveal via clip + fixed pixel width */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={beforeSrc}
              alt={beforeAlt}
              draggable={false}
              className="absolute top-0 left-0 h-full pointer-events-none"
              style={{
                width: containerWidth > 0 ? `${containerWidth}px` : "100%",
                objectFit: "cover",
                objectPosition: "left top",
              }}
            />
          </div>

          {/* Inset vignette — subtle edge shadow to frame white images */}
          <div
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{ boxShadow: "inset 0 0 48px rgba(0,0,0,0.07)" }}
          />

          {/* Divider line */}
          <div
            className="absolute top-0 h-full pointer-events-none"
            style={{
              left: `${position}%`,
              transform: "translateX(-50%)",
              width: "2px",
              background: isDark ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.95)",
              boxShadow: "0 0 8px rgba(0,0,0,0.25)",
            }}
          />

          {/* Handle knob */}
          <div
            className={`
              absolute top-1/2 -translate-x-1/2 -translate-y-1/2
              w-9 h-9 rounded-full flex items-center justify-center pointer-events-none
              transition-colors duration-200
              ${isDark
                ? "bg-neutral-800 ring-1 ring-neutral-500"
                : "bg-white ring-1 ring-neutral-200 shadow-md"}
            `}
            style={{ left: `${position}%` }}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path
                d="M5 1L1 6l4 5"
                stroke={isDark ? "#ccc" : "#555"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 1l4 5-4 5"
                stroke={isDark ? "#ccc" : "#555"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Before label */}
          <span
            className={`
              absolute top-3 left-3 text-[11px] font-medium tracking-widest uppercase
              px-2 py-1 rounded-md pointer-events-none backdrop-blur-sm transition-colors duration-200
              ${isDark ? "bg-white/10 text-white/75" : "bg-black/8 text-neutral-600"}
            `}
          >
            {beforeLabel}
          </span>

          {/* After label */}
          <span
            className={`
              absolute top-3 right-3 text-[11px] font-medium tracking-widest uppercase
              px-2 py-1 rounded-md pointer-events-none backdrop-blur-sm transition-colors duration-200
              ${isDark ? "bg-white/10 text-white/75" : "bg-black/8 text-neutral-600"}
            `}
          >
            {afterLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
