"use client";

import { motion } from "framer-motion";
import { Container } from "../common";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";

export default function CTASection() {
    const t = useTechnologyTranslations();

    return (
        <section className="py-20 text-center bg-slate-950 relative overflow-hidden">
            {/* Background gradient/glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl opacity-50" />

            <Container className="relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    {t.cta.title}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <p className="text-xl sm:text-2xl text-cyan-400 font-medium mb-4">
                        {t.cta.subtitle}
                    </p>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                        {t.cta.description}
                    </p>
                </motion.div>

            </Container>
        </section>
    );
}
