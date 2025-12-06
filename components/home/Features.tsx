"use client";

import { motion } from "framer-motion";
import { Layers, Gauge, Lock, Cpu, Globe, Clock } from "lucide-react";
import { Container, AnimatedSection } from "../common";

const features = [
  {
    icon: Layers,
    title: "Kiến Trúc Hiện Đại",
    description: "Sử dụng kiến trúc microservices, serverless và cloud-native để đảm bảo khả năng mở rộng.",
  },
  {
    icon: Gauge,
    title: "Hiệu Suất Tối Ưu",
    description: "Tối ưu hóa hiệu suất với các công nghệ caching, CDN và lazy loading tiên tiến.",
  },
  {
    icon: Lock,
    title: "Bảo Mật Cao",
    description: "Tuân thủ các tiêu chuẩn bảo mật OWASP, ISO 27001 và GDPR trong mọi dự án.",
  },
  {
    icon: Cpu,
    title: "Công Nghệ Mới",
    description: "Áp dụng AI, Machine Learning và IoT vào giải pháp để tăng giá trị kinh doanh.",
  },
  {
    icon: Globe,
    title: "Khả Năng Mở Rộng",
    description: "Thiết kế hệ thống có khả năng xử lý hàng triệu người dùng đồng thời.",
  },
  {
    icon: Clock,
    title: "Giao Hàng Đúng Hạn",
    description: "Cam kết tiến độ với quy trình Agile/Scrum và quản lý dự án chuyên nghiệp.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Tại Sao Chọn Chúng Tôi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Điểm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Khác Biệt
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Những yếu tố tạo nên sự khác biệt và giá trị mà chúng tôi 
            mang đến cho khách hàng.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                    <feature.icon size={28} className="text-cyan-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

