import dynamic from "next/dynamic";
import { Header } from "@/components/common";

const FloatingServicesNav = dynamic(() => import("@/components/common/FloatingServicesNav"));

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
const CaseStudies = dynamic(() => import("@/components/marketing/full-package/CaseStudies"));
const DetailedPricing = dynamic(() => import("@/components/marketing/full-package/DetailedPricing"));
const FooterSection = dynamic(() => import("@/components/home/desktop/FooterSection"));

export default function MarketingFullPackagePage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <Header />
            <FloatingServicesNav />

            <Hero />

            <Benefits />

            <SalesFunnel />

            <TrafficSources />

            <MarketingStrategy />

            <ServiceDetails />

            <CustomerJourney />

            <CaseStudies />

            <DetailedPricing />

            <FooterSection />
        </main>
    );
}
