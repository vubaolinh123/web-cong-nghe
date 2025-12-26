"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/common";
import { useEffect } from "react";
import { useTiktokShopTranslations } from "@/lib/i18n/pages/tiktok-shop";

// Dynamic imports
const Hero = dynamic(() => import("@/components/marketing/tiktok/Hero"), {
    loading: () => <div className="h-screen bg-black animate-pulse" />
});
const TiktokBenefits = dynamic(() => import("@/components/marketing/tiktok/TiktokBenefits"));
const TiktokPricing = dynamic(() => import("@/components/marketing/tiktok/TiktokPricing"));
const Process = dynamic(() => import("@/components/marketing/tiktok/Process"));
const CaseStudies = dynamic(() => import("@/components/marketing/tiktok/CaseStudies"));
const FAQ = dynamic(() => import("@/components/marketing/tiktok/FAQ"));
const FooterSection = dynamic(() => import("@/components/home/desktop/FooterSection"));

export default function TiktokPage() {
    const t = useTiktokShopTranslations();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-black font-sans selection:bg-pink-500 selection:text-white">
            <Header />

            <Hero />

            <TiktokBenefits />

            <TiktokPricing />

            <Process />

            <CaseStudies />

            <FAQ />

            <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 text-center text-white">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                        {t.pageCta.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">{t.pageCta.titleHighlight}</span>
                    </h2>
                    <a
                        href="tel:0923451469"
                        className="inline-block px-12 py-5 bg-white text-black font-black text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
                    >
                        {t.pageCta.button}
                    </a>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
