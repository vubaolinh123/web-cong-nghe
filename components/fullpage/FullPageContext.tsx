"use client";

import React, { createContext, useContext, useState, useCallback, useRef, useEffect, ReactNode } from "react";

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

  // Use ref to avoid recreating callbacks when isAnimating changes
  const isAnimatingRef = useRef(false);
  const sectionsRef = useRef(initialSections);

  // Sync refs with state
  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  useEffect(() => {
    sectionsRef.current = sections;
  }, [sections]);

  const totalSections = sections.length;

  const scrollToSection = useCallback((index: number) => {
    const total = sectionsRef.current.length;
    if (index < 0 || index >= total || isAnimatingRef.current) return;
    setCurrentSection(index);
  }, []); // Stable - no dependencies that change

  const scrollToNext = useCallback(() => {
    setCurrentSection(prev => {
      const total = sectionsRef.current.length;
      if (prev < total - 1 && !isAnimatingRef.current) {
        return prev + 1;
      }
      return prev;
    });
  }, []); // Stable - no dependencies that change

  const scrollToPrevious = useCallback(() => {
    setCurrentSection(prev => {
      if (prev > 0 && !isAnimatingRef.current) {
        return prev - 1;
      }
      return prev;
    });
  }, []); // Stable - no dependencies that change

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
