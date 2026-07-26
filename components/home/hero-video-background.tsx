"use client";

import Image from "next/image";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const POSTER_SRC = "/videos/hero-laser-scan-poster.webp";

// Decorative background video: a close-up of a laser eye scan. Purely
// presentational — aria-hidden, no audio track, pointer-events-none — so it
// never affects the a11y tree or intercepts clicks on the hero content
// stacked above it. The poster image is always rendered (works with no JS
// and covers the moment before the video can play); the <video> itself is
// only mounted when the user hasn't asked for reduced motion.
export function HeroVideoBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src={POSTER_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover"
      />
      {!reducedMotion ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER_SRC}
        >
          <source src="/videos/hero-laser-scan.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
