"use client";

import { motion } from "framer-motion";
import { Container, AnimatedSection } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Shield, TrendingUp, Award, Clock } from "lucide-react";

// Partner categories with brand names from VTS Marketing
const partnerCategories = [
  {
    categoryKey: "marketingAgency" as const,
    brands: ["LeBros", "Yeah1", "Blue Sky", "Unic", "Mix Digital", "ViCi Agency"],
    bgColor: "bg-blue-500",
  },
  {
    categoryKey: "banking" as const,
    brands: ["ACB", "VPBank", "VietCredit", "VIB", "SCB", "Sacombank"],
    bgColor: "bg-green-500",
  },
  {
    categoryKey: "fnb" as const,
    brands: ["Pizza 4P's", "McDonald's", "The Coffee House", "OFood", "Royaltea"],
    bgColor: "bg-orange-500",
  },
  {
    categoryKey: "travel" as const,
    brands: ["UpTravel", "V.E.O", "Swin Travel"],
    bgColor: "bg-purple-500",
  },
  {
    categoryKey: "realEstate" as const,
    brands: ["5SAO", "CenLand", "Rubik", "JJLand", "Halo", "VJSC", "Justfly"],
    bgColor: "bg-cyan-500",
  },
];

const statsConfig = [
  { key: "seoReach" as const, icon: Shield },
  { key: "conversionRate" as const, icon: TrendingUp },
  { key: "serviceValue" as const, icon: Award },
  { key: "permanentOperation" as const, icon: Clock },
];

export default function Partners() {
  const { dictionary } = useLanguage();

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            {dictionary.partners.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dictionary.partners.title1}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {dictionary.partners.title2}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {dictionary.partners.description}
          </p>
        </AnimatedSection>

        {/* Partner Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partnerCategories.map((category, catIndex) => (
            <AnimatedSection key={catIndex} delay={catIndex * 0.1}>
              <motion.div
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all h-full"
                whileHover={{ y: -5 }}
              >
                <div className={`inline-block px-4 py-2 rounded-full ${category.bgColor} text-white text-sm font-semibold mb-6`}>
                  {dictionary.partners.categories[category.categoryKey]}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.brands.map((brand, brandIndex) => (
                    <motion.div
                      key={brandIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: brandIndex * 0.05 }}
                      className="px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm hover:border-cyan-500/30 hover:text-white transition-all"
                    >
                      {brand}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsConfig.map((stat, index) => {
            const Icon = stat.icon;
            const statData = dictionary.partners.stats[stat.key];
            return (
              <AnimatedSection key={stat.key} delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 text-center hover:border-cyan-500/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Icon size={24} className="text-cyan-400" />
                  </div>
                  <h4 className="text-cyan-400 font-bold text-lg mb-2">{statData.title}</h4>
                  <p className="text-slate-400 text-sm">{statData.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

