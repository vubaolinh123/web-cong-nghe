"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Sparkles, Star } from "lucide-react";

const partners = [
    // Tech & Media
    { name: "FPT", logo: "/image/partners/fpt.png" },
    { name: "Vingroup", logo: "/image/partners/vingroup.png" },
    { name: "Viettel", logo: "/image/partners/viettel.png" },
    { name: "VNG", logo: "/image/partners/vng.png" },
    { name: "Yeah1", logo: "/image/partners/yeah1.png" },

    // Banking
    { name: "ACB", logo: "/image/partners/acb.png" },
    { name: "VPBank", logo: "/image/partners/vpbank.png" },
    { name: "VIB", logo: "/image/partners/vib.png" },
    { name: "Sacombank", logo: "/image/partners/sacombank.png" },

    // F&B
    { name: "Highlands Coffee", logo: "/image/partners/highlands.png" },
    { name: "McDonald's", logo: "/image/partners/mcdonalds.png" },
    { name: "The Coffee House", logo: "/image/partners/coffeehouse.png" },
    { name: "Starbucks", logo: "/image/partners/starbucks.png" },
    { name: "KFC", logo: "/image/partners/kfc.png" },

    // Travel & Real Estate
    { name: "Vietnam Airlines", logo: "/image/partners/vietnamairlines.png" },
    { name: "Vietjet Air", logo: "/image/partners/vietjetair.png" },
    { name: "Novaland", logo: "/image/partners/novaland.png" },
    { name: "Vinpearl", logo: "/image/partners/vinpearl.png" },
];

const PartnerCarousel = () => {
    const { t } = useLanguage();

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center bg-slate-950 overflow-hidden py-20 lg:py-0 lg:h-screen">
            {/* === SIMPLE BACKGROUND === */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Radial gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950" />

                {/* Static Grid */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"
                    style={{
                        maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 40%, transparent 100%)',
                    }}
                />

                {/* Static Orbs */}
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[80px]" />
            </div>

            {/* Header */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-bold text-blue-400 tracking-wider uppercase">
                            Được tin dùng bởi
                        </span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {t("partners.title1")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            {t("partners.title2")}
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                        {t("partners.description")}
                    </p>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="relative flex flex-col gap-8 overflow-hidden w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10" />

                {/* First Row - Moving Left */}
                <motion.div
                    className="flex gap-8 sm:gap-12 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 35,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <PartnerItem key={`row1-${index}-${partner.name}`} partner={partner} />
                    ))}
                </motion.div>

                {/* Second Row - Moving Right */}
                <motion.div
                    className="flex gap-8 sm:gap-12 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...partners.slice().reverse(), ...partners.slice().reverse(), ...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
                        <PartnerItem key={`row2-${index}-${partner.name}`} partner={partner} />
                    ))}
                </motion.div>
            </div>

            {/* Bottom Stats */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-10 max-w-4xl mx-auto px-4 mt-12 sm:mt-16"
            >
                <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
                    {[
                        { value: "20+", label: "Đối tác tin cậy" },
                        { value: "15+", label: "Ngành nghề đa dạng" },
                        { value: "5+", label: "Năm hợp tác" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: "spring" }}
                        >
                            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

const PartnerItem = ({ partner }: { partner: { name: string, logo: string } }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            className="flex flex-col items-center justify-center w-28 sm:w-36 group cursor-pointer shrink-0"
            whileHover={{ scale: 1.05 }}
        >
            {/* Logo Container */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-slate-900/60 rounded-2xl p-4 sm:p-5 flex items-center justify-center backdrop-blur-sm border border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-slate-800/80 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-300 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <span className="text-cyan-400 font-bold text-xl text-center leading-tight relative z-10">
                        {partner.name.split(' ').map(n => n[0]).join('').substring(0, 3).toUpperCase()}
                    </span>
                )}

                {/* Name overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/95 to-transparent py-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="text-[10px] sm:text-xs font-semibold text-cyan-400 text-center block truncate">
                        {partner.name}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export default PartnerCarousel;
