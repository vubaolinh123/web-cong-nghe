"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Header, Footer } from "@/components/common";
import IntroOverlay from "@/components/common/IntroOverlay";
import {
  FullPageContainer,
  FullPageSection,
  SectionConfig,
} from "@/components/fullpage";

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Dynamic imports for code splitting and lazy loading
const Hero = dynamic(() => import("@/components/home/Hero"), {
  loading: () => <SectionLoader />,
});

const Partners = dynamic(() => import("@/components/home/Partners"), {
  loading: () => <SectionLoader />,
});

const MarketingServices = dynamic(() => import("@/components/home/MarketingServices"), {
  loading: () => <SectionLoader />,
});

const Services = dynamic(() => import("@/components/home/Services"), {
  loading: () => <SectionLoader />,
});

const Features = dynamic(() => import("@/components/home/Features"), {
  loading: () => <SectionLoader />,
});

const Stats = dynamic(() => import("@/components/home/Stats"), {
  loading: () => <SectionLoader />,
});

const Process = dynamic(() => import("@/components/home/Process"), {
  loading: () => <SectionLoader />,
});

const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  loading: () => <SectionLoader />,
});

const CTA = dynamic(() => import("@/components/home/CTA"), {
  loading: () => <SectionLoader />,
});

// Section configuration
const sections: SectionConfig[] = [
  { id: "hero", label: "Trang chủ" },
  { id: "partners", label: "Đối tác" },
  { id: "marketing", label: "Marketing" },
  { id: "services", label: "Công nghệ" },
  { id: "features", label: "Tính năng" },
  { id: "stats", label: "Thành tựu" },
  { id: "process", label: "Quy trình" },
  { id: "testimonials", label: "Đánh giá" },
  { id: "contact", label: "Liên hệ" },
];

export default function Home() {
  return (
    <>
      {/* Full-screen intro animation shown on first homepage visit */}
      <IntroOverlay />

      {/* Fixed Header - outside fullpage container */}
      <Header />

      {/* Main fullpage container with built-in navigation */}
      <main>
        <FullPageContainer sections={sections}>
          {/* Section 1: Hero */}
          <FullPageSection id="hero">
            <Suspense fallback={<SectionLoader />}>
              <Hero />
            </Suspense>
          </FullPageSection>

          {/* Section 2: Partners */}
          <FullPageSection id="partners">
            <Suspense fallback={<SectionLoader />}>
              <Partners />
            </Suspense>
          </FullPageSection>

          {/* Section 3: Marketing Services */}
          <FullPageSection id="marketing">
            <Suspense fallback={<SectionLoader />}>
              <MarketingServices />
            </Suspense>
          </FullPageSection>

          {/* Section 4: Technology Services */}
          <FullPageSection id="services">
            <Suspense fallback={<SectionLoader />}>
              <Services />
            </Suspense>
          </FullPageSection>

          {/* Section 5: Features */}
          <FullPageSection id="features">
            <Suspense fallback={<SectionLoader />}>
              <Features />
            </Suspense>
          </FullPageSection>

          {/* Section 6: Stats */}
          <FullPageSection id="stats">
            <Suspense fallback={<SectionLoader />}>
              <Stats />
            </Suspense>
          </FullPageSection>

          {/* Section 7: Process */}
          <FullPageSection id="process">
            <Suspense fallback={<SectionLoader />}>
              <Process />
            </Suspense>
          </FullPageSection>

          {/* Section 8: Testimonials */}
          <FullPageSection id="testimonials">
            <Suspense fallback={<SectionLoader />}>
              <Testimonials />
            </Suspense>
          </FullPageSection>

          {/* Section 9: CTA + Footer */}
          <FullPageSection id="contact">
            <div className="h-full flex flex-col">
              <div className="flex-1">
                <Suspense fallback={<SectionLoader />}>
                  <CTA />
                </Suspense>
              </div>
              <Footer />
            </div>
          </FullPageSection>
        </FullPageContainer>
      </main>
    </>
  );
}
