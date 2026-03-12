"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Power } from "lucide-react";
import { Container, Button } from "../../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/**
 * Desktop Hero — performance-first rewrite.
 *
 * ZERO: blur(), backdrop-filter, drop-shadow, framer-motion repeat:Infinity,
 *       useSpring, useMotionValue, requestAnimationFrame, onMouseMove.
 *
 * Visual style: dark space + dot grid + soft gradient glow (opacity only) + clean text.
 * All entrance animations are one-shot (play once, stop).
 */
export default function Hero() {
  const { dictionary } = useLanguage();

  const stats = [
    { value: "500+", label: dictionary.homepageServices.stats.projects, icon: TrendingUp },
    { value: "98%", label: dictionary.homepageServices.stats.satisfaction, icon: Users },
    { value: "24/7", label: dictionary.hero.stats.support, icon: Zap },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* === BACKGROUND — all static, no animation === */}

      {/* Dot grid — pure CSS pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Gradient glow — static, no blur filter, just a large soft gradient */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/[0.07] to-blue-600/[0.04] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-purple-500/[0.06] to-indigo-600/[0.03] pointer-events-none" />

      {/* Vignette — radial gradient, no filter */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)] pointer-events-none" />

      {/* === CONTENT === */}
      <Container className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge — no backdrop-blur */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800/80 border border-cyan-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-200">
              {dictionary.hero.partnerBadge}
            </span>
            <div className="w-[1px] h-4 bg-cyan-500/30 mx-2" />
            <span className="text-xs text-cyan-400/80 font-mono">{dictionary.hero.established}</span>
          </motion.div>

          {/* Title — no drop-shadow, no animate-gradient-text, no blur glow behind */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8"
          >
            <span className="block mb-2">{dictionary.hero.title1}</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {dictionary.hero.title2} & {dictionary.hero.title3}
            </span>
          </motion.h1>

          {/* Subtitle — no drop-shadow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            {dictionary.hero.subtitle}
          </motion.p>

          {/* CTA — no animate-spin-slow, no hover:shadow-[50px_glow] */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <Link href="/lien-he">
              <Button
                size="lg"
                className="relative group h-14 pl-8 pr-10 bg-slate-900/80 overflow-hidden border border-cyan-500/50 hover:border-cyan-400/80 rounded-full transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500">
                    <Power size={16} className="text-white" />
                  </div>
                  <span className="text-lg font-medium tracking-wide text-cyan-100 group-hover:text-white transition-colors">
                    {dictionary.hero.ctaPrimary}
                  </span>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Button>
            </Link>
          </motion.div>

          {/* Stats — simple, no continuous animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 md:gap-16 mt-16 pt-10 border-t border-cyan-500/20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2 text-cyan-500/70">
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
