"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";

export default function GroupPricing() {
    const t = useFacebookGroupTranslations();

    const plans = t.groupPricing.plans.map((plan, index) => ({
        ...plan,
        highlight: index === 1,
    }));

    return (
        <section className="py-20 bg-slate-950">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                        {t.groupPricing.title} <span className="bg-blue-700 px-2 py-1">{t.groupPricing.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-400">
                        {t.groupPricing.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden flex flex-col border transition-all duration-300 relative ${plan.highlight ? 'bg-green-900/30 border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.2)] transform md:-translate-y-4 z-10' : 'bg-slate-900 border-slate-700 hover:border-green-500/50'}`}
                        >
                            {plan.highlight && (
                                <div className="bg-green-600 text-white text-xs font-bold text-center py-1 absolute top-0 left-0 right-0 z-20">{t.groupPricing.recommendedBadge}</div>
                            )}

                            <div className={`p-6 text-center ${plan.highlight ? 'bg-green-800/50' : 'bg-slate-800/50'}`}>
                                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-green-400' : 'text-green-500'}`}>{plan.price}</h3>
                                <span className="text-xs text-slate-400">{plan.sales}</span>
                            </div>

                            <div className="p-6 flex-grow">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => {
                                        const isBold = feature.includes("SEO TOP") || feature.includes("THÀNH VIÊN") || feature.includes("MEMBERS");
                                        return (
                                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                                                <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                                                <span className={isBold ? "text-white font-bold" : ""}>{feature}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="p-4 mt-auto grid grid-cols-2 gap-3">
                                <button className="py-2.5 rounded bg-green-700 text-white font-bold hover:bg-green-600 text-sm">
                                    {t.groupPricing.ebookButton}
                                </button>
                                <a href="/lien-he" className="py-2.5 rounded bg-blue-600 text-white font-bold hover:bg-blue-500 text-center flex items-center justify-center text-sm">
                                    {index % 2 !== 0 ? 'BUY' : 'CALL'}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
