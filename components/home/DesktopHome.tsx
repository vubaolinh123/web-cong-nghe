"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Header, BlogSection } from "@/components/common";

import { useLanguage } from "@/lib/i18n/LanguageContext";

// Loading component
const SectionLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
);

// Dynamic imports - pointing to desktop folder
const Hero = dynamic(() => import("./desktop/Hero"));
const ServicesSection = dynamic(() => import("./desktop/ServicesSection"));
const PartnerCarousel = dynamic(() => import("./desktop/PartnerCarousel"));
const WhyUsSection = dynamic(() => import("./desktop/WhyUsSection"));
const ApproachSection = dynamic(() => import("./desktop/ApproachSection"));
const ContactSection = dynamic(() => import("./desktop/ContactSection"));
const FooterSection = dynamic(() => import("./desktop/FooterSection"));



export default function DesktopHome() {
    const { dictionary } = useLanguage();

    return (
        <>
            <Header />
            <main className="flex flex-col w-full overflow-x-hidden">
                {/* Hero Section - Full Screen */}
                <section id="hero" className="min-h-screen w-full">
                    <Suspense fallback={<SectionLoader />}>
                        <Hero />
                    </Suspense>
                </section>

                {/* Services Section */}
                <section id="services" className="w-full">
                    <Suspense fallback={<SectionLoader />}>
                        <ServicesSection />
                    </Suspense>
                </section>

                {/* Partner Section */}
                <section id="partners" className="w-full">
                    <Suspense fallback={<SectionLoader />}>
                        <PartnerCarousel />
                    </Suspense>
                </section>

                {/* Why Us Section */}
                <section id="why-us" className="w-full">
                    <Suspense fallback={<SectionLoader />}>
                        <WhyUsSection />
                    </Suspense>
                </section>

                {/* Approach Section */}
                <section id="approach" className="w-full">
                    <Suspense fallback={<SectionLoader />}>
                        <ApproachSection />
                    </Suspense>
                </section>

                {/* Contact Section */}
                <section id="contact" className="w-full">
                    <Suspense fallback={<SectionLoader />}>
                        <ContactSection />
                    </Suspense>
                </section>

                {/* Blog Section */}
                <section id="blog" className="w-full py-20 bg-slate-950">
                    <BlogSection
                        title={dictionary.blogSection.title}
                        titleHighlight={dictionary.blogSection.titleHighlight}
                        subtitle={dictionary.blogSection.subtitle}
                        viewAllText={dictionary.blogSection.viewAll}
                        minuteReadText={dictionary.blogSection.minuteRead}
                        accentColor="cyan"
                        compact={true}
                    />
                </section>

                {/* Footer Section */}
                <section id="footer" className="w-full">
                    <Suspense fallback={<SectionLoader />}>
                        <FooterSection />
                    </Suspense>
                </section>
            </main>
        </>
    );
}
