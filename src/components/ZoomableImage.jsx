// src/components/ZoomableImage.jsx
import { useEffect, useRef, useState } from "react";

import { Fullscreen } from "lucide-react";

export default function ZoomableImage({
  src,
  alt,
  thumbHeight = 220,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastOffset = useRef({ x: 0, y: 0 });

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Wheel to zoom (desktop)
  const onWheel = (e) => {
    e.preventDefault();
    const delta = -Math.sign(e.deltaY) * 0.1;
    setScale((s) => {
      const next = Math.min(4, Math.max(1, +(s + delta).toFixed(2)));
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  };

  // Drag/pan
  const onMouseDown = (e) => {
    if (scale === 1) return;
    dragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    lastOffset.current = { ...offset };
  };
  const onMouseMove = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setOffset({ x: lastOffset.current.x + dx, y: lastOffset.current.y + dy });
  };
  const onMouseUp = () => {
    dragging.current = false;
  };

  // Touch (single finger) pan
  const touchStart = useRef({ x: 0, y: 0 });
  const onTouchStart = (e) => {
    if (scale === 1) return;
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
    lastOffset.current = { ...offset };
  };
  const onTouchMove = (e) => {
    if (scale === 1) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    setOffset({ x: lastOffset.current.x + dx, y: lastOffset.current.y + dy });
  };

  const fit = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };
  const to100 = () => setScale(2);
  const zoomIn = () => setScale((s) => Math.min(4, +(s + 0.25).toFixed(2)));
  const zoomOut = () =>
    setScale((s) => {
      const next = Math.max(1, +(s - 0.25).toFixed(2));
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });

  return (
    <>
      {/* Thumbnail with magnifying-glass icon overlay */}
      <button
        onClick={() => setOpen(true)}
        className={`group relative block w-full overflow-hidden rounded-lg border border-stone-200 ${className}`}
        style={{ height: thumbHeight }}
        aria-label={`Enlarge image: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          loading="lazy"
        />

        {/* Magnifying glass overlay */}
        <div
          className="
      absolute inset-0 flex items-center justify-center
      bg-black/0 group-hover:bg-black/20 transition-colors
    "
        >
          <Fullscreen className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </button>

      {/* Lightbox */}
      {open && (
        // ...inside the {open && (...)} block

         <div
    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    aria-label={`${alt} (zoomed view)`}
  >
    {/* Backdrop (click to close) */}
    <div
      className="absolute inset-0"
      onClick={() => setOpen(false)}
      aria-hidden="true"
    />

    {/* Content layer above backdrop */}
    <div
      className="relative z-10 h-full w-full"
      onWheel={(e) => { e.preventDefault(); onWheel(e); }}
    >
      {/* Toolbar (translucent, simplified) */}
      <div className="absolute left-1/2 top-[max(1rem,env(safe-area-inset-top))] -translate-x-1/2 z-50 pointer-events-auto">
        <div
          className="flex items-center gap-2 rounded-full border border-stone-200 bg-white/85 backdrop-blur px-3 py-1 text-stone-800 shadow-lg"
          onClick={(e) => e.stopPropagation()}   // prevent backdrop close
        >
          <button type="button" onClick={zoomOut} className="px-2 py-1 focus:outline-none focus:ring">−</button>
          <span className="px-1 text-sm tabular-nums">{Math.round(scale * 100)}%</span>
          <button type="button" onClick={zoomIn} className="px-2 py-1 focus:outline-none focus:ring">+</button>
          <span className="mx-2 h-4 w-px bg-stone-300" />
          <button type="button" onClick={() => setOpen(false)} className="px-2 py-1 focus:outline-none focus:ring">Close</button>
        </div>
      </div>

      {/* Image stage */}
      <div
        className="absolute inset-0 z-40 flex items-center justify-center cursor-zoom-out active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()}     // don't close when clicking image
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] select-none"
          draggable={false}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transition: dragging.current ? "none" : "transform 120ms ease-out",
          }}
        />
      </div>
    </div>
  </div>
      )}
    </>
  );
}
