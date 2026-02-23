"use client";

import dynamic from "next/dynamic";
import { Header, BlogSection } from "@/components/common";
import Hero from "@/components/ai-service/Hero";
import Introduction from "@/components/ai-service/Introduction";
import ITServicesIntro from "@/components/ai-service/ITServicesIntro";
import Commitments from "@/components/ai-service/Commitments";
import CTASection from "@/components/ai-service/CTASection";
import { ContactSection, FooterSection } from "@/components/home";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";

const PricingPackages = dynamic(() => import("@/components/ai-service/PricingPackages"), {
    ssr: false,
});

const CaseStudies = dynamic(() => import("@/components/ai-service/CaseStudies"), {
    ssr: false,
});

export default function AiServicesPage() {
    const t = useTechnologyTranslations();

    return (
        <main className="dvcn-page bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Introduction */}
            <Introduction />

            {/* IT Services Introduction */}
            <ITServicesIntro />

            {/* Pricing Packages */}
            <PricingPackages />

            {/* Commitments */}
            <Commitments />

            {/* Case Studies */}
            <CaseStudies />

            {/* CTA Text */}
            <CTASection />

            {/* Contact Form Reused */}
            <div id="tu-van">
                <ContactSection />
            </div>

            {/* Blog Section */}
            <BlogSection
                title={t.blogSection.title}
                titleHighlight={t.blogSection.titleHighlight}
                subtitle={t.blogSection.subtitle}
                viewAllText={t.blogSection.viewAll}
                minuteReadText={t.blogSection.minuteRead}
                accentColor="cyan"
            />

            {/* Footer */}
            <FooterSection />
        </main>
    );
}
