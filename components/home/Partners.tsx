"use client";

import { motion } from "framer-motion";
import { Container, AnimatedSection } from "../common";

const partners = [
  { name: "Microsoft", logo: "M" },
  { name: "Google Cloud", logo: "G" },
  { name: "AWS", logo: "A" },
  { name: "Salesforce", logo: "S" },
  { name: "Oracle", logo: "O" },
  { name: "SAP", logo: "S" },
  { name: "IBM", logo: "I" },
  { name: "Adobe", logo: "A" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-slate-900/50 border-y border-slate-800">
      <Container>
        <AnimatedSection className="text-center mb-10">
          <p className="text-slate-500 text-sm uppercase tracking-widest">
            Được tin tưởng bởi các doanh nghiệp hàng đầu
          </p>
        </AnimatedSection>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900/50 to-transparent z-10" />

          {/* Scrolling Logos */}
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-center gap-2 text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded flex items-center justify-center text-lg font-bold">
                    {partner.logo}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">{partner.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

