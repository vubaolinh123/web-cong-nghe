"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useFacebookGroupTranslations();

    return (
        <section className="py-20 bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-2">{t.faq.title}</h2>
                    <div className="text-white text-3xl font-bold bg-blue-600 inline-block px-3 py-1">{t.faq.subtitle}</div>
                </div>

                <div className="space-y-4">
                    {t.faq.questions.map((item, index) => (
                        <div key={index} className="border-b border-slate-800">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex items-center justify-between gap-4 text-left hover:text-green-400 transition-colors focus:outline-none"
                            >
                                <h3 className={`text-base md:text-lg font-bold ${openIndex === index ? 'text-green-500' : 'text-slate-300'}`}>
                                    {item.q}
                                </h3>
                                <div className={`p-1 rounded-full ${openIndex === index ? 'bg-green-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
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
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-slate-400 leading-relaxed pr-8">
                                            {item.a}
                                        </p>
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
