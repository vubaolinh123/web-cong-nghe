"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    t: (key: string) => string;
}

export default function SectionHeader({ t }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-green-500/10 border border-green-500/30 mb-6 backdrop-blur-md shadow-lg shadow-green-500/10"
            >
                <motion.span
                    className="w-2.5 h-2.5 rounded-full bg-green-500"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                        boxShadow: ["0 0 0px #22c55e", "0 0 15px #22c55e", "0 0 0px #22c55e"],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 uppercase tracking-widest">
                    {t('caseStudies.badge') || 'Case Studies'}
                </span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-6xl font-black mb-6"
            >
                <span className="text-white">{t('caseStudies.title.prefix') || 'Dự Án'} </span>
                <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundSize: "200% 200%"
                    }}
                >
                    {t('caseStudies.title.highlight') || 'Thành Công'}
                </motion.span>
            </motion.h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                {t('caseStudies.description').replace('{roi}', t('caseStudies.descriptionValues.roi')).replace('{growth}', t('caseStudies.descriptionValues.growth')) || 'Khám phá các dự án thành công của chúng tôi'}
            </p>
        </motion.div>
    );
}
