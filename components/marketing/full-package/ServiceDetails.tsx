"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PenTool, Smartphone } from "lucide-react";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";

const contentIcons = [PenTool, Smartphone];
const contentImages = ["/image/real/content_creation.jpg", "/image/real/social_media.jpg"];

export default function ServiceDetails() {
    const t = useMarketingFullPackageTranslations();

    const content = t.serviceDetails.content.map((item, index) => ({
        title: item.title,
        desc: item.desc,
        image: contentImages[index],
        items: item.items,
        icon: contentIcons[index],
    }));

    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t.serviceDetails.title} <span className="text-cyan-400">{t.serviceDetails.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t.serviceDetails.description}
                    </p>
                </div>

                <div className="space-y-20">
                    {content.map((item, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <motion.div
                                className="flex-1"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-slate-700 group">
                                    <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex-1"
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h3>
                                </div>

                                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                                    {item.desc}
                                </p>

                                <ul className="space-y-4">
                                    {item.items.map((subItem, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-green-400 shrink-0 mt-1" size={20} />
                                            <span className="text-slate-300">{subItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
