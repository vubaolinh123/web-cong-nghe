"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface SectionConfig {
  id: string;
  label: string;
}

interface FullPageContextType {
  currentSection: number;
  totalSections: number;
  sections: SectionConfig[];
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
  scrollToSection: (index: number) => void;
  scrollToNext: () => void;
  scrollToPrevious: () => void;
  setSections: (sections: SectionConfig[]) => void;
}

const FullPageContext = createContext<FullPageContextType | null>(null);

interface FullPageProviderProps {
  children: ReactNode;
  initialSections?: SectionConfig[];
}

export function FullPageProvider({ children, initialSections = [] }: FullPageProviderProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState<SectionConfig[]>(initialSections);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSections = sections.length;

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= totalSections || isAnimating) return;
    setCurrentSection(index);
  }, [totalSections, isAnimating]);

  const scrollToNext = useCallback(() => {
    if (currentSection < totalSections - 1 && !isAnimating) {
      setCurrentSection(prev => prev + 1);
    }
  }, [currentSection, totalSections, isAnimating]);

  const scrollToPrevious = useCallback(() => {
    if (currentSection > 0 && !isAnimating) {
      setCurrentSection(prev => prev - 1);
    }
  }, [currentSection, isAnimating]);

  const value: FullPageContextType = {
    currentSection,
    totalSections,
    sections,
    isAnimating,
    setIsAnimating,
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
    setSections,
  };

  return (
    <FullPageContext.Provider value={value}>
      {children}
    </FullPageContext.Provider>
  );
}

export function useFullPage() {
  const context = useContext(FullPageContext);
  if (!context) {
    throw new Error("useFullPage must be used within a FullPageProvider");
  }
  return context;
}

export default FullPageContext;
