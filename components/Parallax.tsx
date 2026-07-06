"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mounts once (in the layout) and wires up two effects, re-scanning the DOM on
 * every route change:
 *   - [data-parallax]  → element translates on scroll (value = speed, e.g. 0.15)
 *   - [data-magnetic]  → element drifts toward the cursor on hover (value = strength)
 * Both are skipped when the user prefers reduced motion.
 */
export function Parallax() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches
    ) {
      return;
    }

    // ---- Scroll parallax ----
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    let ticking = false;
    const applyParallax = () => {
      const y = window.scrollY;
      for (const el of parallaxEls) {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        el.style.transform = `translate3d(0, ${(y * speed).toFixed(2)}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(applyParallax);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    applyParallax();

    // ---- Magnetic buttons ----
    const cleanups: Array<() => void> = [];
    const magneticEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]")
    );
    for (const el of magneticEls) {
      const strength = parseFloat(el.dataset.magnetic || "0.3");
      el.style.transition = "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.willChange = "transform";
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      };
      const onLeave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      cleanups.forEach((c) => c());
    };
  }, [pathname]);

  return null;
}
