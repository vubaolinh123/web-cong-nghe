"use client";

import { motion } from "framer-motion";
import { Rocket, MessageSquare, Share2, Monitor, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function WhyUsSection() {
  const { dictionary } = useLanguage();

  const reasons = [
    {
      icon: Rocket,
      title: dictionary.features.items.exclusiveAgency.title,
      description: dictionary.features.items.exclusiveAgency.description,
      color: "from-green-400 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-500",
      glowBg: "bg-green-500/20",
      highlights: ["Độc quyền tại Việt Nam", "Công nghệ mới nhất"],
    },
    {
      icon: MessageSquare,
      title: dictionary.features.items.uniqueIdeas.title,
      description: dictionary.features.items.uniqueIdeas.description,
      color: "from-blue-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
      glowBg: "bg-blue-500/20",
      highlights: ["Sáng tạo đột phá", "Chiến lược riêng biệt"],
    },
    {
      icon: Share2,
      title: dictionary.features.items.qualityPromotion.title,
      description: dictionary.features.items.qualityPromotion.description,
      color: "from-purple-400 to-pink-500",
      iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
      glowBg: "bg-purple-500/20",
      highlights: ["Hiệu quả cao", "Tối ưu chi phí"],
    },
    {
      icon: Monitor,
      title: dictionary.features.items.experience.title,
      description: dictionary.features.items.experience.description,
      color: "from-orange-400 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
      glowBg: "bg-orange-500/20",
      highlights: ["10+ năm kinh nghiệm", "500+ dự án"],
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-0 lg:min-h-screen lg:h-full flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Static Background Effects - Smaller on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6 sm:mb-8 lg:mb-10"
        >
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3 block">
            {dictionary.features.subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {dictionary.features.title1}{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              {dictionary.features.title2}
            </span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 transition-all duration-300 h-full overflow-hidden">
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 ${reason.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="relative mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${reason.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                    {reason.description}
                  </p>

                  {/* Highlights - No animation */}
                  <div className="space-y-1.5">
                    {reason.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle size={12} className="text-cyan-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
