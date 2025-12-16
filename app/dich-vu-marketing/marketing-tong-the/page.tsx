"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/common";
import { useEffect } from "react";

// Dynamic imports with specific loading states
const Hero = dynamic(() => import("@/components/marketing/full-package/Hero"), {
    loading: () => <div className="h-screen bg-slate-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" /></div>
});

const Benefits = dynamic(() => import("@/components/marketing/full-package/Benefits"));
const ServiceDetails = dynamic(() => import("@/components/marketing/full-package/ServiceDetails"));
const SalesFunnel = dynamic(() => import("@/components/marketing/full-package/SalesFunnel"));
const TrafficSources = dynamic(() => import("@/components/marketing/full-package/TrafficSources"));
const MarketingStrategy = dynamic(() => import("@/components/marketing/full-package/MarketingStrategy"));
const CustomerJourney = dynamic(() => import("@/components/marketing/full-package/CustomerJourney"));
const DetailedPricing = dynamic(() => import("@/components/marketing/full-package/DetailedPricing"));
const FooterSection = dynamic(() => import("@/components/home/FooterSection"));

export default function MarketingFullPackagePage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-950">
            <Header />

            <Hero />

            <Benefits />

            <SalesFunnel />

            <TrafficSources />

            <MarketingStrategy />

            <ServiceDetails />

            <CustomerJourney />

            <DetailedPricing />

            <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-900/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Đừng Để Trì Trệ Thêm 1 Ngày Nào Nữa
                    </h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Mỗi ngày trôi qua không làm Marketing là bạn đang nhường khách hàng cho đối thủ.
                        Liên hệ ngay với chúng tôi để lấy lại vị thế dẫn đầu.
                    </p>
                    <a
                        href="https://zalo.me/0923451469"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-10 py-4 bg-white text-blue-900 font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                    >
                        Tư Vấn Chiến Lược Ngay
                    </a>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
