import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Header, Footer } from "@/components/common";
import { siteConfig } from "@/lib/seo/config";

// Loading component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Dynamic import for ContactForm
const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <SectionLoader />,
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Liên Hệ - Tư Vấn Dịch Vụ Công Nghệ Miễn Phí",
  description:
    "Liên hệ TechVision Pro để được tư vấn miễn phí về các giải pháp công nghệ. Đội ngũ chuyên gia sẵn sàng hỗ trợ 24/7 cho mọi nhu cầu phát triển phần mềm, ứng dụng di động, Cloud và AI.",
  keywords: [
    "liên hệ",
    "tư vấn công nghệ",
    "dịch vụ IT",
    "phát triển phần mềm",
    "báo giá dịch vụ",
    "hỗ trợ kỹ thuật",
  ],
  openGraph: {
    title: "Liên Hệ - Tư Vấn Dịch Vụ Công Nghệ Miễn Phí | TechVision Pro",
    description:
      "Liên hệ để được tư vấn miễn phí về các giải pháp công nghệ. Hỗ trợ 24/7.",
    url: `${siteConfig.url}/lien-he`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liên Hệ - TechVision Pro",
    description: "Tư vấn giải pháp công nghệ miễn phí. Hỗ trợ 24/7.",
  },
  alternates: {
    canonical: `${siteConfig.url}/lien-he`,
  },
};

// JSON-LD Structured Data for Contact Page
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Liên Hệ TechVision Pro",
  description: "Trang liên hệ và đăng ký tư vấn dịch vụ công nghệ",
  url: `${siteConfig.url}/lien-he`,
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-123-456-789",
      contactType: "customer service",
      availableLanguage: ["Vietnamese", "English"],
      areaServed: "VN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <Header />
      <main className="pt-20">
        <Suspense fallback={<SectionLoader />}>
          <ContactForm />
        </Suspense>

        {/* Contact Info Section */}
        <section className="py-16 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a href="mailto:contact@techvision.vn" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  contact@techvision.vn
                </a>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Hotline</h3>
                <a href="tel:+84123456789" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  +84 123 456 789
                </a>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Địa Chỉ</h3>
                <p className="text-slate-400">Việt Nam</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

