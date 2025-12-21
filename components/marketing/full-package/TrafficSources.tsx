"use client";

import { motion } from "framer-motion";
import { Search, Share2, Mail, Globe, Users, MessageCircle } from "lucide-react";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";

const sourceConfigs = [
    { icon: Search, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
    { icon: Users, color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
    { icon: Share2, color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
    { icon: Mail, color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
    { icon: Globe, color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
    { icon: MessageCircle, color: "text-pink-400", bg: "bg-pink-400/10 border-pink-400/20" },
];

export default function TrafficSources() {
    const t = useMarketingFullPackageTranslations();

    const sources = t.trafficSources.sources.map((source, index) => ({
        ...sourceConfigs[index],
        title: source.title,
        desc: source.desc,
    }));

    return (
        <section className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                {t.trafficSources.title} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                                    {t.trafficSources.titleHighlight}
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                {t.trafficSources.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sources.map((source, index) => (
                                <div key={index} className={`p-5 rounded-xl border ${source.bg} hover:bg-opacity-20 transition-all cursor-default`}>
                                    <div className={`w-10 h-10 rounded-lg ${source.bg} flex items-center justify-center mb-3 ${source.color}`}>
                                        <source.icon size={20} />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">{source.title}</h3>
                                    <p className="text-slate-400 text-sm leading-snug">
                                        {source.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full" />
                        <img
                            src="/image/real/traffic_sources.jpg"
                            alt="Traffic Sources Network"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border border-orange-500/20"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
