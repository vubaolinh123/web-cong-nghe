"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Rocket, Zap, TrendingUp, Users } from "lucide-react";
import { Container, Button } from "../../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useRef } from "react";

export default function Hero() {
  const { dictionary } = useLanguage();
  const { isDesktop, isMobile } = useIsMobile();
  const heroRef = useRef<HTMLElement>(null);

  const stats = [
    { value: "500+", label: "Dự án hoàn thành", icon: TrendingUp },
    { value: "98%", label: "Khách hàng hài lòng", icon: Users },
    { value: "24/7", label: "Hỗ trợ tư vấn", icon: Zap },
  ];

  return (
    <section
      ref={heroRef}
      className="relative h-full min-h-screen flex items-center justify-center overflow-x-clip bg-slate-950"
    >
      {/* === SIMPLE BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spotlights */}
        {isDesktop && (
          <>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(59, 130, 246, 0.4)" />
            <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="rgba(34, 197, 94, 0.3)" />
          </>
        )}

        {/* Static Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
          }}
        />

        {/* Static Gradient Orbs */}
        <div className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-48 h-48' : 'w-[500px] h-[500px]'} bg-blue-500/15 rounded-full blur-[100px]`} />
        <div className={`absolute bottom-1/4 right-1/4 ${isMobile ? 'w-48 h-48' : 'w-[400px] h-[400px]'} bg-green-500/15 rounded-full blur-[80px]`} />
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 rounded-full blur-[120px]" />
        )}

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      <Container className="relative z-10">
        <div className={`grid grid-cols-1 ${isDesktop ? 'lg:grid-cols-2 gap-8 lg:gap-12' : 'gap-6'} items-center ${isDesktop ? 'min-h-[calc(100vh-100px)]' : 'py-20 sm:py-28'}`}>
          {/* Left: Content */}
          <div className={`text-center ${isDesktop ? 'lg:text-left order-2 lg:order-1' : ''}`}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/30 backdrop-blur-sm text-xs sm:text-sm font-medium mb-6"
            >
              <Sparkles size={isMobile ? 14 : 16} className="text-yellow-400" />
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-bold">
                AI-First Company
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
            >
              <span className="block">{dictionary.hero.title1}</span>
              <span className="block mt-2">
                <span className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {dictionary.hero.title2}
                </span>
                {" "} & {" "}
                <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {dictionary.hero.title3}
                </span>
              </span>
              <span className="block mt-2">{dictionary.hero.title4}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {dictionary.hero.subtitle}
            </motion.p>

            {/* Stats Row - Mobile friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/lien-he">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="w-full sm:w-auto min-w-[200px] group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                    <Rocket className="group-hover:rotate-12 transition-transform" size={isMobile ? 18 : 20} />
                    {dictionary.hero.ctaPrimary}
                    <ArrowRight size={isMobile ? 18 : 20} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] group border-slate-700 hover:border-blue-500/50 bg-slate-900/50 backdrop-blur-sm">
                  <Play size={isMobile ? 18 : 20} className="group-hover:scale-110 transition-transform text-blue-400" />
                  {dictionary.hero.ctaSecondary}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Empty placeholder for grid layout */}
          {isDesktop && <div className="order-1 lg:order-2" />}
        </div>
      </Container>

      {/* Right: 3D Scene - Desktop only */}
      {isDesktop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-0 right-0 w-1/2 h-full z-20 pointer-events-none"
        >
          <div className="relative w-full h-full pointer-events-auto">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
              enableMouseTracking={true}
            />
          </div>
        </motion.div>
      )}

      {/* Static Scroll Indicator */}
      {isDesktop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2">
            <div className="w-1.5 h-2 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
