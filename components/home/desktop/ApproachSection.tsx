"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ApproachSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t("approach.steps.discovery.title"),
      subtitle: t("approach.steps.discovery.subtitle"),
      description: t("approach.steps.discovery.description"),
      color: "from-cyan-400 to-blue-500",
      bgGlow: "bg-cyan-500/20",
      image: "/image/real/approach_discovery.jpg"
    },
    {
      number: "02",
      title: t("approach.steps.strategy.title"),
      subtitle: t("approach.steps.strategy.subtitle"),
      description: t("approach.steps.strategy.description"),
      color: "from-green-400 to-emerald-500",
      bgGlow: "bg-green-500/20",
      image: "/image/real/approach_strategy.jpg"
    },
    {
      number: "03",
      title: t("approach.steps.development.title"),
      subtitle: t("approach.steps.development.subtitle"),
      description: t("approach.steps.development.description"),
      color: "from-purple-400 to-pink-500",
      bgGlow: "bg-purple-500/20",
      image: "/image/real/approach_development.jpg"
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden py-20 sm:py-24 lg:py-0 lg:h-screen"
    >
      {/* === SIMPLE BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Static Grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"
          style={{
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
          }}
        />

        {/* Static Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />

        {/* Static Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full">
          <svg className="w-full h-4" viewBox="0 0 1200 16" fill="none">
            <motion.path
              d="M0 8 H1200"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400 tracking-wider uppercase">
              {t("approach.badge")}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t("approach.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              {t("approach.titleHighlight")}
            </span>
          </h2>
        </motion.div>

        {/* 3D Visual Timeline - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 h-full">
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${step.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                  {/* Step Number Badge */}
                  <motion.div
                    className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-white text-lg shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Connection Arrow - Hidden on mobile */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 w-8 h-8 bg-slate-900 border border-slate-700 rounded-full items-center justify-center z-20">
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} uppercase tracking-wider mb-3`}>
                    {step.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden`}>
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 rotate-45 translate-x-16 -translate-y-16`} />
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
