"use client";

import React, { ReactNode } from "react";

interface FullPageSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  backgroundColor?: string;
}

export function FullPageSection({
  children,
  id,
  className = "",
  backgroundColor,
}: FullPageSectionProps) {
  return (
    <section
      data-section-id={id}
      className={`fullpage-section w-full h-screen overflow-y-auto overflow-x-hidden ${className}`}
      style={{ backgroundColor }}
    >
      {children}
    </section>
  );
}

export default FullPageSection;
