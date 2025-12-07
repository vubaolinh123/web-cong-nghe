import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Header, Footer } from "@/components/common";
import IntroOverlay from "@/components/common/IntroOverlay";

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
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

const Services = dynamic(() => import("@/components/home/Services"), {
  loading: () => <SectionLoader />,
});

const About = dynamic(() => import("@/components/home/About"), {
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

export default function Home() {
  return (
    <>
      {/* Full-screen intro animation shown on first homepage visit */}
      <IntroOverlay />
      <Header />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Partners />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
