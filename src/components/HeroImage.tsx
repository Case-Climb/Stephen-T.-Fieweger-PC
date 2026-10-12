"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** Background image with a subtle scroll parallax and a navy gradient overlay. */
export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden={alt ? undefined : true}>
      <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0">
        <Image
          src={`/images/${src}.webp`}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/75 to-navy/60" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-deep/80 to-transparent" />
    </div>
  );
}
