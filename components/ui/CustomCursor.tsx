"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring config for smooth cursor following
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsVisible(false);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Don't render on touch devices or when not visible
  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer glow ring - follows with spring */}
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
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
          }}
          animate={{
            width: isHovering ? 90 : 56,
            height: isHovering ? 90 : 56,
            opacity: isHovering ? 0.9 : 0.7,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Inner dot - follows cursor directly */}
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
            boxShadow: "0 0 15px rgba(34, 211, 238, 0.9), 0 0 30px rgba(34, 211, 238, 0.5), 0 0 45px rgba(34, 211, 238, 0.3)",
          }}
        />
      </motion.div>
    </>
  );
}
