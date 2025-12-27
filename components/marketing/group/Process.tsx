"use client";

import { motion } from "framer-motion";
import {
    MessageCircle,
    FileSignature,
    FileText,
    BadgeDollarSign,
    RefreshCcw,
    Sparkles
} from "lucide-react";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";

const stepIcons = [MessageCircle, FileSignature, FileText, BadgeDollarSign, RefreshCcw];
const stepColors = [
    "from-cyan-500 to-blue-500",
    "from-blue-500 to-purple-500",
    "from-purple-500 to-pink-500",
    "from-pink-500 to-rose-500",
    "from-rose-500 to-orange-500",
];

export default function Process() {
    const t = useFacebookGroupTranslations();

    const steps = t.process.steps.map((step, index) => ({
        ...step,
        icon: stepIcons[index],
        color: stepColors[index],
    }));

    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6">
                        <Sparkles size={16} />
                        <span>QUY TRÌNH TRIỂN KHAI</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t.process.title}{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {t.process.titleHighlight}
                        </span>
                    </h2>
                </motion.div>

                {/* Roadmap Timeline */}
                <div className="relative">
                    {/* Horizontal Line - Desktop */}
                    <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full" />

                    {/* Vertical Line - Mobile */}
                    <div className="lg:hidden absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full" />

                    {/* Steps */}
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:flex-1"
                            >
                                {/* Step Circle */}
                                <div className="relative z-10">
                                    <motion.div
                                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-4 border-slate-900`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <step.icon size={28} className="text-white" />
                                    </motion.div>

                                    {/* Step Number Badge */}
                                    <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center`}>
                                        <span className="text-xs font-bold text-cyan-400">{index + 1}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:mt-6 lg:text-center flex-1">
                                    <h3 className={`text-lg font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Arrow Connector - Desktop only */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 -translate-y-1/2" style={{ left: `${(index + 1) * 20}%`, transform: 'translateX(-50%)' }}>
                                        {/* Arrow is part of the gradient line */}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
