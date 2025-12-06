"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, Rocket, Headphones } from "lucide-react";
import { Container, AnimatedSection } from "../common";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Tư Vấn & Phân Tích",
    description: "Lắng nghe yêu cầu, phân tích nhu cầu và đề xuất giải pháp phù hợp nhất.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Thiết Kế UI/UX",
    description: "Thiết kế giao diện trực quan, trải nghiệm người dùng tối ưu.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Phát Triển",
    description: "Xây dựng sản phẩm với công nghệ tiên tiến, code chất lượng cao.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Triển Khai",
    description: "Kiểm thử kỹ lưỡng và triển khai sản phẩm lên môi trường production.",
  },
  {
    icon: Headphones,
    number: "05",
    title: "Hỗ Trợ & Bảo Trì",
    description: "Hỗ trợ kỹ thuật 24/7, bảo trì và nâng cấp liên tục.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-900">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Quy Trình Làm Việc
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Cách Chúng Tôi{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hoạt Động
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Quy trình làm việc chuyên nghiệp, minh bạch đảm bảo dự án 
            của bạn luôn đúng tiến độ và chất lượng.
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="relative text-center"
                  whileHover={{ y: -5 }}
                >
                  {/* Step Number & Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mx-auto relative z-10 group-hover:border-cyan-500 transition-colors">
                      <step.icon size={32} className="text-cyan-400" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold z-20">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

