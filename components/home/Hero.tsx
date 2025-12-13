"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Rocket } from "lucide-react";
import { Container, Button } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Hero() {
  const { dictionary } = useLanguage();
  const { isDesktop, isMobile } = useIsMobile();

  return (
    <section className="relative h-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Optimized Background Effects - Reduced on mobile */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Smaller on mobile */}
        <div className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-blue-500/30 rounded-full blur-3xl animate-orb-pulse`} />
        <div className={`absolute bottom-1/4 right-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-cyan-500/20 rounded-full blur-3xl animate-orb-pulse-delayed`} />
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 rounded-full blur-3xl animate-slow-rotate" />
        )}

        {/* Static Grid Pattern - No animation needed */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Particles - Hidden on mobile for performance */}
        {isDesktop && [
          { left: 10, top: 15, delay: '0s' },
          { left: 25, top: 75, delay: '0.5s' },
          { left: 45, top: 25, delay: '1s' },
          { left: 65, top: 85, delay: '1.5s' },
          { left: 80, top: 35, delay: '2s' },
          { left: 15, top: 55, delay: '2.5s' },
          { left: 55, top: 45, delay: '3s' },
          { left: 90, top: 65, delay: '3.5s' },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-particle-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className={`grid grid-cols-1 ${isDesktop ? 'lg:grid-cols-2 gap-8 lg:gap-12' : 'gap-6'} items-center ${isDesktop ? 'min-h-[calc(100vh-100px)]' : 'py-20 sm:py-24'}`}>
          {/* Left: Content - Full width on mobile, centered */}
          <div className={`text-center ${isDesktop ? 'lg:text-left order-2 lg:order-1' : ''}`}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={isMobile ? 14 : 16} className="text-yellow-400" />
              </motion.div>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                AI-First Company
              </span>
            </motion.div>

            {/* Main Heading - Smaller on mobile */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
            >
              <span className="block">{dictionary.hero.title1}</span>
              <span className="block mt-1 sm:mt-2">
                <span
                  className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient"
                >
                  {dictionary.hero.title2}
                </span>
                {" "} & {" "}
                <span
                  className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient"
                  style={{ animationDelay: "1.5s" }}
                >
                  {dictionary.hero.title3}
                </span>
              </span>
              <span className="block mt-1 sm:mt-2">{dictionary.hero.title4}</span>
            </motion.h1>

            {/* Subtitle - Smaller on mobile */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
            >
              {dictionary.hero.subtitle}
            </motion.p>

            {/* CTA Buttons - Stack on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Link href="/lien-he" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                  <Button size="lg" className="w-full sm:min-w-[200px] group">
                    <Rocket className="group-hover:rotate-12 transition-transform" size={isMobile ? 18 : 20} />
                    {dictionary.hero.ctaPrimary}
                    <ArrowRight size={isMobile ? 18 : 20} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:min-w-[200px] group">
                  <Play size={isMobile ? 18 : 20} className="group-hover:scale-110 transition-transform" />
                  {dictionary.hero.ctaSecondary}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: 3D Scene - HIDDEN on mobile/tablet for performance */}
          {isDesktop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[calc(100vh-100px)] w-full order-1 lg:order-2"
            >
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(59, 130, 246, 0.5)" />
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          )}
        </div>
      </Container>

      {/* Scroll Indicator - Only show on desktop */}
      {isDesktop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

