"use client";

import { useRef } from "react";
import { usePointerLighting } from "@/lib/use-pointer-lighting";
import { useReducedMotion } from "@/lib/use-reduced-motion";

// A decorative, original optical-glass interpretation of the PVL infinity
// mark — translucent lobes with fine refraction contours, not a literal eye
// or a reproduction of any existing logo artwork. Purely presentational:
// aria-hidden and pointer-events-none so it never affects the a11y tree or
// intercepts clicks on the hero content stacked above it.
export function CinematicHeroLayer() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  usePointerLighting(rootRef, !reducedMotion);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pvl-cinematic-hero pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="pvl-cinematic-accent" />
      <div className="pvl-cinematic-key" />

      <div className="pvl-cinematic-object">
        <svg
          viewBox="0 0 1000 700"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          focusable="false"
        >
          <defs>
            <linearGradient id="pvlEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-gold-light)" />
              <stop offset="38%" stopColor="var(--pvl-accent-cyan)" stopOpacity="0.85" />
              <stop offset="62%" stopColor="var(--color-gold)" />
              <stop offset="100%" stopColor="var(--pvl-accent-violet)" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="pvlGlassFill" cx="50%" cy="42%" r="65%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <filter id="pvlSoftBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <mask id="pvlInfinityMask">
              <rect x="0" y="0" width="1000" height="700" fill="black" />
              <g transform="translate(500 350)">
                <ellipse cx="-135" cy="0" rx="205" ry="130" fill="none" stroke="white" strokeWidth="30" />
                <ellipse cx="135" cy="0" rx="205" ry="130" fill="none" stroke="white" strokeWidth="30" />
              </g>
            </mask>
          </defs>

          <g transform="translate(500 350)">
            {/* Outer glass lobes — soft blurred edge for a frosted-glass feel */}
            <ellipse
              cx="-135"
              cy="0"
              rx="205"
              ry="130"
              fill="url(#pvlGlassFill)"
              stroke="url(#pvlEdgeGrad)"
              strokeOpacity="0.55"
              strokeWidth="22"
              filter="url(#pvlSoftBlur)"
            />
            <ellipse
              cx="135"
              cy="0"
              rx="205"
              ry="130"
              fill="url(#pvlGlassFill)"
              stroke="url(#pvlEdgeGrad)"
              strokeOpacity="0.55"
              strokeWidth="22"
              filter="url(#pvlSoftBlur)"
            />

            {/* Crisp inner edge */}
            <ellipse cx="-135" cy="0" rx="205" ry="130" fill="none" stroke="url(#pvlEdgeGrad)" strokeOpacity="0.75" strokeWidth="2" />
            <ellipse cx="135" cy="0" rx="205" ry="130" fill="none" stroke="url(#pvlEdgeGrad)" strokeOpacity="0.75" strokeWidth="2" />

            {/* Fine refraction contours — concentric facets, not iris striations */}
            <ellipse cx="-135" cy="0" rx="160" ry="100" fill="none" stroke="var(--color-cream)" strokeOpacity="0.14" strokeWidth="1" />
            <ellipse cx="-135" cy="0" rx="115" ry="70" fill="none" stroke="var(--color-cream)" strokeOpacity="0.1" strokeWidth="1" />
            <ellipse cx="135" cy="0" rx="160" ry="100" fill="none" stroke="var(--color-cream)" strokeOpacity="0.14" strokeWidth="1" />
            <ellipse cx="135" cy="0" rx="115" ry="70" fill="none" stroke="var(--color-cream)" strokeOpacity="0.1" strokeWidth="1" />

            {/* Tangent refraction lines crossing the join, like light through cut glass */}
            <line x1="-40" y1="-90" x2="40" y2="90" stroke="var(--pvl-accent-cyan)" strokeOpacity="0.25" strokeWidth="1.4" />
            <line x1="-15" y1="-95" x2="15" y2="95" stroke="var(--color-cream)" strokeOpacity="0.16" strokeWidth="1" />
            <line x1="40" y1="-90" x2="-40" y2="90" stroke="var(--pvl-accent-violet)" strokeOpacity="0.22" strokeWidth="1.4" />

            {/* Centre join highlight */}
            <circle cx="0" cy="0" r="14" fill="none" stroke="url(#pvlEdgeGrad)" strokeOpacity="0.6" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      <div className="pvl-cinematic-sheen" />
    </div>
  );
}
