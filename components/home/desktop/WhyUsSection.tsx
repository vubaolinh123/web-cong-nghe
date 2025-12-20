"use client";

import { motion } from "framer-motion";
import { Rocket, MessageSquare, Share2, Monitor, CheckCircle, ShieldCheck, Zap, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export default function WhyUsSection() {
  const { dictionary, t } = useLanguage();

  const reasons = [
    {
      icon: Rocket,
      title: dictionary.features.items.exclusiveAgency.title,
      description: dictionary.features.items.exclusiveAgency.description,
      color: "from-green-400 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-500",
      stat: "No.1",
      statLabel: t("whyUs.stats.inVietnam")
    },
    {
      icon: MessageSquare,
      title: dictionary.features.items.uniqueIdeas.title,
      description: dictionary.features.items.uniqueIdeas.description,
      color: "from-blue-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
      stat: "24/7",
      statLabel: t("whyUs.stats.support")
    },
    {
      icon: Share2,
      title: dictionary.features.items.qualityPromotion.title,
      description: dictionary.features.items.qualityPromotion.description,
      color: "from-purple-400 to-pink-500",
      iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
      stat: "200%",
      statLabel: t("whyUs.stats.efficiency")
    },
    {
      icon: Monitor,
      title: dictionary.features.items.experience.title,
      description: dictionary.features.items.experience.description,
      color: "from-orange-400 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
      stat: "10+",
      statLabel: t("whyUs.stats.yearsExp")
    },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image/real/why_us_bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-2 block">
            {dictionary.features.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            <span className="block">{dictionary.features.title1}</span>
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              {dictionary.features.title2}
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout - Optimized for height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 lg:max-h-[60vh] pb-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col
                ${index === 0 || index === 3 ? "lg:translate-y-8" : ""}
              `} // Staggered grid effect
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${reason.color} shadow-lg group-hover:scale-110 transition-transform`}>
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>{reason.stat}</div>
                  <div className="text-xs text-slate-400 uppercase">{reason.statLabel}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {reason.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {reason.description}
              </p>

              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  className={`h-full bg-gradient-to-r ${reason.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
