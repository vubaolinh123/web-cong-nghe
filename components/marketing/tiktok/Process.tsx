"use client";

import { motion } from "framer-motion";
import {
    MessageCircle,
    FileSignature,
    FileText,
    BadgeDollarSign,
    RefreshCcw
} from "lucide-react";
import { useTiktokShopTranslations } from "@/lib/i18n/pages/tiktok-shop";

const stepIcons = [MessageCircle, FileSignature, FileText, BadgeDollarSign, RefreshCcw];

export default function Process() {
    const t = useTiktokShopTranslations();

    const steps = t.process.steps.map((step, index) => ({
        ...step,
        icon: stepIcons[index],
    }));

    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full" />


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
                        {t.process.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">{t.process.titleHighlight}</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gradient-to-r from-cyan-500/30 via-pink-500/30 to-cyan-500/30" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-cyan-500/30 group-hover:border-pink-500 text-white flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all relative z-10">
                                        <step.icon size={32} className="text-cyan-400 group-hover:text-pink-400 transition-colors" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-xs font-bold ring-4 ring-slate-950">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
