"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useFacebookGroupTranslations();

    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6">
                        <HelpCircle size={16} />
                        <span>HỖ TRỢ</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                        {t.faq.title}
                    </h2>
                    <p className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
                        {t.faq.subtitle}
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {t.faq.questions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`rounded-xl border transition-all duration-300 ${openIndex === index ? 'bg-slate-900/80 border-cyan-500/50' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                            >
                                <h3 className={`text-sm md:text-base font-bold transition-colors ${openIndex === index ? 'text-cyan-400' : 'text-slate-300'}`}>
                                    {item.q}
                                </h3>
                                <div className={`p-1.5 rounded-full shrink-0 transition-all ${openIndex === index ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-5 px-5 text-slate-400 leading-relaxed text-sm">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
