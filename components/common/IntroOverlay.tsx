"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const INTRO_STORAGE_KEY = "asi-everest-intro-shown";

// Use useLayoutEffect on client, useEffect on server (SSR safe)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function IntroOverlay() {
  // Start with null to indicate "not yet determined" - this prevents hydration mismatch
  const [showState, setShowState] = useState<"pending" | "visible" | "hidden">(
    "pending"
  );

  // Determine visibility synchronously on first client render
  useIsomorphicLayoutEffect(() => {
    try {
      const hasSeenIntro = window.sessionStorage.getItem(INTRO_STORAGE_KEY);
      if (hasSeenIntro === "true") {
        setShowState("hidden");
      } else {
        setShowState("visible");
      }
    } catch {
      // On storage errors, show the intro
      setShowState("visible");
    }
  }, []);

  // Auto-hide timer
  useEffect(() => {
    if (showState !== "visible") return;

    const timeout = window.setTimeout(() => {
      setShowState("hidden");
      try {
        window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
      } catch {
        // Ignore storage access errors
      }
    }, 2800); // ~2.8s for full intro experience

    return () => window.clearTimeout(timeout);
  }, [showState]);

  // During "pending" state, render a static blocking overlay (no animation yet)
  // This ensures no content is visible during SSR/hydration
  if (showState === "pending") {
    return (
      <div className="fixed inset-0 z-[9999] bg-slate-950" aria-hidden="true" />
    );
  }

  const isVisible = showState === "visible";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated background - larger and more dramatic */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-cyan-500/25 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[80px] animate-pulse" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.3) 1px, transparent 0)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Logo + brand - MUCH LARGER */}
          <motion.div
            className="relative z-10 flex flex-col items-center px-4"
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Glow effect behind logo */}
            <div className="absolute -inset-12 sm:-inset-20 rounded-[40px] bg-cyan-500/15 blur-[60px]" />

            {/* Logo container - much larger with enhanced styling */}
            <div className="relative rounded-3xl bg-slate-900/80 border-2 border-cyan-500/50 shadow-[0_0_80px_rgba(34,211,238,0.5)] px-10 sm:px-16 py-8 sm:py-12 mb-6 sm:mb-8">
              <Image
                src="/image/logo.png"
                alt="ASI EVEREST logo"
                width={500}
                height={200}
                priority
                className="h-32 sm:h-44 md:h-56 lg:h-64 w-auto object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]"
              />
            </div>

            {/* Brand tagline - larger and more prominent */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-lg sm:text-xl md:text-2xl tracking-[0.4em] uppercase text-white font-semibold">
                ASI EVEREST
              </p>
              <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-cyan-400/80">
                Technology Solutions
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

