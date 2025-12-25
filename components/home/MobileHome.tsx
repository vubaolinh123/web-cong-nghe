"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Header, BlogSection } from "@/components/common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Loading component
const SectionLoader = () => (
    <div className="min-h-20 flex items-center justify-center p-8">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
);

// Dynamic imports for mobile components
const MobileHero = dynamic(() => import("./mobile/MobileHero"), { loading: () => <SectionLoader /> });
const MobileServices = dynamic(() => import("./mobile/MobileServices"), { loading: () => <SectionLoader /> });
const MobilePartner = dynamic(() => import("./mobile/MobilePartner"), { loading: () => <SectionLoader /> });
const MobileWhyUs = dynamic(() => import("./mobile/MobileWhyUs"), { loading: () => <SectionLoader /> });
const MobileApproach = dynamic(() => import("./mobile/MobileApproach"), { loading: () => <SectionLoader /> });
const MobileContact = dynamic(() => import("./mobile/MobileContact"), { loading: () => <SectionLoader /> });
const MobileFooter = dynamic(() => import("./desktop/FooterSection"), { loading: () => <SectionLoader /> }); // Reusing desktop footer for now or create mobile specific if needed

export default function MobileHome() {
    const { dictionary } = useLanguage();

    return (
        <div className="flex flex-col w-full overflow-x-hidden bg-slate-950">
            {/* Header Navigation */}
            <Header />

            <Suspense fallback={<SectionLoader />}>
                <MobileHero />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <MobileServices />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <MobilePartner />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <MobileWhyUs />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <MobileApproach />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <MobileContact />
            </Suspense>

            {/* Blog Section - New */}
            <BlogSection
                title={dictionary.blogSection.title}
                titleHighlight={dictionary.blogSection.titleHighlight}
                subtitle={dictionary.blogSection.subtitle}
                viewAllText={dictionary.blogSection.viewAll}
                minuteReadText={dictionary.blogSection.minuteRead}
                accentColor="cyan"
            />

            <Suspense fallback={<SectionLoader />}>
                <MobileFooter />
            </Suspense>
        </div>
    );
}
