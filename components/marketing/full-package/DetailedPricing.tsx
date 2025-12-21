"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Crown, Gem, Sparkles } from "lucide-react";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";

const planConfigs = [
    {
        icon: Zap,
        color: "from-orange-400 to-red-500",
        bgGlow: "bg-orange-500/20",
        borderColor: "border-orange-500/30",
        btnColor: "bg-gradient-to-r from-orange-400 to-red-500 hover:shadow-orange-500/30",
        popular: false
    },
    {
        icon: Crown,
        color: "from-cyan-400 to-blue-500",
        bgGlow: "bg-cyan-500/20",
        borderColor: "border-cyan-500/50",
        btnColor: "bg-gradient-to-r from-cyan-400 to-blue-600 hover:shadow-cyan-500/30",
        popular: true
    },
    {
        icon: Gem,
        color: "from-yellow-400 to-amber-500",
        bgGlow: "bg-yellow-500/20",
        borderColor: "border-yellow-500/30",
        btnColor: "bg-gradient-to-r from-yellow-400 to-amber-600 hover:shadow-yellow-500/30",
        popular: false
    }
];

export default function DetailedPricing() {
    const t = useMarketingFullPackageTranslations();

    const plans = t.detailedPricing.plans.map((plan, index) => ({
        ...planConfigs[index],
        name: plan.name,
        duration: plan.duration,
        price: plan.price,
        desc: plan.desc,
        features: plan.features,
    }));

    return (
        <section className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t.detailedPricing.title} <span className="text-cyan-400">{t.detailedPricing.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t.detailedPricing.description}
                    </p>
                </div>

                {/* Main Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 border ${plan.borderColor} bg-slate-900/50 flex flex-col group hover:bg-slate-900/80 transition-all duration-300`}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 ${plan.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />

                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold rounded-full uppercase tracking-wider shadow-lg shadow-cyan-500/40 flex items-center gap-1">
                                    <Sparkles size={14} /> {t.detailedPricing.recommendedBadge}
                                </div>
                            )}

                            <div className="mb-6 text-center">
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                    <plan.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 uppercase">{plan.name}</h3>
                                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4 bg-slate-800 py-1 px-3 rounded-full inline-block">
                                    {plan.duration}
                                </div>
                                <div className={`text-3xl md:text-3xl font-extrabold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-4`}>
                                    {plan.price}
                                </div>
                                <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{plan.desc}</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check size={18} className="text-green-400 mt-0.5 shrink-0" />
                                        <span className="text-slate-300 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="/lien-he"
                                rel="noreferrer"
                                className={`w-full py-4 rounded-xl text-white font-bold text-center transition-all flex items-center justify-center gap-2 shadow-lg ${plan.btnColor} transform group-hover:-translate-y-1`}
                            >
                                {t.detailedPricing.detailsButton} <ArrowRight size={18} />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Monthly Care Package */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="rounded-3xl p-1 bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200"
                >
                    <div className="bg-slate-900 rounded-[22px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white border-2 border-slate-900"><Zap size={20} /></div>
                                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white border-2 border-slate-900"><Crown size={20} /></div>
                                    <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-white border-2 border-slate-900"><Gem size={20} /></div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">{t.detailedPricing.monthlyPackage.title}</h3>
                            </div>
                            <p className="text-slate-300 text-lg mb-2">
                                {t.detailedPricing.monthlyPackage.description}
                            </p>
                            <p className="text-slate-400 text-sm">
                                {t.detailedPricing.monthlyPackage.savings} <span className="text-green-400 font-bold">{t.detailedPricing.monthlyPackage.savingsAmount}</span> mỗi tháng so với thuê nhân sự lẻ.
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-4 min-w-[250px]">
                            <div className="text-right">
                                <div className="text-4xl font-bold text-white">{t.detailedPricing.monthlyPackage.price}</div>
                                <div className="text-slate-400 text-sm text-right">{t.detailedPricing.monthlyPackage.perMonth}</div>
                            </div>

                            <a
                                href="https://zalo.me/0923451469"
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-600 text-white font-bold hover:shadow-lg hover:shadow-orange-500/25 transition-all w-full text-center"
                            >
                                {t.detailedPricing.detailsButton}
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
