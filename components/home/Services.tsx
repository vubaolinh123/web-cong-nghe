"use client";

import { motion } from "framer-motion";
import {
  Code, Smartphone, Cloud, Brain,
  Shield, Cog, ArrowRight, LucideIcon
} from "lucide-react";
import { Container, AnimatedSection } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ServiceItem {
  icon: LucideIcon;
  key: 'webDev' | 'mobile' | 'cloud' | 'ai' | 'security' | 'consulting';
  color: string;
}

const serviceItems: ServiceItem[] = [
  { icon: Code, key: 'webDev', color: "from-blue-500 to-blue-600" },
  { icon: Smartphone, key: 'mobile', color: "from-purple-500 to-purple-600" },
  { icon: Cloud, key: 'cloud', color: "from-cyan-500 to-cyan-600" },
  { icon: Brain, key: 'ai', color: "from-pink-500 to-pink-600" },
  { icon: Shield, key: 'security', color: "from-green-500 to-green-600" },
  { icon: Cog, key: 'consulting', color: "from-orange-500 to-orange-600" },
];

export default function Services() {
  const { dictionary } = useLanguage();

  return (
    <section id="services" className="py-24 bg-slate-950">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            {dictionary.services.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dictionary.services.title1}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {dictionary.services.title2}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {dictionary.services.description}
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {dictionary.services.items[service.key].title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {dictionary.services.items[service.key].description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all"
                >
                  {dictionary.services.learnMore}
                  <ArrowRight size={16} />
                </a>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

