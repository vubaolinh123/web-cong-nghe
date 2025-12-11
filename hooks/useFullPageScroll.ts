"use client";

import { useCallback, useRef, useEffect } from "react";

interface UseFullPageScrollOptions {
  onScrollUp: () => void;
  onScrollDown: () => void;
  isAnimating: boolean;
  enabled?: boolean;
}

const SCROLL_CONFIG = {
  wheelThreshold: 50,
  debounceTime: 800,
  touchThreshold: 50,
};

export function useFullPageScroll({
  onScrollUp,
  onScrollDown,
  isAnimating,
  enabled = true,
}: UseFullPageScrollOptions) {
  const lastScrollTime = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const accumulatedDelta = useRef<number>(0);

  // Handle wheel events
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!enabled || isAnimating) return;

      e.preventDefault();

      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;

      // Accumulate delta for smoother detection
      accumulatedDelta.current += e.deltaY;

      // Check if enough time has passed and delta threshold is met
      if (timeSinceLastScroll < SCROLL_CONFIG.debounceTime) {
        return;
      }

      if (Math.abs(accumulatedDelta.current) >= SCROLL_CONFIG.wheelThreshold) {
        if (accumulatedDelta.current > 0) {
          onScrollDown();
        } else {
          onScrollUp();
        }
        lastScrollTime.current = now;
        accumulatedDelta.current = 0;
      }
    },
    [enabled, isAnimating, onScrollDown, onScrollUp]
  );

  // Handle touch start
  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!enabled) return;
      touchStartY.current = e.touches[0].clientY;
    },
    [enabled]
  );

  // Handle touch end
  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!enabled || isAnimating) return;

      touchEndY.current = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY.current;

      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;

      if (timeSinceLastScroll < SCROLL_CONFIG.debounceTime) {
        return;
      }

      if (Math.abs(deltaY) >= SCROLL_CONFIG.touchThreshold) {
        if (deltaY > 0) {
          onScrollDown();
        } else {
          onScrollUp();
        }
        lastScrollTime.current = now;
      }
    },
    [enabled, isAnimating, onScrollDown, onScrollUp]
  );

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!enabled || isAnimating) return;

      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;

      if (timeSinceLastScroll < SCROLL_CONFIG.debounceTime) {
        return;
      }

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
        case " ": // Space bar
          e.preventDefault();
          onScrollDown();
          lastScrollTime.current = now;
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          onScrollUp();
          lastScrollTime.current = now;
          break;
        case "Home":
          e.preventDefault();
          // Will be handled by parent component
          break;
        case "End":
          e.preventDefault();
          // Will be handled by parent component
          break;
      }
    },
    [enabled, isAnimating, onScrollDown, onScrollUp]
  );

  // Setup event listeners
  useEffect(() => {
    if (!enabled) return;

    // Add wheel listener with passive: false to allow preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

  return {
    resetAccumulatedDelta: () => {
      accumulatedDelta.current = 0;
    },
  };
}

export default useFullPageScroll;
