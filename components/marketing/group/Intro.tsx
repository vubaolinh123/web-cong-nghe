"use client";

import { motion } from "framer-motion";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";

export default function Intro() {
    const t = useFacebookGroupTranslations();

    return (
        <section className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                        {t.intro.paragraph1Start} <strong className="text-white">{t.intro.paragraph1Highlight}</strong> {t.intro.paragraph1End}
                    </p>
                    <p className="text-lg text-slate-400">
                        {t.intro.paragraph2}
                        <span className="text-green-400 font-bold ml-1">{t.intro.paragraph2Highlight}</span> {t.intro.paragraph2End}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
