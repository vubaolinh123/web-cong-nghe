"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/common";
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

            <Hero />

            <Experience />

            <WhySetup />

            <Process />

            <Benefits />

            <FanpagePricing />

            <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">{t.pageCta.title}</h2>
                    <p className="mb-8 text-lg opacity-90">{t.pageCta.description}</p>
                    <a href="tel:0923451469" className="inline-block px-10 py-4 bg-white text-green-700 font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
                        {t.pageCta.button}
                    </a>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
