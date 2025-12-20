"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const partnerCategories = [
    {
        name: "Tech & Media",
        key: "tech",
        color: "from-blue-400 to-cyan-500",
        partners: [
            { name: "FPT", logo: "/image/partners/fpt.png" },
            { name: "Vingroup", logo: "/image/partners/vingroup.png" },
            { name: "Viettel", logo: "/image/partners/viettel.png" },
            { name: "VNG", logo: "/image/partners/vng.png" },
            { name: "Yeah1", logo: "/image/partners/yeah1.png" },
        ],
    },
    {
        name: "Banking & Finance",
        key: "banking",
        color: "from-green-400 to-emerald-500",
        partners: [
            { name: "ACB", logo: "/image/partners/acb.png" },
            { name: "VPBank", logo: "/image/partners/vpbank.png" },
            { name: "VIB", logo: "/image/partners/vib.png" },
            { name: "Sacombank", logo: "/image/partners/sacombank.png" },
        ],
    },
    {
        name: "F&B",
        key: "fnb",
        color: "from-orange-400 to-red-500",
        partners: [
            { name: "Highlands Coffee", logo: "/image/partners/highlands.png" },
            { name: "McDonald's", logo: "/image/partners/mcdonalds.png" },
            { name: "The Coffee House", logo: "/image/partners/coffeehouse.png" },
            { name: "Starbucks", logo: "/image/partners/starbucks.png" },
            { name: "KFC", logo: "/image/partners/kfc.png" },
        ],
    },
    {
        name: "Travel & Real Estate",
        key: "travel",
        color: "from-purple-400 to-pink-500",
        partners: [
            { name: "Vietnam Airlines", logo: "/image/partners/vietnamairlines.png" },
            { name: "Vietjet Air", logo: "/image/partners/vietjetair.png" },
            { name: "Novaland", logo: "/image/partners/novaland.png" },
            { name: "Vinpearl", logo: "/image/partners/vinpearl.png" },
        ],
    },
];

export default function MobilePartner() {
    const { t } = useLanguage();

    return (
        <section className="py-16 bg-slate-950 overflow-hidden">
            <div className="px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-3">
                        {t("partners.title1")}{" "}
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            {t("partners.title2")}
                        </span>
                    </h2>
                    <p className="text-slate-400 text-sm">{t("partners.description")}</p>
                </motion.div>

                {/* Partner Categories */}
                <div className="flex flex-col gap-6">
                    {partnerCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${category.color}`} />
                                <h3 className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                    {category.name}
                                </h3>
                            </div>

                            {/* Partner Grid */}
                            <div className="grid grid-cols-4 gap-2">
                                {category.partners.map((partner, index) => (
                                    <PartnerItem key={index} partner={partner} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PartnerItem({ partner }: { partner: { name: string; logo: string } }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-2 flex items-center justify-center aspect-square">
            {!imgError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                    onError={() => setImgError(true)}
                />
            ) : (
                <span className="text-cyan-400 font-bold text-[10px] text-center leading-tight">
                    {partner.name.split(" ").map((n) => n[0]).join("").substring(0, 3).toUpperCase()}
                </span>
            )}
        </div>
    );
}
