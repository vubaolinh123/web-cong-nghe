"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface FullPageSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  backgroundColor?: string;
}

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
};

export function FullPageSection({
  children,
  id,
  className = "",
  backgroundColor,
}: FullPageSectionProps) {
  return (
    <motion.section
      data-section-id={id}
      className={`fullpage-section w-full h-screen overflow-y-auto overflow-x-hidden ${className}`}
      style={{ backgroundColor }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.section>
  );
}

export default FullPageSection;
