"use client";

import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";

// Loading state
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Dynamic imports
const DesktopHome = dynamic(() => import("@/components/home/DesktopHome"), {
  loading: () => <LoadingScreen />,
});

const MobileHome = dynamic(() => import("@/components/home/MobileHome"), {
  loading: () => <LoadingScreen />,
});

export default function Home() {
  const { isMobile, isDesktop } = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingScreen />;

  // Show MobileHome for mobile AND tablet (anything not desktop)
  if (!isDesktop) {
    return <MobileHome />;
  }

  return <DesktopHome />;
}
