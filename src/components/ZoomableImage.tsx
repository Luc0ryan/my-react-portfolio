// ZoomableGallery.tsx
// React 19 compatible. Tailwind v4 safe.
// Requirements (install in your project root):
//   npm i photoswipe photoswipe-dynamic-caption-plugin
//   // Add styles in your app entry:
//   import 'photoswipe/style.css';
//   import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
//
// Usage:
// <ZoomableGallery>
//   <ZoomableItem
//     fullSrc="/images/aarbf-case-study.jpg"
//     thumbSrc="/images/aarbf-case-study-thumb.jpg"
//     width={2048}
//     height={1280}
//     alt="AARBF website redesign — homepage and donation flow"
//   >
//     AARBF website redesign — homepage and donation flow
//   </ZoomableItem>
//   ...more <ZoomableItem />
// </ZoomableGallery>
//
// Notes:
// - The caption text comes from children or the <img alt>, via dynamic-caption plugin.
// - Includes a subtle 🔍 affordance on each thumbnail (visible on hover/focus).
// - Keyboard and screen-reader friendly: each item is a focusable <a> with aria-label.

import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import type { Point } from 'photoswipe';
// Dynamic caption plugin
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - plugin has no TS types bundled
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js';

// -----------------------------
// Container that wires up PhotoSwipe + plugin for all child items
// -----------------------------
export function ZoomableGallery({
  children,
  padding,
  captionType = 'auto', // 'auto' | 'aside' | 'below'
}: {
  children: React.ReactNode;
  padding?: (viewportSize: Point) => { top: number; right: number; bottom: number; left: number };
  captionType?: 'auto' | 'aside' | 'below';
}) {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    // Initialize PhotoSwipe Lightbox for anchors inside this container
    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: 'a[data-pswp-width]'
        // ^ anchors rendered by <ZoomableItem>
      ,
      pswpModule: () => import('photoswipe'),
      paddingFn: padding,
    });

    // Init Dynamic Caption plugin (positions caption aside/below)
    // See: https://github.com/dimsemenov/photoswipe-dynamic-caption-plugin
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
      type: captionType,
      // Prefer an explicit caption node; fallback to <img alt>
      captionContent: (slide: any) => {
        const el = slide?.data?.element as HTMLElement | undefined;
        const explicit = el?.querySelector('.pswp-caption-content') as HTMLElement | null;
        if (explicit && explicit.textContent?.trim()) return explicit.innerHTML;
        const imgAlt = el?.querySelector('img')?.getAttribute('alt') || '';
        return imgAlt;
      },
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, [padding, captionType]);

  return (
    <div ref={galleryRef} className="pswp-gallery grid grid-cols-1 gap-4 sm:grid-cols-2">
      {children}
    </div>
  );
}

// -----------------------------
// Individual thumbnail → opens full image in PhotoSwipe
// -----------------------------
export function ZoomableItem({
  fullSrc,
  thumbSrc,
  width,
  height,
  alt,
  className = '',
  children, // optional caption content (preferred if present)
}: {
  fullSrc: string;
  thumbSrc: string;
  width: number; // actual pixel width of full image
  height: number; // actual pixel height of full image
  alt: string;
  className?: string;
  children?: React.ReactNode; // caption text/markup
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-xl ${className}`}>
      {/* Trigger anchor required by PhotoSwipe */}
      <a
        href={fullSrc}
        // PhotoSwipe v5 requires these size hints
        data-pswp-width={width}
        data-pswp-height={height}
        aria-label={alt ? `Zoom image: ${alt}` : 'Zoom image'}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        {/* Thumbnail */}
        <img
          src={thumbSrc}
          alt={alt}
          loading="lazy"
          className="block w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
        />

        {/* Affordance: magnifying glass (subtle) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center justify-center rounded-full bg-black/35 p-1.5 opacity-75 shadow-sm transition group-hover:opacity-100 group-focus-within:opacity-100"
        >
          {/* Using a simple SVG to avoid extra deps; swap with Lucide if desired */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 text-white"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        {/* Hidden (but accessible) caption node for the plugin; will be read by captionContent() */}
        {children ? (
          <span className="pswp-caption-content sr-only">{children}</span>
        ) : null}
      </a>

      {/* Optional visible caption under thumbnail (outside lightbox) */}
      {children ? (
        <figcaption className="mt-2 text-sm text-neutral-600">{children}</figcaption>
      ) : null}
    </figure>
  );
}

// -----------------------------
// Example usage component (drop into any page)
// -----------------------------
export default function ExampleCaseStudyGallery() {
  return (
    <ZoomableGallery>
      <ZoomableItem
        fullSrc="/images/aarbf-case-study.jpg"
        thumbSrc="/images/aarbf-case-study-thumb.jpg"
        width={2048}
        height={1280}
        alt="AARBF website redesign — homepage and donation flow"
      >
        AARBF website redesign — homepage and donation flow
      </ZoomableItem>

      <ZoomableItem
        fullSrc="/images/tfs-event.jpg"
        thumbSrc="/images/tfs-event-thumb.jpg"
        width={1920}
        height={1200}
        alt="Thermo Fisher Scientific — event landing page redesign"
      >
        Thermo Fisher Scientific — event landing page redesign
      </ZoomableItem>
    </ZoomableGallery>
  );
}
