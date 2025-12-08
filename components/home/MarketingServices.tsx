"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Megaphone,
  Globe,
  ShoppingBag,
  Share2,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { Container, AnimatedSection } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

type ServiceKey = 'facebookAds' | 'fanpageManagement' | 'tiktokShop' | 'websiteDesign' | 'fanpageTrading' | 'contentDistribution';

interface ServiceConfig {
  icon: IconType | LucideIcon;
  key: ServiceKey;
  color: string;
  bgGlow: string;
  statsValue: string;
  statsLabel: string;
}

const serviceConfigs: ServiceConfig[] = [
  { icon: FaFacebook, key: 'facebookAds', color: "from-blue-500 to-blue-600", bgGlow: "bg-blue-500/20", statsValue: "500+", statsLabel: "campaigns" },
  { icon: Megaphone, key: 'fanpageManagement', color: "from-green-500 to-emerald-600", bgGlow: "bg-green-500/20", statsValue: "200+", statsLabel: "fanpages" },
  { icon: FaTiktok, key: 'tiktokShop', color: "from-pink-500 to-rose-600", bgGlow: "bg-pink-500/20", statsValue: "10M+", statsLabel: "views" },
  { icon: Globe, key: 'websiteDesign', color: "from-cyan-500 to-cyan-600", bgGlow: "bg-cyan-500/20", statsValue: "150+", statsLabel: "websites" },
  { icon: ShoppingBag, key: 'fanpageTrading', color: "from-orange-500 to-orange-600", bgGlow: "bg-orange-500/20", statsValue: "300+", statsLabel: "transactions" },
  { icon: Share2, key: 'contentDistribution', color: "from-indigo-500 to-indigo-600", bgGlow: "bg-indigo-500/20", statsValue: "5M+", statsLabel: "reach" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function MarketingServices() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { dictionary } = useLanguage();

  return (
    <section
      id="marketing-services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated Background decorations */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl"
        animate={{
          x: ["-50%", "-30%", "-50%"],
          y: ["-50%", "-30%", "-50%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: ["50%", "30%", "50%"],
          y: ["50%", "30%", "50%"],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-400/30 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <Container className="relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-sm font-medium mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-green-400" />
            </motion.div>
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {dictionary.marketingServices.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {dictionary.marketingServices.title}{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {dictionary.marketingServices.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-3xl mx-auto"
          >
            {dictionary.marketingServices.description}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-10"
          >
            {[
              { icon: Users, value: dictionary.marketingServices.stats.clients.value, label: dictionary.marketingServices.stats.clients.label, color: "text-green-400" },
              { icon: TrendingUp, value: dictionary.marketingServices.stats.campaigns.value, label: dictionary.marketingServices.stats.campaigns.label, color: "text-emerald-400" },
              { icon: Zap, value: dictionary.marketingServices.stats.satisfaction.value, label: dictionary.marketingServices.stats.satisfaction.label, color: "text-cyan-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50"
                whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.3)" }}
              >
                <stat.icon className={`${stat.color}`} size={24} />
                <div className="text-left">
                  <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {serviceConfigs.map((service, index) => {
            const serviceData = dictionary.marketingServices.items[service.key];
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card */}
                <div className="relative p-6 lg:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/30 transition-all duration-500 h-full backdrop-blur-sm overflow-hidden">
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl ${service.bgGlow} opacity-0 blur-xl`}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-10`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header with Icon and Stats */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Icon */}
                      <motion.div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon size={28} className="text-white" />
                      </motion.div>

                      {/* Mini Stats */}
                      <div className="text-right">
                        <div className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.statsValue}
                        </div>
                        <div className="text-xs text-slate-500">{service.statsLabel}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                      {serviceData.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 mb-5 leading-relaxed text-sm">
                      {serviceData.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {serviceData.features.map((feature: string, idx: number) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Link */}
                    <motion.a
                      href="/lien-he"
                      className="inline-flex items-center gap-2 text-green-400 font-medium group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span>{dictionary.marketingServices.consultButton}</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-16">
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 border border-green-500/20 overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {dictionary.marketingServices.cta.title}
                </h3>
                <p className="text-slate-400">
                  {dictionary.marketingServices.cta.description}
                </p>
              </div>

              <motion.a
                href="/lien-he"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg shadow-green-500/25 whitespace-nowrap group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{dictionary.marketingServices.cta.button}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
