"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/common";
import { useEffect } from "react";

// Dynamic imports
const Hero = dynamic(() => import("@/components/marketing/group/Hero"), {
    loading: () => <div className="h-screen bg-slate-950 animate-pulse" />
});
const Intro = dynamic(() => import("@/components/marketing/group/Intro"));
const Benefits = dynamic(() => import("@/components/marketing/group/Benefits"));
const StrategyVideo = dynamic(() => import("@/components/marketing/group/StrategyVideo"));
const GroupPricing = dynamic(() => import("@/components/marketing/group/GroupPricing"));
const Process = dynamic(() => import("@/components/marketing/group/Process"));
const FAQ = dynamic(() => import("@/components/marketing/group/FAQ"));
const FooterSection = dynamic(() => import("@/components/home/desktop/FooterSection"));

export default function GroupPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-950 font-sans">
            <Header />

            <Hero />

            <Intro />

            <Benefits />

            <StrategyVideo />

            <GroupPricing />

            <Process />

            <FAQ />

            <section className="py-16 bg-blue-900 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold mb-6">Liên Hệ Ngay Để Sở Hữu Group Chất Lượng</h2>
                    <a href="tel:0923451469" className="inline-block px-10 py-4 bg-green-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl hover:bg-green-600">
                        HOTLINE: 0923.451.469
                    </a>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
