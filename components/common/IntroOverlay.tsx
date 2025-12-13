"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function IntroOverlay() {
  const { isDesktop } = useIsMobile();
  // Always show intro on page load/refresh (only on desktop)
  const [isVisible, setIsVisible] = useState(true);

  // Handle completion of intro animation
  const handleComplete = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Skip intro animation on mobile and tablet for better performance
  if (!isDesktop) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ParticleTextEffect
            words={["HELLO", "WE", "ARE", "ASI EVEREST"]}
            showLogoAtEnd={true}
            logoSrc="/image/logo.png"
            onComplete={handleComplete}
            autoAdvanceInterval={150}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

