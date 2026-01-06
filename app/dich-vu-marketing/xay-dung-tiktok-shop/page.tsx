"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/common";
import FloatingServicesNav from "@/components/common/FloatingServicesNav";
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
            <FloatingServicesNav />

            <Hero />

            <TiktokBenefits />

            <TiktokPricing />

            <Process />

            <CaseStudies />

            <FAQ />

            <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 text-center text-white">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 sm:mb-8 leading-tight">
                        {t.pageCta.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">{t.pageCta.titleHighlight}</span>
                    </h2>
                    <a
                        href="tel:+84584503333"
                        className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-white to-slate-100 text-slate-900 font-black text-lg sm:text-xl rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
                    >
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {t.pageCta.button}
                    </a>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
