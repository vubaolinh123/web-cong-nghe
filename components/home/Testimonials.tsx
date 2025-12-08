"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container, AnimatedSection } from "../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type TestimonialKey = 'testimonial1' | 'testimonial2' | 'testimonial3';

interface TestimonialConfig {
  id: number;
  key: TestimonialKey;
  rating: number;
}

const testimonialConfigs: TestimonialConfig[] = [
  { id: 1, key: 'testimonial1', rating: 5 },
  { id: 2, key: 'testimonial2', rating: 5 },
  { id: 3, key: 'testimonial3', rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { dictionary } = useLanguage();

  const next = () => setCurrent((prev) => (prev + 1) % testimonialConfigs.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonialConfigs.length) % testimonialConfigs.length);

  const currentTestimonial = testimonialConfigs[current];
  const testimonialData = dictionary.testimonials.items[currentTestimonial.key];

  return (
    <section className="py-24 bg-slate-950">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            {dictionary.testimonials.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dictionary.testimonials.title1}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {dictionary.testimonials.title2}
            </span>
          </h2>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 sm:p-12 border border-slate-700/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-cyan-500/20">
                <Quote size={64} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonialData.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonialData.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {testimonialData.author}
                  </div>
                  <div className="text-slate-400">
                    {testimonialData.role}, {testimonialData.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonialConfigs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current ? "bg-cyan-400 w-8" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

