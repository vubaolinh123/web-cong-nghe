"use client";

import { Container } from "../common";
import { useMarketingTranslations } from "@/lib/i18n/pages/marketing";

export default function CTASection() {
    const t = useMarketingTranslations();

    return (
        <section className="py-20 text-center bg-slate-950 relative overflow-hidden">
            {/* Simplified background - reduced blur for mobile performance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-2xl opacity-40" />

            <Container className="relative z-10">
                {/* Static content - no scroll animations for mobile performance */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    {t.cta.title}
                </h2>
                <div>
                    <p className="text-xl sm:text-2xl text-green-400 font-medium mb-4">
                        {t.cta.subtitle}
                    </p>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                        {t.cta.description}
                    </p>
                </div>
            </Container>
        </section>
    );
}
