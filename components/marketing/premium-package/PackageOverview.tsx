"use client";

import { motion } from "framer-motion";
import { Facebook, Music2, Users, Palette, Search, Headset } from "lucide-react";
import { useMarketingPremiumTranslations } from "@/lib/i18n/pages/marketing-premium";

const iconMap: { [key: string]: any } = {
    facebook: Facebook,
    tiktok: Music2,
    users: Users,
    palette: Palette,
    search: Search,
    headset: Headset,
};

export default function PackageOverview() {
    const t = useMarketingPremiumTranslations();

    return (
        <section className="py-16 sm:py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                        {t.overview.title}{" "}
                        <span className="text-cyan-400">{t.overview.titleHighlight}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {t.overview.services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Facebook;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-4 sm:p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all group"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-400">
                                    {service.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
