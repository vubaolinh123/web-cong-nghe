"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/common";
import FloatingServicesNav from "@/components/common/FloatingServicesNav";
import { useEffect } from "react";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";

// Dynamic imports
const Hero = dynamic(() => import("@/components/marketing/group/Hero"), {
    loading: () => <div className="h-screen bg-slate-950 animate-pulse" />
});
const Benefits = dynamic(() => import("@/components/marketing/group/Benefits"));
const GroupPricing = dynamic(() => import("@/components/marketing/group/GroupPricing"));
const Process = dynamic(() => import("@/components/marketing/group/Process"));
const CaseStudies = dynamic(() => import("@/components/marketing/group/CaseStudies"));
const FAQ = dynamic(() => import("@/components/marketing/group/FAQ"));
const FooterSection = dynamic(() => import("@/components/home/desktop/FooterSection"));

export default function GroupPage() {
    const t = useFacebookGroupTranslations();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-950 font-sans">
            <Header />
            <FloatingServicesNav />

            <Hero />

            <Benefits />

            <GroupPricing />

            <Process />

            <CaseStudies />

            <FAQ />

            <section className="py-20 bg-gradient-to-b from-slate-950 to-purple-900/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t.pageCta.title}
                    </h2>
                    <a
                        href="tel:0584503333"
                        className="inline-block px-8 py-3 bg-white text-purple-900 font-bold text-base md:text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        {t.pageCta.button}
                    </a>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}

