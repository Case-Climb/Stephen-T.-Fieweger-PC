"use client";

import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-triggered fade-up (once). Content is rendered visible on the server, so it
 * never depends on JavaScript to appear; on the client, elements that start below the
 * fold are hidden and then faded up as they scroll into view. Skipped entirely for
 * visitors who prefer reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const controls = useAnimationControls();
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reduce || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight) {
      controls.set({ opacity: 0, y: 28 });
      setArmed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (armed && inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay } });
    }
  }, [armed, inView, controls, delay]);

  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp ref={ref as React.Ref<HTMLDivElement>} animate={controls} className={className}>
      {children}
    </Comp>
  );
}
