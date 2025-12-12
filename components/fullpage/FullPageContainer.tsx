"use client";

import React, { ReactNode, useEffect, useCallback, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useFullPage, SectionConfig, FullPageProvider } from "./FullPageContext";
import { useFullPageScroll } from "@/hooks/useFullPageScroll";
import { SectionNavigation } from "./SectionNavigation";

// Spring config for buttery smooth 60fps animations
// Using spring physics instead of duration-based easing for more natural feel
const SPRING_CONFIG = {
  stiffness: 150,    // Increased for faster animation
  damping: 25,       // Increased to reduce oscillation
  mass: 0.5,         // Lower = faster response
  restSpeed: 0.5,    // Increased 50x - animation ends when velocity < 0.5px/s
  restDelta: 0.5,    // Increased 50x - animation ends when < 0.5px from target
};

interface FullPageContainerProps {
  children: ReactNode;
  sections: SectionConfig[];
  className?: string;
  showNavigation?: boolean;
}

function FullPageContainerInner({ children, className = "", showNavigation = true }: Omit<FullPageContainerProps, "sections">) {
  const {
    currentSection,
    totalSections,
    scrollToNext,
    scrollToPrevious,
    scrollToSection,
    isAnimating,
    setIsAnimating,
  } = useFullPage();

  // Use refs for stable values
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  // Get viewport height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Use motion value for GPU-accelerated transform
  // Using pixels instead of vh for better performance (no recalculation)
  const yOffset = useMotionValue(0);

  // Animate to new section when currentSection changes
  useEffect(() => {
    if (viewportHeight === 0) return;

    const targetY = -currentSection * viewportHeight;

    // Use animate for precise control and GPU optimization
    const controls = animate(yOffset, targetY, {
      type: "spring",
      ...SPRING_CONFIG,
      onPlay: () => setIsAnimating(true),
      onComplete: () => setIsAnimating(false),
    });

    return () => controls.stop();
  }, [currentSection, viewportHeight, yOffset, setIsAnimating]);

  // Create stable callbacks for Home/End
  const scrollToFirst = useCallback(() => scrollToSection(0), [scrollToSection]);
  const scrollToLast = useCallback(() => scrollToSection(totalSections - 1), [scrollToSection, totalSections]);

  // Handle scroll events - now includes Home/End handling
  useFullPageScroll({
    onScrollUp: scrollToPrevious,
    onScrollDown: scrollToNext,
    onScrollToFirst: scrollToFirst,
    onScrollToLast: scrollToLast,
    isAnimating,
    enabled: true,
  });

  // Update URL hash on section change
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section-id]");
    if (sections[currentSection]) {
      const sectionId = sections[currentSection].getAttribute("data-section-id");
      if (sectionId) {
        window.history.replaceState(null, "", `#${sectionId}`);
      }
    }
  }, [currentSection]);

  // Handle initial hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const sections = document.querySelectorAll("[data-section-id]");
      sections.forEach((section, index) => {
        if (section.getAttribute("data-section-id") === hash) {
          scrollToSection(index);
        }
      });
    }
  }, [scrollToSection]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, []);

  // Convert children to array
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      <div
        ref={containerRef}
        className={`fullpage-container relative w-full h-screen overflow-hidden ${className}`}
      >
        {/*
          Performance optimizations applied:
          1. Using motion value + spring for GPU-accelerated transforms
          2. Using pixels instead of vh units (no layout recalculation)
          3. Framer Motion automatically uses translate3d for GPU compositing
          4. will-change: transform hints browser to prepare optimization
          5. backface-visibility: hidden prevents paint flicker
        */}
        <motion.div
          style={{
            y: yOffset,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className="will-change-transform"
        >
          {childrenArray.map((child, index) => (
            <div
              key={index}
              className="h-screen w-full"
              style={{
                // Each section also gets GPU optimization
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>
      {showNavigation && <SectionNavigation />}
    </>
  );
}

export function FullPageContainer({ children, sections, className = "", showNavigation = true }: FullPageContainerProps) {
  return (
    <FullPageProvider initialSections={sections}>
      <FullPageContainerInner className={className} showNavigation={showNavigation}>
        {children}
      </FullPageContainerInner>
    </FullPageProvider>
  );
}

export default FullPageContainer;
