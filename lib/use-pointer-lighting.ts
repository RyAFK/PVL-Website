"use client";

import { useEffect } from "react";

// Resting composition — matches the default custom-property values declared
// on .pvl-cinematic-hero in globals.css.
const REST = { kx: 42, ky: 38, ax: 66, ay: 62, rx: 0, ry: 0 };

interface LightingTarget {
  kx: number;
  ky: number;
  ax: number;
  ay: number;
  rx: number;
  ry: number;
}

/**
 * Drives the cinematic hero's CSS custom properties directly via ref writes
 * (no React state) so pointer movement never triggers a re-render. Pauses
 * itself whenever the hero is out of view or the tab is hidden.
 */
export function usePointerLighting(
  rootRef: React.RefObject<HTMLElement | null>,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    if (!root) return;

    const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)");

    let visible = false;
    let tabHidden = document.hidden;
    let pointerActive = false;
    let pointerX = 0.5;
    let pointerY = 0.5;
    let scrollProgress = 0;
    let rafId = 0;
    const startedAt = performance.now();
    const current: LightingTarget = { ...REST };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) schedule();
      },
      { threshold: 0 }
    );
    observer.observe(root);

    function onVisibilityChange() {
      tabHidden = document.hidden;
      if (!tabHidden) schedule();
    }

    function onPointerMove(event: PointerEvent) {
      if (!hoverCapable.matches) return;
      const rect = root!.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!inside) {
        pointerActive = false;
        return;
      }
      pointerActive = true;
      pointerX = (event.clientX - rect.left) / rect.width;
      pointerY = (event.clientY - rect.top) / rect.height;
    }

    function onPointerOut() {
      pointerActive = false;
    }

    function onScroll() {
      const rect = root!.getBoundingClientRect();
      const span = rect.height || window.innerHeight;
      scrollProgress = Math.min(1, Math.max(0, -rect.top / span));
    }

    function schedule() {
      if (rafId || tabHidden || !visible) return;
      rafId = requestAnimationFrame(frame);
    }

    function frame(now: number) {
      rafId = 0;
      if (tabHidden || !visible) return;

      let target: LightingTarget;
      if (pointerActive) {
        const nx = pointerX * 2 - 1;
        const ny = pointerY * 2 - 1;
        target = {
          kx: 50 + nx * 22,
          ky: 46 + ny * 20,
          ax: 50 - nx * 14,
          ay: 54 - ny * 12,
          ry: nx * 5,
          rx: -ny * 4,
        };
      } else if (!hoverCapable.matches) {
        const t = (now - startedAt) / 1000;
        target = {
          kx: 50 + Math.sin(t * 0.18) * 16,
          ky: 44 + Math.cos(t * 0.13) * 12,
          ax: 50 + Math.cos(t * 0.1) * 20,
          ay: 56 + Math.sin(t * 0.09) * 14,
          rx: 0,
          ry: 0,
        };
      } else {
        target = REST;
      }

      const ease = 0.06;
      (Object.keys(current) as (keyof LightingTarget)[]).forEach((key) => {
        current[key] += (target[key] - current[key]) * ease;
      });

      const intensity = 1 - scrollProgress * 0.45;
      root!.style.setProperty("--pvl-kx", `${current.kx}%`);
      root!.style.setProperty("--pvl-ky", `${current.ky}%`);
      root!.style.setProperty("--pvl-ax", `${current.ax}%`);
      root!.style.setProperty("--pvl-ay", `${current.ay}%`);
      root!.style.setProperty("--pvl-rx", `${current.rx}deg`);
      root!.style.setProperty("--pvl-ry", `${current.ry}deg`);
      root!.style.setProperty("--pvl-intensity", `${intensity}`);

      schedule();
    }

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    schedule();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [rootRef, enabled]);
}
