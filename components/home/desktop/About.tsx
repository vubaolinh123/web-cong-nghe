"use client";

import { motion } from "framer-motion";
import { Check, Zap, Users, Award, TrendingUp } from "lucide-react";
import { Container, AnimatedSection, Button } from "../../common";

const highlights = [
  "Đội ngũ 50+ kỹ sư giàu kinh nghiệm",
  "Quy trình Agile linh hoạt, minh bạch",
  "Hỗ trợ kỹ thuật 24/7",
  "Bảo hành và bảo trì dài hạn",
];

const features = [
  {
    icon: Zap,
    title: "Tốc Độ Triển Khai",
    description: "Giao hàng nhanh chóng với phương pháp Agile",
  },
  {
    icon: Users,
    title: "Đội Ngũ Chuyên Gia",
    description: "Kỹ sư được đào tạo bài bản, giàu kinh nghiệm",
  },
  {
    icon: Award,
    title: "Chất Lượng Đảm Bảo",
    description: "Cam kết chất lượng với tiêu chuẩn quốc tế",
  },
  {
    icon: TrendingUp,
    title: "Tối Ưu Chi Phí",
    description: "Giải pháp hiệu quả với chi phí hợp lý",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
              Về Chúng Tôi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Đối Tác Công Nghệ{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Đáng Tin Cậy
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Với hơn 7 năm kinh nghiệm trong ngành công nghệ, ASI EVEREST đã
              giúp hàng trăm doanh nghiệp chuyển đổi số thành công. Chúng tôi không
              chỉ là nhà cung cấp dịch vụ — chúng tôi là đối tác đồng hành cùng bạn
              trên hành trình phát triển.
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Check size={14} className="text-cyan-400" />
                  </span>
                  <span className="text-slate-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button>Tìm Hiểu Thêm</Button>
          </AnimatedSection>

          {/* Right - Feature Cards */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

