"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Megaphone, Code2, Rocket, TrendingUp, LucideIcon } from "lucide-react";
import { Container, Button } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  href: string;
}

interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export default function Hero() {
  const { dictionary } = useLanguage();

  const services: ServiceCard[] = [
    {
      icon: Megaphone,
      title: dictionary.hero.serviceCards?.marketing?.title || "Marketing Online",
      description: dictionary.hero.serviceCards?.marketing?.description || "Facebook Ads, TikTok Shop, Fanpage",
      color: "from-green-400 to-emerald-500",
      href: "#marketing-services",
    },
    {
      icon: Code2,
      title: dictionary.hero.serviceCards?.technology?.title || "Gia Công Công Nghệ",
      description: dictionary.hero.serviceCards?.technology?.description || "Web, Mobile App, AI & Cloud",
      color: "from-blue-400 to-cyan-500",
      href: "#services",
    },
  ];

  const stats: StatItem[] = [
    { value: "500+", label: dictionary.hero.stats?.clients || "Khách Hàng", icon: TrendingUp, color: "text-green-400" },
    { value: "1000+", label: dictionary.hero.stats?.campaigns || "Chiến Dịch Marketing", icon: Megaphone, color: "text-emerald-400" },
    { value: "200+", label: dictionary.hero.stats?.projects || "Dự Án Công Nghệ", icon: Code2, color: "text-blue-400" },
    { value: "24/7", label: dictionary.hero.stats?.support || "Hỗ Trợ", icon: Rocket, color: "text-cyan-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs with Animation */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Particles - Fixed positions to avoid hydration mismatch */}
        {[
          { left: 5, top: 10, duration: 3.2, delay: 0.1 },
          { left: 15, top: 80, duration: 4.1, delay: 1.2 },
          { left: 25, top: 30, duration: 3.5, delay: 0.5 },
          { left: 35, top: 60, duration: 4.8, delay: 1.8 },
          { left: 45, top: 20, duration: 3.3, delay: 0.3 },
          { left: 55, top: 90, duration: 4.5, delay: 1.5 },
          { left: 65, top: 40, duration: 3.8, delay: 0.8 },
          { left: 75, top: 70, duration: 4.2, delay: 1.1 },
          { left: 85, top: 15, duration: 3.1, delay: 0.2 },
          { left: 95, top: 55, duration: 4.9, delay: 1.9 },
          { left: 10, top: 45, duration: 3.6, delay: 0.6 },
          { left: 20, top: 85, duration: 4.3, delay: 1.3 },
          { left: 30, top: 25, duration: 3.4, delay: 0.4 },
          { left: 40, top: 75, duration: 4.6, delay: 1.6 },
          { left: 50, top: 35, duration: 3.7, delay: 0.7 },
          { left: 60, top: 65, duration: 4.4, delay: 1.4 },
          { left: 70, top: 5, duration: 3.9, delay: 0.9 },
          { left: 80, top: 50, duration: 4.0, delay: 1.0 },
          { left: 90, top: 95, duration: 3.0, delay: 0.0 },
          { left: 3, top: 72, duration: 4.7, delay: 1.7 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 text-sm font-medium mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-yellow-400" />
            </motion.div>
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              {dictionary.hero.badge}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            <span className="block">{dictionary.hero.title1}</span>
            <span className="block mt-2">
              <motion.span
                className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                {dictionary.hero.title2}
              </motion.span>
              {" "}&{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                {dictionary.hero.title3}
              </motion.span>
            </span>
            <span className="block mt-2">{dictionary.hero.title4}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {dictionary.hero.subtitle}
          </motion.p>

          {/* Service Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12"
          >
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={service.href}
                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon size={28} className="text-white" />
                  </motion.div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400">{service.description}</p>
                  </div>
                  <ArrowRight className="ml-auto text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/lien-he">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="min-w-[200px] group">
                  <Rocket className="group-hover:rotate-12 transition-transform" size={20} />
                  {dictionary.hero.ctaPrimary}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="min-w-[200px] group">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                {dictionary.hero.ctaSecondary}
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex justify-center mb-2"
                  animate={floatingAnimation}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                    delay: index * 0.5,
                  }}
                >
                  <stat.icon className={`${stat.color} opacity-50 group-hover:opacity-100 transition-opacity`} size={24} />
                </motion.div>
                <motion.div
                  className={`text-3xl sm:text-4xl font-bold ${stat.color}`}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-500 mt-1 group-hover:text-slate-400 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
