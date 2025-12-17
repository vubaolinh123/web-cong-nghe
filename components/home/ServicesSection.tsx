"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Code2, ArrowRight, TrendingUp, Users, Zap, CheckCircle, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const { dictionary } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "marketing",
      icon: Megaphone,
      title: "AI Marketing",
      description: "Giải pháp Marketing toàn diện với AI hỗ trợ tối ưu chiến dịch, tăng ROI và tiết kiệm chi phí quảng cáo",
      color: "from-green-400 to-emerald-500",
      bgGlow: "bg-green-500/20",
      href: "/dich-vu-marketing",
      badge: "Hot",
      image: "/images/service_marketing_3d.png",
      stats: { projects: "200+", satisfaction: "98%" },
      features: [
        "Facebook & TikTok Ads",
        "Chăm sóc Fanpage chuyên nghiệp",
        "Content AI-Powered",
        "SEO & SEM tối ưu",
      ],
    },
    {
      id: "tech",
      icon: Code2,
      title: "Ứng dụng AI cho Doanh Nghiệp",
      description: "Tự động hóa quy trình, tăng hiệu suất làm việc, giảm thiểu chi phí vận hành với các giải pháp AI thông minh",
      color: "from-blue-400 to-cyan-500",
      bgGlow: "bg-blue-500/20",
      href: "/dich-vu-cong-nghe",
      badge: "AI-Powered",
      image: "/images/service_tech_3d.png",
      stats: { projects: "50+", satisfaction: "99%" },
      features: [
        "Automation (Low-code Platform)",
        "AI Chatbot 24/7 & AI Agent",
        "Custom Websites & Apps",
        "Tích hợp AI sẵn có",
      ],
    },
  ];

  return (
    <section className="relative w-full h-screen flex items-center bg-slate-950 overflow-hidden pt-20 lg:pt-24">
      {/* Background Ambience */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-900/10 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">Dịch Vụ Của Chúng Tôi</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Giải Pháp <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">AI-First</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto w-full">
          {/* LEFT: Service List & Controls */}
          <div className="flex flex-col justify-center gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`group relative p-5 sm:p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${activeService === index
                  ? "bg-slate-900/80 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                  : "bg-slate-900/30 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700"
                  }`}
              >
                {/* Active Indicator Line */}
                {activeService === index && (
                  <motion.div
                    layoutId="activeIndicator"
                  //   className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.color}`}
                  />
                )}

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 shrink-0`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-xl font-bold transition-colors ${activeService === index ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {service.title}
                      </h3>
                      {activeService === index && <ArrowUpRight className="w-5 h-5 text-cyan-400" />}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-2">
                      {service.description}
                    </p>

                    {/* Mini Features (Only visible when active) */}
                    <AnimatePresence>
                      {activeService === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="grid grid-cols-2 gap-x-2 gap-y-1 mt-2"
                        >
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                              <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}

                          <div className="col-span-2 mt-3">
                            <Link href={service.href} className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                              KHÁM PHÁ NGAY <ArrowRight className="w-4 h-4 text-cyan-400" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Dynamic 3D Image Display */}
          <div className="relative flex items-center justify-center lg:h-[500px]">
            {/* Pulsating Abstract Background */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: [0, -15, 0] // Floating effect
                }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5, filter: "blur(10px)" }}
                transition={{
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotate: { duration: 0.4 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" } // Loop floating
                }}
                className="relative w-full h-full flex items-center justify-center p-4"
              >
                <div className="relative w-full h-full max-h-[400px] aspect-square lg:aspect-auto">
                  <Image
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.3)]"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Stats Card overlaying image */}
            <motion.div
              key={`stats-${activeService}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-xs text-slate-400">Dự án thành công</div>
                  <div className="text-xl font-bold text-white">{services[activeService].stats.projects}</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div>
                  <div className="text-xs text-slate-400">Hài lòng</div>
                  <div className="text-xl font-bold text-green-400">{services[activeService].stats.satisfaction}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
