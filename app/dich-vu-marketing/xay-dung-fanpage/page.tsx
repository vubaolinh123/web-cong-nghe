"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/common";
import FloatingServicesNav from "@/components/common/FloatingServicesNav";
import { useEffect } from "react";
import { useFanpageTranslations } from "@/lib/i18n/pages/fanpage";

// Dynamic imports
const Hero = dynamic(() => import("@/components/marketing/fanpage/Hero"), {
    loading: () => <div className="h-screen bg-slate-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Experience = dynamic(() => import("@/components/marketing/fanpage/Experience"));
const WhySetup = dynamic(() => import("@/components/marketing/fanpage/WhySetup"));
const Process = dynamic(() => import("@/components/marketing/fanpage/Process"));
const Benefits = dynamic(() => import("@/components/marketing/fanpage/Benefits"));
const CaseStudies = dynamic(() => import("@/components/marketing/fanpage/CaseStudies"));
const FanpagePricing = dynamic(() => import("@/components/marketing/fanpage/FanpagePricing"));
const FooterSection = dynamic(() => import("@/components/home/desktop/FooterSection"));

export default function FanpageBuildingPage() {
    const t = useFanpageTranslations();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-950 font-sans">
            <Header />
            <FloatingServicesNav />

            <Hero />

            <Experience />

            <WhySetup />

            <Process />

            <Benefits />

            <CaseStudies />

            <FanpagePricing />

            <FooterSection />
        </main>
    );
}
