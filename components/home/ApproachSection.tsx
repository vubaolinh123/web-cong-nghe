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
    <section className="relative py-12 sm:py-16 lg:py-0 lg:min-h-screen lg:h-full flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Effects - Smaller on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3 block">
            Quy Trình Làm Việc
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Approach
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
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

              <div className="relative p-4 sm:p-5 lg:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-500 h-full">
                {/* Step Number */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <span className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-50 group-hover:opacity-100 transition-opacity`}>
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className={`text-xs sm:text-sm font-medium bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2 sm:mb-3`}>
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
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
