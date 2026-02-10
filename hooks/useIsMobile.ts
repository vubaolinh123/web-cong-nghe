"use client";

import { useState, useEffect } from "react";

interface DeviceType {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
};

/**
 * Hook to detect device type based on viewport width
 * Breakpoints:
 * - Mobile: < 768px
 * - Tablet: 768px - 1023px
 * - Desktop: >= 1024px
 */
export function useIsMobile(): DeviceType {
    // Default to desktop for SSR
    const [deviceType, setDeviceType] = useState<DeviceType>({
        isMobile: false,
        isTablet: false,
        isDesktop: true,
    });

    useEffect(() => {
        let resizeTimer: ReturnType<typeof setTimeout> | null = null;

        const updateDeviceType = () => {
            const width = window.innerWidth;
            setDeviceType({
                isMobile: width < BREAKPOINTS.mobile,
                isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
                isDesktop: width >= BREAKPOINTS.tablet,
            });
        };

        const handleResize = () => {
            if (resizeTimer) {
                clearTimeout(resizeTimer);
            }

            resizeTimer = setTimeout(updateDeviceType, 120);
        };

        // Initial check
        updateDeviceType();

        // Listen for resize
        window.addEventListener("resize", handleResize, { passive: true });
        return () => {
            if (resizeTimer) {
                clearTimeout(resizeTimer);
            }
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return deviceType;
}

export default useIsMobile;
