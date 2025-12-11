"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFullPage } from "./FullPageContext";

interface SectionNavigationProps {
  className?: string;
}

export function SectionNavigation({ className = "" }: SectionNavigationProps) {
  const { currentSection, totalSections, sections, scrollToSection, isAnimating } = useFullPage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 ${className}`}
      aria-label="Section navigation"
    >
      <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 shadow-lg">
        {sections.map((section, index) => (
          <div key={section.id} className="relative">
            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 whitespace-nowrap text-sm text-slate-200 shadow-xl"
                >
                  {section.label}
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                    <div className="w-2 h-2 bg-slate-800 border-r border-b border-slate-700 rotate-45 transform -translate-y-1/2" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dot Button */}
            <motion.button
              onClick={() => !isAnimating && scrollToSection(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              disabled={isAnimating}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                isAnimating ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to ${section.label}`}
              aria-current={currentSection === index ? "true" : "false"}
            >
              {/* Background */}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  currentSection === index
                    ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />

              {/* Active ring */}
              {currentSection === index && (
                <motion.span
                  layoutId="activeRing"
                  className="absolute -inset-1 rounded-full border-2 border-cyan-400/50"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          </div>
        ))}

        {/* Section counter */}
        <div className="ml-3 pl-3 border-l border-slate-700">
          <span className="text-sm font-medium">
            <span className="text-cyan-400">{String(currentSection + 1).padStart(2, "0")}</span>
            <span className="text-slate-500"> / {String(totalSections).padStart(2, "0")}</span>
          </span>
        </div>
      </div>
    </motion.nav>
  );
}

export default SectionNavigation;
