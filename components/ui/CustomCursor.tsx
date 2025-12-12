"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

// Trail particle interface
interface TrailParticle {
  id: string; // Changed to string for unique ID
  x: number;
  y: number;
}

const TRAIL_LENGTH = 8; // Number of trail particles
const TRAIL_DELAY = 30; // Delay between trail updates (ms)

// Generate unique ID using timestamp + random
const generateUniqueId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [trail, setTrail] = useState<TrailParticle[]>([]);
  const isMountedRef = useRef(false);
  const lastTrailTimeRef = useRef(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring config for smooth cursor following
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Memoized trail update function
  const addTrailParticle = useCallback((x: number, y: number) => {
    setTrail(prev => {
      const newTrail = [
        ...prev,
        { id: generateUniqueId(), x, y }
      ];
      // Keep only last TRAIL_LENGTH particles
      return newTrail.slice(-TRAIL_LENGTH);
    });
  }, []);

  useEffect(() => {
    isMountedRef.current = true;

    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible && isMountedRef.current) {
        setIsVisible(true);
      }

      // Add trail particle with throttling
      const now = Date.now();
      if (now - lastTrailTimeRef.current > TRAIL_DELAY) {
        lastTrailTimeRef.current = now;
        addTrailParticle(e.clientX, e.clientY);
      }
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
      setTrail([]);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseEnter, { passive: true });
    document.addEventListener("mouseout", handleMouseLeave, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseOut);

    return () => {
      isMountedRef.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.documentElement.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render on touch devices or when not visible
  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Trail particles */}
      {trail.map((particle, index) => {
        const progress = (index + 1) / TRAIL_LENGTH;
        const size = 4 + progress * 6; // Size from 4px to 10px
        const opacity = 0.1 + progress * 0.3; // Opacity from 0.1 to 0.4

        return (
          <motion.div
            key={particle.id}
            className="fixed top-0 left-0 pointer-events-none z-[10001] rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: opacity,
              scale: 1
            }}
            animate={{
              opacity: 0,
              scale: 0.5
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              width: size,
              height: size,
              translateX: "-50%",
              translateY: "-50%",
              background: `radial-gradient(circle, rgba(34, 211, 238, ${opacity}) 0%, transparent 70%)`,
            }}
            aria-hidden="true"
          />
        );
      })}

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

      {/* Inner dot - follows cursor directly, BIGGER */}
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

      {/* Tech ring effect when hovering */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10000]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
          aria-hidden="true"
        >
          <motion.div
            className="rounded-full border-2 border-cyan-400/60"
            initial={{ width: 20, height: 20, opacity: 0 }}
            animate={{ width: 70, height: 70, opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </>
  );
}
