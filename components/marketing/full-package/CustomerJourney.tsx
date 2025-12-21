"use client";

import { motion } from "framer-motion";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";

const stepColors = [
    "from-blue-400 to-cyan-500",
    "from-cyan-400 to-green-400",
    "from-green-400 to-yellow-400",
    "from-yellow-400 to-orange-500",
    "from-orange-500 to-red-500",
];

export default function CustomerJourney() {
    const t = useMarketingFullPackageTranslations();

    const steps = t.customerJourney.steps.map((step, index) => ({
        id: index + 1,
        title: step.title,
        desc: step.desc,
        color: stepColors[index],
    }));

    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t.customerJourney.title} <br />
                            <span className="text-cyan-400">{t.customerJourney.titleHighlight}</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            {t.customerJourney.description}
                        </p>

                        <div className="space-y-6">
                            {steps.map((step) => (
                                <div key={step.id} className="flex gap-4">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0 text-white font-bold shadow-lg`}>
                                        {step.id}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                                        <p className="text-slate-400">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
                        <img
                            src="/image/real/customer_journey.jpg"
                            alt="Customer Journey Visualization"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border border-slate-700/50 hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
