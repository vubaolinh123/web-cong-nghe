"use client";

import { Header, BlogSection } from "@/components/common";
import Hero from "@/components/marketing/Hero";
import Introduction from "@/components/marketing/Introduction";
import ServiceList from "@/components/marketing/ServiceList";
import FeaturedCaseStudies from "@/components/marketing/FeaturedCaseStudies";

import CTASection from "@/components/marketing/CTASection";
import { ContactSection, FooterSection } from "@/components/home";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MarketingServicesPage() {
    const { dictionary } = useLanguage();

    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-green-500/30">
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Introduction */}
            <Introduction />

            {/* Services List */}
            <ServiceList />

            {/* Case Studies / Success Stories */}
            <FeaturedCaseStudies />

            {/* CTA Text */}
            <CTASection />

            {/* Contact Form Reused */}
            <div id="tu-van">
                <ContactSection />
            </div>

            {/* Blog Section */}
            <BlogSection
                title={dictionary.blogSection.title}
                titleHighlight={dictionary.blogSection.titleHighlight}
                subtitle={dictionary.blogSection.subtitle}
                viewAllText={dictionary.blogSection.viewAll}
                minuteReadText={dictionary.blogSection.minuteRead}
                accentColor="green"
            />

            {/* Footer */}
            <FooterSection />
        </main>
    );
}
