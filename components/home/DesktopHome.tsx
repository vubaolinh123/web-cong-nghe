"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Header } from "@/components/common";
import {
    FullPageContainer,
    FullPageSection,
    SectionConfig,
} from "@/components/fullpage";

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

const sections: SectionConfig[] = [
    { id: "hero", label: "Trang chủ" },
    { id: "services", label: "Dịch vụ" },
    { id: "partners", label: "Đối tác" },
    { id: "why-us", label: "Vì sao chọn chúng tôi" },
    { id: "approach", label: "Quy trình" },
    { id: "contact", label: "Liên hệ" },
    { id: "footer", label: "Thông tin" },
];

export default function DesktopHome() {
    return (
        <>
            <Header />
            <main>
                <FullPageContainer sections={sections}>
                    <FullPageSection id="hero">
                        <Suspense fallback={<SectionLoader />}>
                            <Hero />
                        </Suspense>
                    </FullPageSection>

                    <FullPageSection id="services">
                        <Suspense fallback={<SectionLoader />}>
                            <ServicesSection />
                        </Suspense>
                    </FullPageSection>

                    <FullPageSection id="partners">
                        <Suspense fallback={<SectionLoader />}>
                            <PartnerCarousel />
                        </Suspense>
                    </FullPageSection>

                    <FullPageSection id="why-us">
                        <Suspense fallback={<SectionLoader />}>
                            <WhyUsSection />
                        </Suspense>
                    </FullPageSection>

                    <FullPageSection id="approach">
                        <Suspense fallback={<SectionLoader />}>
                            <ApproachSection />
                        </Suspense>
                    </FullPageSection>

                    <FullPageSection id="contact">
                        <Suspense fallback={<SectionLoader />}>
                            <ContactSection />
                        </Suspense>
                    </FullPageSection>

                    <FullPageSection id="footer">
                        <Suspense fallback={<SectionLoader />}>
                            <FooterSection />
                        </Suspense>
                    </FullPageSection>
                </FullPageContainer>
            </main>
        </>
    );
}
