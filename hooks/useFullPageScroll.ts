"use client";

import { useCallback, useRef, useEffect } from "react";

interface UseFullPageScrollOptions {
  onScrollUp: () => void;
  onScrollDown: () => void;
  onScrollToFirst?: () => void;
  onScrollToLast?: () => void;
  isAnimating: boolean;
  enabled?: boolean;
}

const SCROLL_CONFIG = {
  wheelThreshold: 50,
  debounceTime: 400,  // Reduced from 800ms for faster consecutive scrolls
  touchThreshold: 50,
};

export function useFullPageScroll({
  onScrollUp,
  onScrollDown,
  onScrollToFirst,
  onScrollToLast,
  isAnimating,
  enabled = true,
}: UseFullPageScrollOptions) {
  const lastScrollTime = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const accumulatedDelta = useRef<number>(0);

  // Use refs for callbacks to avoid recreating event handlers
  const onScrollUpRef = useRef(onScrollUp);
  const onScrollDownRef = useRef(onScrollDown);
  const onScrollToFirstRef = useRef(onScrollToFirst);
  const onScrollToLastRef = useRef(onScrollToLast);
  const isAnimatingRef = useRef(isAnimating);
  const enabledRef = useRef(enabled);

  // Sync refs with latest values
  useEffect(() => {
    onScrollUpRef.current = onScrollUp;
    onScrollDownRef.current = onScrollDown;
    onScrollToFirstRef.current = onScrollToFirst;
    onScrollToLastRef.current = onScrollToLast;
    isAnimatingRef.current = isAnimating;
    enabledRef.current = enabled;
  });

  // Stable wheel handler - no dependencies that change
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!enabledRef.current || isAnimatingRef.current) return;

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
        onScrollDownRef.current();
      } else {
        onScrollUpRef.current();
      }
      lastScrollTime.current = now;
      accumulatedDelta.current = 0;
    }
  }, []); // Stable - uses refs

  // Stable touch start handler
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!enabledRef.current) return;
    touchStartY.current = e.touches[0].clientY;
  }, []); // Stable - uses refs

  // Stable touch end handler
  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!enabledRef.current || isAnimatingRef.current) return;

    touchEndY.current = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY.current;

    const now = Date.now();
    const timeSinceLastScroll = now - lastScrollTime.current;

    if (timeSinceLastScroll < SCROLL_CONFIG.debounceTime) {
      return;
    }

    if (Math.abs(deltaY) >= SCROLL_CONFIG.touchThreshold) {
      if (deltaY > 0) {
        onScrollDownRef.current();
      } else {
        onScrollUpRef.current();
      }
      lastScrollTime.current = now;
    }
  }, []); // Stable - uses refs

  // Stable keyboard handler with Home/End support
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enabledRef.current || isAnimatingRef.current) return;

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
        onScrollDownRef.current();
        lastScrollTime.current = now;
        break;
      case "ArrowUp":
      case "PageUp":
        e.preventDefault();
        onScrollUpRef.current();
        lastScrollTime.current = now;
        break;
      case "Home":
        e.preventDefault();
        onScrollToFirstRef.current?.();
        lastScrollTime.current = now;
        break;
      case "End":
        e.preventDefault();
        onScrollToLastRef.current?.();
        lastScrollTime.current = now;
        break;
    }
  }, []); // Stable - uses refs

  // Setup event listeners - only runs once since handlers are stable
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
