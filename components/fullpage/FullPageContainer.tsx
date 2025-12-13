"use client";

import React, { ReactNode, useEffect, useCallback, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useFullPage, SectionConfig, FullPageProvider } from "./FullPageContext";
import { useFullPageScroll } from "@/hooks/useFullPageScroll";
import { SectionNavigation } from "./SectionNavigation";
import { useIsMobile } from "@/hooks/useIsMobile";

// Spring config optimized for smooth 60fps animations with fast completion
// Higher damping + restSpeed/restDelta = animation ends faster after scroll
const SPRING_CONFIG = {
  stiffness: 200,    // Higher = faster snap to target
  damping: 40,       // Higher = less oscillation, faster settle
  mass: 0.3,         // Lower = more responsive
  restSpeed: 5,      // Animation ends when velocity < 5px/s (was 0.5)
  restDelta: 5,      // Animation ends when < 5px from target (was 0.5)
};

interface FullPageContainerProps {
  children: ReactNode;
  sections: SectionConfig[];
  className?: string;
  showNavigation?: boolean;
}

// Mobile-friendly container - normal scroll behavior
function MobileFullPageContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mobile-fullpage-container w-full ${className}`}>
      {children}
    </div>
  );
}

function FullPageContainerInner({ children, className = "", showNavigation = true }: Omit<FullPageContainerProps, "sections">) {
  const { isDesktop } = useIsMobile();
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

  // Animate to new section when currentSection changes (desktop only)
  useEffect(() => {
    if (!isDesktop || viewportHeight === 0) return;

    const targetY = -currentSection * viewportHeight;

    // Use animate for precise control and GPU optimization
    const controls = animate(yOffset, targetY, {
      type: "spring",
      ...SPRING_CONFIG,
      onPlay: () => setIsAnimating(true),
      onComplete: () => setIsAnimating(false),
    });

    return () => controls.stop();
  }, [currentSection, viewportHeight, yOffset, setIsAnimating, isDesktop]);

  // Create stable callbacks for Home/End
  const scrollToFirst = useCallback(() => scrollToSection(0), [scrollToSection]);
  const scrollToLast = useCallback(() => scrollToSection(totalSections - 1), [scrollToSection, totalSections]);

  // Handle scroll events - disabled on mobile
  useFullPageScroll({
    onScrollUp: scrollToPrevious,
    onScrollDown: scrollToNext,
    onScrollToFirst: scrollToFirst,
    onScrollToLast: scrollToLast,
    isAnimating,
    enabled: isDesktop, // Only enable on desktop
  });

  // Update URL hash on section change (desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const sections = document.querySelectorAll("[data-section-id]");
    if (sections[currentSection]) {
      const sectionId = sections[currentSection].getAttribute("data-section-id");
      if (sectionId) {
        window.history.replaceState(null, "", `#${sectionId}`);
      }
    }
  }, [currentSection, isDesktop]);

  // Handle initial hash on mount (desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const hash = window.location.hash.slice(1);
    if (hash) {
      const sections = document.querySelectorAll("[data-section-id]");
      sections.forEach((section, index) => {
        if (section.getAttribute("data-section-id") === hash) {
          scrollToSection(index);
        }
      });
    }
  }, [scrollToSection, isDesktop]);

  // Lock body scroll (desktop only)
  useEffect(() => {
    if (!isDesktop) {
      // Enable normal scroll on mobile/tablet
      document.body.style.overflow = "";
      document.body.style.height = "";
      return;
    }

    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isDesktop]);

  // Convert children to array
  const childrenArray = React.Children.toArray(children);

  // Mobile/Tablet: Render normal scrollable layout
  if (!isDesktop) {
    return (
      <MobileFullPageContainer className={className}>
        {childrenArray.map((child, index) => (
          <div key={index} className="mobile-section w-full">
            {child}
          </div>
        ))}
      </MobileFullPageContainer>
    );
  }

  // Desktop: Render fullpage slide scroll
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

