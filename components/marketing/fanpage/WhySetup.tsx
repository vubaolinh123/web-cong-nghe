"use client";

import { motion } from "framer-motion";
import { useFanpageTranslations } from "@/lib/i18n/pages/fanpage";

export default function WhySetup() {
    const t = useFanpageTranslations();

    return (
        <section className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t.whySetup.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{t.whySetup.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-400 max-w-4xl mx-auto text-lg leading-relaxed">
                        {t.whySetup.description}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                    {/* Visual Chart */}
                    <motion.div
                        className="flex-1 relative rounded-2xl overflow-hidden min-h-[400px]"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/image/fanpage_growth_real.jpg"
                            alt="Growth Chart"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{t.whySetup.visualTitle}</h3>
                            <p className="text-slate-300">{t.whySetup.visualDesc}</p>
                        </div>
                    </motion.div>

                    {/* Youtube Embed */}
                    <motion.div
                        className="flex-1 bg-slate-900 rounded-2xl p-2 border border-slate-800 shadow-xl"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative w-full h-full min-h-[300px] lg:min-h-full rounded-xl overflow-hidden bg-black">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/pYVX5XDybwk"
                                title="Setup Nâng Cấp FANPAGE, 1000 Đơn hàng / tháng"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
