"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Ultra-lightweight custom cursor — pure CSS transitions, ZERO framer-motion.
 *
 * - Position updated via CSS custom properties (--cx, --cy) on the wrapper div.
 * - Smooth follow via CSS `transition: transform` (GPU-composited).
 * - No useSpring, no useMotionValue, no React re-render on mousemove.
 * - Hover detection via a single `mouseover` listener with event delegation.
 */
export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);

  const updatePosition = useCallback((x: number, y: number) => {
    // Direct DOM manipulation — no React re-render
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (dot) dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    if (ring) ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  }, []);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        const wrapper = wrapperRef.current;
        if (wrapper) wrapper.style.opacity = "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.matches('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
        ringRef.current?.classList.add("cursor-hover");
        dotRef.current?.classList.add("cursor-hover");
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.matches('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
        ringRef.current?.classList.remove("cursor-hover");
        dotRef.current?.classList.remove("cursor-hover");
      }
    };

    const onLeave = () => {
      visibleRef.current = false;
      const wrapper = wrapperRef.current;
      if (wrapper) wrapper.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [updatePosition]);

  if (isTouch) return null;

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed inset-0 z-[10002] opacity-0"
      style={{ transition: "opacity 0.2s" }}
      aria-hidden="true"
    >
      {/* Outer glow ring */}
      <div
        ref={ringRef}
        className="custom-cursor-ring absolute top-0 left-0 w-12 h-12 rounded-full border border-cyan-400/50"
        style={{
          transition: "transform 0.12s cubic-bezier(0.22,1,0.36,1), width 0.2s, height 0.2s, border-color 0.2s",
          willChange: "transform",
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot absolute top-0 left-0 w-3 h-3 rounded-full bg-cyan-400"
        style={{
          transition: "transform 0.04s linear, opacity 0.15s",
          willChange: "transform",
        }}
      />

      {/* Hover state via CSS class */}
      <style jsx>{`
        .custom-cursor-ring.cursor-hover {
          width: 3.5rem;
          height: 3.5rem;
          border-color: rgba(34, 211, 238, 0.8);
        }
        .custom-cursor-dot.cursor-hover {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
