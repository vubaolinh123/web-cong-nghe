"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
});

const FloatingContactButton = dynamic(() => import("@/components/common/FloatingContactButton"), {
  ssr: false,
});

export default function ClientOverlays() {
  return (
    <>
      <CustomCursor />
      <FloatingContactButton />
    </>
  );
}
