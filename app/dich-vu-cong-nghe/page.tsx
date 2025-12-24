import { Metadata } from "next";
import { Header } from "@/components/common";
import Hero from "@/components/ai-service/Hero";
import Introduction from "@/components/ai-service/Introduction";
import ITServicesIntro from "@/components/ai-service/ITServicesIntro";
import PricingPackages from "@/components/ai-service/PricingPackages";
import Commitments from "@/components/ai-service/Commitments";
import CaseStudies from "@/components/ai-service/CaseStudies";
import CTASection from "@/components/ai-service/CTASection";
import { ContactSection, FooterSection } from "@/components/home";
import { siteConfig, pageSEO } from "@/lib/seo";

export const metadata: Metadata = {
    title: pageSEO.technologyServices.title,
    description: pageSEO.technologyServices.description,
    keywords: pageSEO.technologyServices.keywords,
    openGraph: {
        title: `${pageSEO.technologyServices.title} | ${siteConfig.name}`,
        description: pageSEO.technologyServices.description,
        url: `${siteConfig.url}/dich-vu-cong-nghe`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: pageSEO.technologyServices.title,
        description: pageSEO.technologyServices.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/dich-vu-cong-nghe`,
    },
};

export default function AiServicesPage() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
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

            {/* Footer */}
            <FooterSection />
        </main>
    );
}

