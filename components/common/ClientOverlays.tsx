"use client";

import dynamic from "next/dynamic";
import ScrollToTop from "@/components/common/ScrollToTop";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
});

const FloatingContactButton = dynamic(() => import("@/components/common/FloatingContactButton"), {
  ssr: false,
});

export default function ClientOverlays() {
  return (
    <>
      {/* Reset scroll position instantly when navigating between pages */}
      <ScrollToTop />
      <CustomCursor />
      <FloatingContactButton />
    </>
  );
}
