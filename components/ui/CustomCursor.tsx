"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Ref-based visibility flag avoids stale-closure issue that caused
  // setIsVisible(true) to fire on EVERY mousemove event.
  const isVisibleRef = useRef(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring config for smooth cursor following
  const springConfig = { damping: 28, stiffness: 280, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Don't render custom cursor on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      // Only trigger a React re-render the very first time the cursor appears
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches(
          'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
        )
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches(
          'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
        )
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsVisible(false);
      isVisibleRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseEnter, { passive: true });
    document.addEventListener("mouseout", handleMouseLeave, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.documentElement.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices or before cursor enters the viewport
  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer glow ring — spring-follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10002]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        aria-hidden="true"
      >
        <motion.div
          className="rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
          }}
          animate={{
            width: isHovering ? 90 : 56,
            height: isHovering ? 90 : 56,
            opacity: isHovering ? 0.9 : 0.7,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Inner dot — follows cursor directly (no spring lag) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10003]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        aria-hidden="true"
      >
        <motion.div
          className="rounded-full bg-cyan-400"
          animate={{
            width: isHovering ? 0 : 12,
            height: isHovering ? 0 : 12,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          style={{
            boxShadow:
              "0 0 15px rgba(34, 211, 238, 0.9), 0 0 30px rgba(34, 211, 238, 0.5)",
          }}
        />
      </motion.div>
    </>
  );
}
