"use client";

import { motion } from "framer-motion";
import { 
  Code, Smartphone, Cloud, Brain, 
  Shield, Cog, ArrowRight 
} from "lucide-react";
import { Container, AnimatedSection } from "../common";

const services = [
  {
    icon: Code,
    title: "Phát Triển Web",
    description: "Xây dựng website và ứng dụng web hiện đại với Next.js, React và các công nghệ tiên tiến nhất.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Ứng Dụng Di Động",
    description: "Phát triển app iOS và Android chất lượng cao với React Native và Flutter.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Triển khai và quản lý hạ tầng cloud với AWS, Azure và Google Cloud Platform.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Tích hợp trí tuệ nhân tạo và machine learning vào quy trình kinh doanh.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Shield,
    title: "An Ninh Mạng",
    description: "Bảo vệ doanh nghiệp với các giải pháp bảo mật toàn diện và kiểm thử xâm nhập.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Cog,
    title: "Tư Vấn IT",
    description: "Tư vấn chiến lược công nghệ và chuyển đổi số cho doanh nghiệp mọi quy mô.",
    color: "from-orange-500 to-orange-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Dịch Vụ Của Chúng Tôi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Giải Pháp Công Nghệ{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Toàn Diện
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ công nghệ để đưa doanh nghiệp của bạn 
            lên tầm cao mới trong kỷ nguyên số.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all"
                >
                  Tìm Hiểu Thêm
                  <ArrowRight size={16} />
                </a>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

