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
        const updateDeviceType = () => {
            const width = window.innerWidth;
            setDeviceType({
                isMobile: width < BREAKPOINTS.mobile,
                isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
                isDesktop: width >= BREAKPOINTS.tablet,
            });
        };

        // Initial check
        updateDeviceType();

        // Listen for resize
        window.addEventListener("resize", updateDeviceType);
        return () => window.removeEventListener("resize", updateDeviceType);
    }, []);

    return deviceType;
}

export default useIsMobile;
