import { Metadata } from "next";
import { Header } from "@/components/common";
import Hero from "@/components/ai-service/Hero";
import Introduction from "@/components/ai-service/Introduction";
import ServiceList from "@/components/ai-service/ServiceList";
import CaseStudies from "@/components/ai-service/CaseStudies";
import CTASection from "@/components/ai-service/CTASection";
import ContactSection from "@/components/home/ContactSection";
import FooterSection from "@/components/home/FooterSection";

export const metadata: Metadata = {
    title: "Dịch Vụ AI & Automation | Nâng Tầm Doanh Nghiệp Automation",
    description: "Giải pháp AI toàn diện cho bộ máy doanh nghiệp của bạn. Từ Automation, Chatbot đến AI Agent thông minh.",
};

export default function AiServicesPage() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Introduction */}
            <Introduction />

            {/* Services List */}
            <ServiceList />

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
