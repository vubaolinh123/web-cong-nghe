"use client";

import React, { Suspense, lazy, useRef, useState, useEffect, useCallback } from "react";
import type { Application } from "@splinetool/runtime";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<Application | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Handle Spline load event
  const handleLoad = useCallback((splineApp: Application) => {
    splineRef.current = splineApp;
    setHasLoaded(true);
  }, []);

  // Intersection Observer to pause/resume Spline when not visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% is visible
        rootMargin: "50px", // Small buffer
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Pause/Resume Spline based on visibility
  useEffect(() => {
    if (!hasLoaded || !splineRef.current) return;

    try {
      if (isVisible) {
        // Resume rendering - Spline auto-resumes when visible
        splineRef.current.play?.();
      } else {
        // Pause rendering to save GPU resources
        splineRef.current.stop?.();
      }
    } catch {
      // Spline API may not support play/stop, ignore errors
    }
  }, [isVisible, hasLoaded]);

  return (
    <div ref={containerRef} className={`relative h-full w-full ${className || ""}`}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        {/* Spline container with full height */}
        <div
          className="w-full h-full"
          style={{ visibility: isVisible ? "visible" : "hidden" }}
        >
          <Spline scene={scene} onLoad={handleLoad} className="w-full h-full" />
        </div>
      </Suspense>
    </div>
  );
}
