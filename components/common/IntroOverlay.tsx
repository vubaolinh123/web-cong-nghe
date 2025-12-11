"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

export default function IntroOverlay() {
  // Always show intro on page load/refresh
  const [isVisible, setIsVisible] = useState(true);

  // Handle completion of intro animation
  const handleComplete = useCallback(() => {
    setIsVisible(false);
  }, []);

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
            autoAdvanceInterval={180}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
