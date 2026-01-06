"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/common";
import FloatingServicesNav from "@/components/common/FloatingServicesNav";
import { useEffect } from "react";
import { useMarketingBasicTranslations } from "@/lib/i18n/pages/marketing-basic";

// Dynamic imports for code splitting
const Hero = dynamic(() => import("@/components/marketing/basic-package/Hero"), {
    loading: () => <div className="h-screen bg-slate-950 animate-pulse" />
});
const PackageOverview = dynamic(() => import("@/components/marketing/basic-package/PackageOverview"));
const FacebookService = dynamic(() => import("@/components/marketing/basic-package/FacebookService"));
const TikTokService = dynamic(() => import("@/components/marketing/basic-package/TikTokService"));
const GroupService = dynamic(() => import("@/components/marketing/basic-package/GroupService"));
const BrandDesign = dynamic(() => import("@/components/marketing/basic-package/BrandDesign"));
const KPIResults = dynamic(() => import("@/components/marketing/basic-package/KPIResults"));
const CTASection = dynamic(() => import("@/components/marketing/basic-package/CTASection"));
const FooterSection = dynamic(() => import("@/components/home/desktop/FooterSection"));

export default function BasicPackagePage() {
    const t = useMarketingBasicTranslations();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <title>{t.meta.title}</title>
            <meta name="description" content={t.meta.description} />

            <main className="min-h-screen bg-slate-950 font-sans">
                <Header />
                <FloatingServicesNav />

                <Hero />
                <PackageOverview />
                <FacebookService />
                <TikTokService />
                <GroupService />
                <BrandDesign />
                <KPIResults />
                <CTASection />
                <FooterSection />
            </main>
        </>
    );
}
