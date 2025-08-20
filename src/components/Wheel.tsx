import { useEffect, useMemo, useRef, useState } from "react";

/** Props */
type WheelProps = {
  words: string[];
  intervalMs?: number;
  durationMs?: number;
  easing?: string;
  className?: string;
};

export default function Wheel({
  words,
  intervalMs = 1600,
  durationMs = 600,
  easing = "cubic-bezier(0.2,0.65,0,1)",
  className = "text-[clamp(1.25rem,4vw,2.25rem)] font-medium",
}: WheelProps) {
  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const timer = useRef<number | null>(null);

  const prevIdx = (idx - 1 + words.length) % words.length;
  const nextIdx = (idx + 1) % words.length;

  // advance index
  useEffect(() => {
    if (reducedMotion) return;
    timer.current = window.setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [intervalMs, words.length, reducedMotion]);

  // transition styles
  const styleActive = useMemo(
    () => ({
      transform: "translateY(0%)",
      transition: reducedMotion
        ? undefined
        : `transform ${durationMs}ms ${easing}, opacity ${durationMs}ms ${easing}, filter ${durationMs}ms ${easing}`,
      opacity: 1,
      filter: "blur(0px)",
    }),
    [durationMs, easing, reducedMotion]
  );

  const styleAbove = useMemo(
    () => ({
      transform: "translateY(-100%)",
      transition: reducedMotion
        ? undefined
        : `transform ${durationMs}ms ${easing}, opacity ${durationMs}ms ${easing}, filter ${durationMs}ms ${easing}`,
      opacity: 0,
      filter: "blur(1px)",
    }),
    [durationMs, easing, reducedMotion]
  );

  const styleBelow = useMemo(
    () => ({
      transform: "translateY(100%)",
      transition: reducedMotion
        ? undefined
        : `transform ${durationMs}ms ${easing}, opacity ${durationMs}ms ${easing}, filter ${durationMs}ms ${easing}`,
      opacity: 0.85,
      filter: "blur(0.5px)",
    }),
    [durationMs, easing, reducedMotion]
  );

  // bump animKey when easing/duration change
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [durationMs, easing]);

  return (
    <div
      key={animKey}
      className={[
        "relative inline-block align-baseline",
        "h-[1em] leading-none overflow-hidden select-none",
        className,
      ].join(" ")}
      aria-live="polite"
    >
      {/* Active */}
      <WheelItem className={className} style={styleActive} text={words[idx]} />
      {/* Above */}
      <WheelItem
        className={className + " absolute inset-0"}
        style={styleAbove}
        text={words[prevIdx]}
      />
      {/* Below */}
      <WheelItem
        className={className + " absolute inset-0"}
        style={styleBelow}
        text={words[nextIdx]}
      />
    </div>
  );
}

/** A single text layer */
function WheelItem({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={[
        "block w-max will-change-transform [backface-visibility:hidden]",
        "transition-[transform,opacity,filter]",
        className ?? "",
      ].join(" ")}
      style={style}
    >
      {text}
    </span>
  );
}

/** Respect OS reduce motion */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefers(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return prefers;
}
