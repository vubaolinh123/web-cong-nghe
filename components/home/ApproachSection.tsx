"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      subtitle: "Khám Phá",
      description: "Phân tích nhu cầu & thị trường",
      color: "from-cyan-400 to-blue-500",
      image: "/images/approach_discovery_3d.png"
    },
    {
      number: "02",
      title: "Strategy",
      subtitle: "Chiến Lược",
      description: "Xây dựng kế hoạch & thiết kế UI/UX",
      color: "from-green-400 to-emerald-500",
      image: "/images/approach_strategy_3d.png"
    },
    {
      number: "03",
      title: "Development",
      subtitle: "Phát Triển",
      description: "Lập trình & Triển khai production",
      color: "from-purple-400 to-pink-500",
      image: "/images/approach_dev_3d.png"
    },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent dashed-line" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-2 block">
            Quy Trình Làm Việc
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Approach</span>
          </h2>
        </motion.div>

        {/* 3D Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40%] left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 -z-10 rounded-full" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Floating 3D Icon */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 transition-transform duration-500 transform group-hover:-translate-y-4">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity duration-500`} />

                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  quality={90}
                />

                {/* Floating Number */}
                <div className={`absolute -top-2 -right-2 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-white shadow-lg z-20`}>
                  {step.number}
                </div>
              </div>

              {/* Text Card - Glassmorphism */}
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl w-full max-w-sm hover:border-cyan-500/50 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent uppercase tracking-wider mb-2`}>
                  {step.subtitle}
                </p>
                <p className="text-slate-400 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
