"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useFanpageTranslations } from "@/lib/i18n/pages/fanpage";

export default function FanpagePricing() {
    const t = useFanpageTranslations();

    const plans = t.pricing.plans.map((plan, index) => ({
        ...plan,
        popular: index === 1,
        color: "border-green-500",
        btnColor: "bg-green-500 hover:bg-green-600",
    }));

    return (
        <section id="price" className="py-20 bg-slate-950 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/10 via-slate-950 to-slate-950" />
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                        {t.pricing.title} <span className="text-green-500">{t.pricing.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t.pricing.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col relative border border-slate-800 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-300 ${plan.popular ? 'transform md:-translate-y-4 z-10 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.15)]' : ''}`}
                        >
                            {/* Header */}
                            <div className="p-6 text-center border-b border-slate-800 bg-slate-900/80">
                                <h3 className="text-3xl font-bold text-green-400 mb-2">{plan.price}</h3>
                                {plan.sales && <span className="text-xs font-bold text-slate-300 bg-slate-800 px-3 py-1 rounded-full inline-block border border-slate-700">{plan.sales}</span>}
                            </div>

                            {/* Features */}
                            <div className="p-6 flex-grow">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => {
                                        const isBold = feature.includes("FOLLOW") || feature.includes("TÍCH XANH") || feature.includes("BÀN GIAO") || feature.includes("VERIFICATION") || feature.includes("DELIVERY");
                                        return (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                                <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                                <span className={isBold ? "text-white font-bold" : ""}>{feature}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* Footer */}
                            <div className="p-6 bg-slate-900/80 mt-auto flex gap-3 border-t border-slate-800">
                                <a href="/lien-he" className="block w-full py-3 rounded bg-red-600 text-white font-bold hover:bg-red-500 transition-colors uppercase text-center">
                                    {t.pricing.registerButton}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
