"use client";

import React, { Suspense, lazy, useRef, useState, useEffect, useCallback } from "react";
import type { Application } from "@splinetool/runtime";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
  enableMouseTracking?: boolean;
}

export function SplineScene({ scene, className, enableMouseTracking = false }: SplineSceneProps) {
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

  // Optimized mouse tracking for robot eye following - full screen tracking
  useEffect(() => {
    if (!enableMouseTracking || !hasLoaded || !splineRef.current || !isVisible) return;

    let animationFrameId: number | null = null;
    let cachedRect: DOMRect | null = null;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isTracking = false;

    // Cache the container rect and update on resize
    const updateRect = () => {
      if (containerRef.current) {
        cachedRect = containerRef.current.getBoundingClientRect();
      }
    };
    updateRect();

    // Update Spline variables using requestAnimationFrame for smooth rendering
    const updateSpline = () => {
      if (!splineRef.current || !cachedRect) return;

      try {
        // Calculate position relative to container center
        // This allows tracking even when mouse is outside the container
        const centerX = cachedRect.left + cachedRect.width / 2;
        const centerY = cachedRect.top + cachedRect.height / 2;

        // Calculate direction vector from container center to mouse
        // Use full window dimensions for normalization to allow extended range
        const normalizedX = (lastMouseX - centerX) / (window.innerWidth / 2);
        const normalizedY = -((lastMouseY - centerY) / (window.innerHeight / 2)); // Invert Y

        // Clamp values to prevent extreme rotations but allow extended range
        const clampedX = Math.max(-2, Math.min(2, normalizedX));
        const clampedY = Math.max(-2, Math.min(2, normalizedY));

        // Set variables in Spline scene
        splineRef.current.setVariable?.('mouseX', clampedX);
        splineRef.current.setVariable?.('mouseY', clampedY);
      } catch {
        // Ignore errors from Spline interaction
      }

      isTracking = false;
    };

    // Mouse move handler with requestAnimationFrame throttling
    const handleMouseMove = (e: MouseEvent) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      // Only schedule animation frame if not already pending
      if (!isTracking) {
        isTracking = true;
        animationFrameId = requestAnimationFrame(updateSpline);
      }
    };

    // Handle window resize to update cached rect
    const handleResize = () => {
      updateRect();
    };

    // Add event listeners with passive flag for performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [enableMouseTracking, hasLoaded, isVisible]);

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

