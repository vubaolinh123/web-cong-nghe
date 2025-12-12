"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket } from "lucide-react";

export default function ApproachSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      subtitle: "Khám Phá & Phân Tích",
      description: "Lắng nghe yêu cầu, phân tích nhu cầu kinh doanh và nghiên cứu thị trường để đề xuất giải pháp tối ưu nhất.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy",
      subtitle: "Chiến Lược & Thiết Kế",
      description: "Xây dựng chiến lược toàn diện, thiết kế UI/UX trực quan và lập kế hoạch triển khai chi tiết.",
      color: "from-green-400 to-emerald-500",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Development",
      subtitle: "Phát Triển & Triển Khai",
      description: "Phát triển sản phẩm với công nghệ tiên tiến, kiểm thử kỹ lưỡng và triển khai lên production.",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="relative h-full flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 lg:mb-12"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Quy Trình Làm Việc
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Approach
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative"
            >
              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-slate-700 to-transparent" />
              )}

              <div className="relative p-6 lg:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-500 h-full">
                {/* Step Number */}
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-50 group-hover:opacity-100 transition-opacity`}>
                    {step.number}
                  </span>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3`}>
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
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
