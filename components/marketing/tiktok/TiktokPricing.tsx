"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTiktokShopTranslations } from "@/lib/i18n/pages/tiktok-shop";

export default function TiktokPricing() {
    const t = useTiktokShopTranslations();

    return (
        <section className="py-20 bg-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        {t.pricing.title} <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">{t.pricing.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-400">
                        {t.pricing.note}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.pricing.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-3xl overflow-hidden flex flex-col border border-slate-800 bg-slate-900/50 hover:border-pink-500/50 transition-all duration-300 relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/10 to-transparent pointer-events-none" />

                            <div className="p-8 text-center border-b border-slate-800 relative z-10">
                                <h3 className="text-3xl font-black text-white mb-2">{plan.price}</h3>
                                <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 font-bold">
                                    {plan.sales}
                                </div>
                            </div>

                            <div className="p-6 flex-grow relative z-10">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className={`flex items-start gap-2 text-xs md:text-sm ${feature.active ? 'text-slate-300' : 'text-slate-600 line-through opacity-60'}`}>
                                            <div className="shrink-0 mt-0.5">
                                                {feature.active ? <Check size={14} className="text-green-500" /> : <X size={14} className="text-slate-600" />}
                                            </div>
                                            <span className={feature.text.includes("THÀNH VIÊN") || feature.text.includes("MEMBERS") ? "font-bold text-white" : ""}>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 mt-auto relative z-10">
                                <a
                                    href="/lien-he"
                                    className="block w-full py-3 rounded-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white font-bold text-center uppercase tracking-wide shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1"
                                >
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
