"use client";

import { motion } from "framer-motion";
import { Rocket, MessageSquare, Share2, Monitor } from "lucide-react";
import { Container, AnimatedSection } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Features() {
  const { dictionary } = useLanguage();

  const features = [
    {
      icon: Rocket,
      title: dictionary.features.items.exclusiveAgency.title,
      description: dictionary.features.items.exclusiveAgency.description,
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/20",
      hoverBorder: "group-hover:border-yellow-500/40",
      iconColor: "text-yellow-400",
    },
    {
      icon: MessageSquare,
      title: dictionary.features.items.uniqueIdeas.title,
      description: dictionary.features.items.uniqueIdeas.description,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/20",
      hoverBorder: "group-hover:border-orange-500/40",
      iconColor: "text-orange-400",
    },
    {
      icon: Share2,
      title: dictionary.features.items.qualityPromotion.title,
      description: dictionary.features.items.qualityPromotion.description,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      hoverBorder: "group-hover:border-blue-500/40",
      iconColor: "text-blue-400",
    },
    {
      icon: Monitor,
      title: dictionary.features.items.experience.title,
      description: dictionary.features.items.experience.description,
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/20",
      hoverBorder: "group-hover:border-yellow-500/40",
      iconColor: "text-yellow-400",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            {dictionary.features.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dictionary.features.title1}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {dictionary.features.title2}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            {dictionary.features.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className={`group relative p-8 rounded-2xl bg-slate-900/50 border ${feature.borderColor} hover:border-cyan-500/30 transition-all duration-300 h-full`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10 flex gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} border ${feature.borderColor} ${feature.hoverBorder} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon size={32} className={feature.iconColor} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

