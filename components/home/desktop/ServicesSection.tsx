"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Code2, ArrowRight, CheckCircle, Sparkles, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "marketing",
      icon: Megaphone,
      title: t("homepageServices.marketing.title"),
      description: t("homepageServices.marketing.description"),
      color: "from-green-400 to-emerald-500",
      bgGlow: "bg-green-500/20",
      borderColor: "border-green-500/50",
      href: "/dich-vu-marketing",
      badge: t("homepageServices.badges.marketing"),
      badgeIcon: TrendingUp,
      image: "/image/real/service_marketing.jpg",
      stats: { projects: "200+", satisfaction: "98%" },
      features: [
        t("homepageServices.marketing.features.ads"),
        t("homepageServices.marketing.features.fanpage"),
        t("homepageServices.marketing.features.content"),
        t("homepageServices.marketing.features.seo"),
      ],
    },
    {
      id: "tech",
      icon: Code2,
      title: t("homepageServices.tech.title"),
      description: t("homepageServices.tech.description"),
      color: "from-blue-400 to-cyan-500",
      bgGlow: "bg-blue-500/20",
      borderColor: "border-cyan-500/50",
      href: "/dich-vu-cong-nghe",
      badge: t("homepageServices.badges.tech"),
      badgeIcon: Zap,
      image: "/image/real/service_tech.jpg",
      stats: { projects: "50+", satisfaction: "99%" },
      features: [
        t("homepageServices.tech.features.automation"),
        t("homepageServices.tech.features.chatbot"),
        t("homepageServices.tech.features.custom"),
        t("homepageServices.tech.features.integration"),
      ],
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-slate-950 overflow-hidden py-20 sm:py-24 lg:py-0 lg:h-screen">
      {/* === SIMPLE BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static Grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e08_1px,transparent_1px),linear-gradient(to_bottom,#22c55e08_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 40%, transparent 100%)',
          }}
        />

        {/* Static Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 mb-4"
          >
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm font-bold text-green-400 tracking-wider uppercase">
              {t("homepageServices.badge")}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t("homepageServices.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              {t("homepageServices.titleHighlight")}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: Service Cards */}
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                onClick={() => setActiveService(index)}
                className={`group relative p-5 sm:p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer overflow-hidden ${activeService === index
                  ? `bg-slate-900/80 ${service.borderColor} shadow-[0_0_40px_rgba(6,182,212,0.2)]`
                  : "bg-slate-900/40 border-slate-800 hover:bg-slate-900/60 hover:border-slate-700"
                  }`}
              >
                {/* Active Glow */}
                {activeService === index && (
                  <div className={`absolute inset-0 ${service.bgGlow} opacity-30 blur-xl`} />
                )}

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-xl font-bold transition-colors ${activeService === index ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}>
                        {service.title}
                      </h3>

                      {/* Badge */}
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${activeService === index
                        ? `bg-gradient-to-r ${service.color} text-white`
                        : "bg-slate-800 text-slate-400"
                        }`}>
                        <service.badgeIcon className="w-3 h-3" />
                        {service.badge}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>

                    {/* Features - Animated */}
                    <AnimatePresence>
                      {activeService === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-2 gap-2 mb-4"
                        >
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                                <CheckCircle className="w-2.5 h-2.5 text-white" />
                              </div>
                              <span className="text-xs text-slate-300">{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA Link */}
                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link
                          href={service.href}
                          className={`inline-flex items-center gap-2 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color} hover:gap-3 transition-all`}
                        >
                          {t("homepageServices.exploreButton")}
                          <ArrowRight className={`w-4 h-4 ${index === 0 ? 'text-green-400' : 'text-cyan-400'}`} />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Dynamic Image Display */}
          <div className="relative flex items-center justify-center h-[400px] lg:h-[500px]">
            {/* Static Background Glow */}
            <div className={`absolute inset-0 ${services[activeService].bgGlow} rounded-full blur-[80px] opacity-30`} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0
                }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5, filter: "blur(10px)" }}
                transition={{
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotate: { duration: 0.4 }
                }}
                className="relative w-full h-full flex items-center justify-center p-4"
              >
                <div className="relative w-full h-full max-h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Stats Card */}
            <motion.div
              key={`stats-${activeService}`}
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl hidden sm:block"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">{t("homepageServices.stats.projects")}</div>
                  <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${services[activeService].color}`}>
                    {services[activeService].stats.projects}
                  </div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">{t("homepageServices.stats.satisfaction")}</div>
                  <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${services[activeService].color}`}>
                    {services[activeService].stats.satisfaction}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
