"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Header } from "@/components/common";
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

const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), {
  loading: () => <SectionLoader />,
});

const CaseStudiesSection = dynamic(() => import("@/components/home/CaseStudiesSection"), {
  loading: () => <SectionLoader />,
});

const WhyUsSection = dynamic(() => import("@/components/home/WhyUsSection"), {
  loading: () => <SectionLoader />,
});

const ApproachSection = dynamic(() => import("@/components/home/ApproachSection"), {
  loading: () => <SectionLoader />,
});

const ContactSection = dynamic(() => import("@/components/home/ContactSection"), {
  loading: () => <SectionLoader />,
});

const FooterSection = dynamic(() => import("@/components/home/FooterSection"), {
  loading: () => <SectionLoader />,
});

// Section configuration
const sections: SectionConfig[] = [
  { id: "hero", label: "Trang chủ" },
  { id: "services", label: "Dịch vụ" },
  { id: "case-studies", label: "Case Studies" },
  { id: "why-us", label: "Vì sao chọn chúng tôi" },
  { id: "approach", label: "Quy trình" },
  { id: "contact", label: "Liên hệ" },
  { id: "footer", label: "Thông tin" },
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

          {/* Section 2: Services */}
          <FullPageSection id="services">
            <Suspense fallback={<SectionLoader />}>
              <ServicesSection />
            </Suspense>
          </FullPageSection>

          {/* Section 3: Case Studies */}
          <FullPageSection id="case-studies">
            <Suspense fallback={<SectionLoader />}>
              <CaseStudiesSection />
            </Suspense>
          </FullPageSection>

          {/* Section 4: Why Us */}
          <FullPageSection id="why-us">
            <Suspense fallback={<SectionLoader />}>
              <WhyUsSection />
            </Suspense>
          </FullPageSection>

          {/* Section 5: Approach */}
          <FullPageSection id="approach">
            <Suspense fallback={<SectionLoader />}>
              <ApproachSection />
            </Suspense>
          </FullPageSection>

          {/* Section 6: Contact */}
          <FullPageSection id="contact">
            <Suspense fallback={<SectionLoader />}>
              <ContactSection />
            </Suspense>
          </FullPageSection>

          {/* Section 7: Footer */}
          <FullPageSection id="footer">
            <Suspense fallback={<SectionLoader />}>
              <FooterSection />
            </Suspense>
          </FullPageSection>
        </FullPageContainer>
      </main>
    </>
  );
}
