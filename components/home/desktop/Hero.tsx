"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Power } from "lucide-react";
import { Container, Button } from "../../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef } from "react";
import { useSectionActivity } from "@/hooks/useSectionActivity";

export default function Hero() {
  const { dictionary } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { isActive } = useSectionActivity(heroRef, { threshold: 0.3 });

  const stats = [
    { value: "500+", label: dictionary.homepageServices.stats.projects, icon: TrendingUp },
    { value: "98%", label: dictionary.homepageServices.stats.satisfaction, icon: Users },
    { value: "24/7", label: dictionary.hero.stats.support, icon: Zap },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* === BACKGROUND LAYERS === */}

      {/* 1. Deep Space Base */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* 2. Static dot-grid — pure CSS, zero JS, zero animation */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(34,211,238,0.45) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* 3. Glow Spheres — CSS-only (GPU: transform + opacity only) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-orb-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[90px] animate-orb-pulse-delayed" />
      </div>

      {/* 4. Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)] pointer-events-none" />

      {/* === MAIN CONTENT === */}
      <Container className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center relative">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900/70 border border-cyan-500/30 backdrop-blur-md mb-8 group hover:border-cyan-400/50 transition-colors duration-300"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
              {dictionary.hero.partnerBadge}
            </span>
            <div className="w-[1px] h-4 bg-cyan-500/30 mx-2" />
            <span className="text-xs text-cyan-400/80 font-mono">{dictionary.hero.established}</span>
          </motion.div>

          {/* Titles */}
          <div className="mb-8 relative">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-[0_2px_30px_rgba(34,211,238,0.5)]"
            >
              <span className="block mb-2">{dictionary.hero.title1}</span>
              <span className="block">
                <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">
                  {dictionary.hero.title2} & {dictionary.hero.title3}
                </span>
              </span>
            </motion.h1>

            {/* Subtle glow behind title — static, no animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/10 blur-[80px] -z-10 rounded-full pointer-events-none" />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            {dictionary.hero.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/lien-he">
              <Button
                size="lg"
                className="relative group h-14 pl-8 pr-10 bg-slate-900/70 overflow-hidden border border-cyan-500/50 hover:border-cyan-400/80 rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.4)]"
              >
                {/* Button Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Button Content */}
                <div className="relative flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className={`absolute inset-0 rounded-full ${isActive ? "animate-spin-slow" : ""} bg-gradient-to-tr from-transparent via-white/50 to-transparent`} />
                    <Power size={16} className="text-white relative z-10" />
                  </div>
                  <span className="text-lg font-medium tracking-wide text-cyan-100 group-hover:text-white transition-colors">
                    {dictionary.hero.ctaPrimary}
                  </span>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Button>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 md:gap-16 mt-16 pt-10 border-t border-cyan-500/20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="flex items-center justify-center gap-2 mb-2 text-cyan-500/70 group-hover:text-cyan-400 transition-colors duration-300">
                  <stat.icon size={16} />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
