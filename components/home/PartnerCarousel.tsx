"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

const partners = [
    // Marketing Agency
    { name: "LeBros", logo: "https://logo.clearbit.com/lebros.vn" },
    { name: "Yeah1", logo: "https://logo.clearbit.com/yeah1.com" },
    { name: "Mix Digital", logo: "https://logo.clearbit.com/mixdigital.vn" },
    { name: "Vici Agency", logo: "https://logo.clearbit.com/vici.vn" },
    { name: "Blue Sky", logo: "https://logo.clearbit.com/bluesky.vn" },
    { name: "Unic", logo: "https://logo.clearbit.com/unic.com.vn" },

    // Finance & Banking
    { name: "ACB", logo: "https://logo.clearbit.com/acb.com.vn" },
    { name: "VPBank", logo: "https://logo.clearbit.com/vpbank.com.vn" },
    { name: "VIB", logo: "https://logo.clearbit.com/vib.com.vn" },
    { name: "VietCredit", logo: "https://logo.clearbit.com/vietcredit.vn" },
    { name: "SCB", logo: "https://logo.clearbit.com/scb.com.vn" },
    { name: "Sacombank", logo: "https://logo.clearbit.com/sacombank.com.vn" },

    // F&B
    { name: "Pizza 4P's", logo: "https://logo.clearbit.com/pizza4ps.com" },
    { name: "McDonald's", logo: "https://logo.clearbit.com/mcdonalds.vn" },
    { name: "The Coffee House", logo: "https://logo.clearbit.com/thecoffeehouse.com" },
    { name: "Ofood", logo: "https://logo.clearbit.com/ofood.vn" },
    { name: "Royaltea", logo: "https://logo.clearbit.com/royaltea.vn" },
    { name: "Gemini Coffee", logo: "https://logo.clearbit.com/geminicoffee.vn" },

    // Travel & Real Estate
    { name: "Up Travel", logo: "https://logo.clearbit.com/uptravel.vn" },
    { name: "Justfly", logo: "https://logo.clearbit.com/justfly.vn" },
    { name: "Cen Land", logo: "https://logo.clearbit.com/cenland.vn" },
    { name: "JJLand", logo: "https://logo.clearbit.com/jjland.vn" },
];

const PartnerCarousel = () => {
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
                        Đối Tác <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Hợp Tác</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                        Được tin tưởng bởi các doanh nghiệp hàng đầu trong nhiều lĩnh vực
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
        <div className="flex flex-col items-center justify-center gap-6 w-36 sm:w-44 group cursor-pointer relative shrink-0">
            {/* Logo Container */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 bg-slate-900/50 rounded-3xl p-6 flex items-center justify-center backdrop-blur-sm border border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-slate-800/80 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
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
            </div>
            <span className="text-sm font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100 absolute -bottom-10 whitespace-nowrap">{partner.name}</span>
        </div>
    )
}

export default PartnerCarousel;
