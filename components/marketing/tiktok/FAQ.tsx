"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTiktokShopTranslations } from "@/lib/i18n/pages/tiktok-shop";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useTiktokShopTranslations();

    return (
        <section className="py-20 bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase">{t.faq.title}</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-4">
                    {t.faq.questions.map((item, index) => (
                        <div key={index} className="border border-slate-800 rounded-2xl bg-slate-900/50 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-slate-800 transition-colors focus:outline-none"
                            >
                                <h3 className={`text-base md:text-lg font-bold ${openIndex === index ? 'text-pink-500' : 'text-slate-300'}`}>
                                    {item.q}
                                </h3>
                                <div className={`p-1 rounded-full ${openIndex === index ? 'bg-pink-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="border-t border-slate-800"
                                    >
                                        <div className="p-6 text-slate-400 leading-relaxed">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
