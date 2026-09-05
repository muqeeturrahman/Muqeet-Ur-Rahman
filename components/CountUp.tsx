"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Extracts a numeric portion from a string like "40%", "10k+", "5+" and animates it.
 * Non-numeric prefix/suffix is preserved.
 */
export default function CountUp({
  value,
  duration = 1400,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState<string>(() => {
    return value.replace(/\d+(\.\d+)?/, "0");
  });

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/(-?\d+(?:\.\d+)?)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[1]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[1].length);
    const start = performance.now();
    let raf = 0;
    const decimals = match[1].includes(".") ? 1 : 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = target * eased;
      setDisplay(`${prefix}${cur.toFixed(decimals)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
