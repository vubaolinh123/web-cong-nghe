"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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
        <section className="relative w-full h-full flex flex-col justify-center bg-slate-950 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        {t("partners.title1")} <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">{t("partners.title2")}</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                        {t("partners.description")}
                    </p>
                </motion.div>
            </div>

            <div className="relative flex overflow-hidden w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                <motion.div
                    className="flex gap-16 sm:gap-24 py-8 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Quadruple loop to ensure smoothness and width coverage */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <PartnerItem key={`${index}-${partner.name}`} partner={partner} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const PartnerItem = ({ partner }: { partner: { name: string, logo: string } }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center w-36 sm:w-44 group cursor-pointer shrink-0">
            {/* Logo Container */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-slate-900/50 rounded-3xl p-6 flex items-center justify-center backdrop-blur-sm border border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-slate-800/80 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 overflow-hidden">
                {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <span className="text-cyan-400 font-bold text-2xl text-center leading-tight">
                        {partner.name.split(' ').map(n => n[0]).join('').substring(0, 3).toUpperCase()}
                    </span>
                )}
                {/* Name overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/95 to-transparent py-3 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs sm:text-sm font-semibold text-cyan-400 text-center block truncate">{partner.name}</span>
                </div>
            </div>
        </div>
    )
}

export default PartnerCarousel;
