"use client";

import React, { ReactNode, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFullPage, SectionConfig, FullPageProvider } from "./FullPageContext";
import { useFullPageScroll } from "@/hooks/useFullPageScroll";
import { SectionNavigation } from "./SectionNavigation";

const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1.0] as const,
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

  // Handle scroll events
  useFullPageScroll({
    onScrollUp: scrollToPrevious,
    onScrollDown: scrollToNext,
    isAnimating,
    enabled: true,
  });

  // Handle Home and End keys
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isAnimating) return;

      if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection(totalSections - 1);
      }
    },
    [isAnimating, scrollToSection, totalSections]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

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
      <div className={`fullpage-container relative w-full h-screen overflow-hidden ${className}`}>
        <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={currentSection}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: ANIMATION_CONFIG.duration,
              ease: ANIMATION_CONFIG.ease,
            }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
            className="absolute inset-0 w-full h-full"
          >
            {childrenArray[currentSection]}
          </motion.div>
        </AnimatePresence>
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
