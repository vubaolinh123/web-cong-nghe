"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Megaphone, Award } from "lucide-react";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";

const benefitIcons = [Users, Megaphone, Award];

export default function Benefits() {
    const t = useFacebookGroupTranslations();

    const items = t.benefits.items.map((item, index) => ({
        ...item,
        Icon: benefitIcons[index],
    }));

    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6">
                        <Sparkles size={16} />
                        <span>LỢI ÍCH KHI SỞ HỮU GROUP</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Tại Sao Nên{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Xây Dựng Group?
                        </span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 text-center hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Icon */}
                            <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <item.Icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="relative z-10 text-xl font-bold text-white mb-4 uppercase group-hover:text-cyan-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="relative z-10 text-slate-400 leading-relaxed text-sm lg:text-base">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
