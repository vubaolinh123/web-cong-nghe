"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/common";
import FloatingServicesNav from "@/components/common/FloatingServicesNav";
import { useMarketingPremiumTranslations } from "@/lib/i18n/pages/marketing-premium";

// Reuse components from basic-package - they use translations from hook
const Hero = dynamic(() => import("@/components/marketing/premium-package/Hero"), {
    loading: () => <div className="h-screen bg-slate-950 animate-pulse" />
});
const PackageOverview = dynamic(() => import("@/components/marketing/premium-package/PackageOverview"));
const FacebookService = dynamic(() => import("@/components/marketing/premium-package/FacebookService"));
const TikTokService = dynamic(() => import("@/components/marketing/premium-package/TikTokService"));
const GroupService = dynamic(() => import("@/components/marketing/premium-package/GroupService"));
const BrandDesign = dynamic(() => import("@/components/marketing/premium-package/BrandDesign"));
const KPIResults = dynamic(() => import("@/components/marketing/premium-package/KPIResults"));
const CTASection = dynamic(() => import("@/components/marketing/premium-package/CTASection"));
const FooterSection = dynamic(() => import("@/components/home/desktop/FooterSection"));

export default function PremiumPackagePage() {
    const t = useMarketingPremiumTranslations();

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
