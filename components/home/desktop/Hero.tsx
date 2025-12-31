"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Power } from "lucide-react";
import { Container, Button } from "../../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef } from "react";
import { FloatingPaths } from "@/components/ui/background-paths";

export default function Hero() {
  const { dictionary } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Custom Cursor Setup
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Smooth spring for Parallax
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const backgroundX = useTransform(springX, [-0.5, 0.5], ["30px", "-30px"]);
  const backgroundY = useTransform(springY, [-0.5, 0.5], ["30px", "-30px"]);

  const contentX = useTransform(springX, [-0.5, 0.5], ["-15px", "15px"]);
  const contentY = useTransform(springY, [-0.5, 0.5], ["-15px", "15px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);

    cursorX.set(e.clientX - left);
    cursorY.set(e.clientY - top);
  };

  const stats = [
    { value: "500+", label: "Dự án hoàn thành", icon: TrendingUp },
    { value: "98%", label: "Khách hàng hài lòng", icon: Users },
    { value: "24/7", label: "Hỗ trợ tư vấn", icon: Zap },
  ];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] cursor-none"
    >
      {/* === CUSTOM CURSOR === */}
      <motion.div
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        className="absolute pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-full border border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-spin-slow" />
          <div className="absolute inset-0 w-2 h-2 m-auto bg-white rounded-full shadow-[0_0_10px_white]" />
        </div>
      </motion.div>

      {/* === BACKGROUND LAYERS === */}

      {/* 1. Deep Space Base */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* 2. BackgroundPaths - Animated SVG Network (Parallax) */}
      <motion.div
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute inset-0"
      >
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </motion.div>

      {/* 3. Glow Spheres for Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[90px]"
        />
      </div>

      {/* 4. Vignette & Grain */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)] pointer-events-none" />

      {/* === MAIN CONTENT === */}
      <Container className="relative z-10 w-full">
        <motion.div
          style={{ x: contentX, y: contentY }}
          className="max-w-4xl mx-auto text-center relative"
        >
          {/* Text now directly on background - no glass card */}

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900/70 border border-cyan-500/30 backdrop-blur-md mb-8 group hover:border-cyan-400/50 transition-colors duration-300"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
              AI-First Technology Partner
            </span>
            <div className="w-[1px] h-4 bg-cyan-500/30 mx-2" />
            <span className="text-xs text-cyan-400/80 font-mono">EST. 2017</span>
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

            {/* Glow effect behind title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/15 blur-[80px] -z-10 rounded-full pointer-events-none" />
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
                    <div className="absolute inset-0 rounded-full animate-spin-slow bg-gradient-to-tr from-transparent via-white/50 to-transparent" />
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

        </motion.div>
      </Container>
    </section>
  );
}
