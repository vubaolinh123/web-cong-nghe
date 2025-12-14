import { Metadata } from "next";
import { Header } from "@/components/common";
import Hero from "@/components/marketing/Hero";
import Introduction from "@/components/marketing/Introduction";
import ServiceList from "@/components/marketing/ServiceList";
import CTASection from "@/components/marketing/CTASection";
import ContactSection from "@/components/home/ContactSection";
import FooterSection from "@/components/home/FooterSection";

export const metadata: Metadata = {
    title: "Dịch Vụ Marketing AI | Thu Hút Khách Hàng Tiềm Năng",
    description: "Giải pháp marketing tự động, xây dựng thương hiệu, có ngay tệp khách hàng tiềm năng với dịch vụ marketing đa kênh Facebook, TikTok, Fanpage.",
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
