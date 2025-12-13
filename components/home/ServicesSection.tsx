"use client";

import { motion } from "framer-motion";
import { Megaphone, Code2, ArrowRight, TrendingUp, Users, Zap, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ServicesSection() {
  const { dictionary } = useLanguage();

  const services = [
    {
      icon: Megaphone,
      title: "AI Marketing",
      description: "Giải pháp Marketing toàn diện với AI hỗ trợ tối ưu chiến dịch, tăng ROI và tiết kiệm chi phí quảng cáo",
      color: "from-green-400 to-emerald-500",
      bgGlow: "bg-green-500/20",
      href: "/dich-vu/marketing",
      badge: "Hot",
      stats: { projects: "200+", satisfaction: "98%" },
      features: [
        "Facebook & TikTok Ads",
        "Chăm sóc Fanpage chuyên nghiệp",
        "Content AI-Powered",
        "SEO & SEM tối ưu",
        "Email Marketing tự động",
      ],
    },
    {
      icon: Code2,
      title: "Ứng dụng AI cho Doanh Nghiệp",
      description: "Tự động hóa quy trình, tăng hiệu suất làm việc, giảm thiểu chi phí vận hành với các giải pháp AI thông minh",
      color: "from-blue-400 to-cyan-500",
      bgGlow: "bg-blue-500/20",
      href: "/dich-vu/cong-nghe",
      badge: "AI-Powered",
      stats: { projects: "50+", satisfaction: "99%" },
      features: [
        "Automation (Low-code Platform)",
        "AI Chatbot 24/7",
        "AI Agent chuyên biệt",
        "Custom Websites & Apps",
        "Tích hợp AI sẵn có",
      ],
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-0 lg:min-h-screen lg:h-full flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Static Background Effects - Smaller on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 block">
            Dịch Vụ Của Chúng Tôi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
            Giải Pháp{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              AI-First
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto px-2 sm:px-0">
            Kết hợp sức mạnh AI với chuyên môn sâu để tạo ra giải pháp tối ưu cho doanh nghiệp của bạn
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={service.href} className="block group">
                <div className="relative p-4 sm:p-5 lg:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 transition-all duration-300 overflow-hidden h-full">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                  <div className="relative z-10">
                    {/* Header with Icon, Title & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <Star size={12} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-xs text-slate-400">{service.stats.satisfaction} hài lòng</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${service.color} text-white`}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Stats Row - Wrap on mobile */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-400" />
                        <span className="text-xs sm:text-sm text-slate-300"><strong className="text-white">{service.stats.projects}</strong> dự án</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                        <span className="text-xs sm:text-sm text-slate-300">Chuyên gia</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" />
                        <span className="text-xs sm:text-sm text-slate-300">AI-Powered</span>
                      </div>
                    </div>

                    {/* Features - Stack on very small screens */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-1.5 mb-4">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-slate-300 text-xs"
                        >
                          <CheckCircle size={12} className="text-cyan-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all text-sm">
                        <span>Tìm hiểu thêm</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
