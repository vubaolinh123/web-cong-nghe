import { Metadata } from "next";
import { Header } from "@/components/common";
import Hero from "@/components/marketing/Hero";
import Introduction from "@/components/marketing/Introduction";
import ServiceList from "@/components/marketing/ServiceList";
import CTASection from "@/components/marketing/CTASection";
import { ContactSection, FooterSection } from "@/components/home";
import { siteConfig, pageSEO } from "@/lib/seo";

export const metadata: Metadata = {
    title: pageSEO.marketingServices.title,
    description: pageSEO.marketingServices.description,
    keywords: pageSEO.marketingServices.keywords,
    openGraph: {
        title: `${pageSEO.marketingServices.title} | ${siteConfig.name}`,
        description: pageSEO.marketingServices.description,
        url: `${siteConfig.url}/dich-vu-marketing`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: pageSEO.marketingServices.title,
        description: pageSEO.marketingServices.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/dich-vu-marketing`,
    },
};

export default function MarketingServicesPage() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-green-500/30">
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Introduction */}
            <Introduction />

            {/* Services List */}
            <ServiceList />

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
