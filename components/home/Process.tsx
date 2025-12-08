"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, Rocket, Headphones, LucideIcon } from "lucide-react";
import { Container, AnimatedSection } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type StepKey = 'consulting' | 'design' | 'development' | 'deployment' | 'support';

interface StepConfig {
  icon: LucideIcon;
  key: StepKey;
  number: string;
}

const stepConfigs: StepConfig[] = [
  { icon: Lightbulb, key: 'consulting', number: "01" },
  { icon: Palette, key: 'design', number: "02" },
  { icon: Code2, key: 'development', number: "03" },
  { icon: Rocket, key: 'deployment', number: "04" },
  { icon: Headphones, key: 'support', number: "05" },
];

export default function Process() {
  const { dictionary } = useLanguage();

  return (
    <section className="py-24 bg-slate-900">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            {dictionary.process.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dictionary.process.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {dictionary.process.titleHighlight}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {dictionary.process.description}
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {stepConfigs.map((step, index) => {
              const stepData = dictionary.process.steps[step.key];
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="relative text-center"
                    whileHover={{ y: -5 }}
                  >
                    {/* Step Number & Icon */}
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mx-auto relative z-10 group-hover:border-cyan-500 transition-colors">
                        <step.icon size={32} className="text-cyan-400" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold z-20">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-semibold text-lg mb-3">
                      {stepData.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {stepData.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

