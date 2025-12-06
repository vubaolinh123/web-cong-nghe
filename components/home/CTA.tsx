"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Container, AnimatedSection, Button } from "../common";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-700/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
                Sẵn Sàng Bắt Đầu?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Hãy Biến Ý Tưởng Thành{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Hiện Thực
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết 
                cho dự án của bạn. Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ 24/7.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/lien-he">
                  <Button size="lg" className="min-w-[200px]">
                    <MessageCircle size={20} />
                    Tư Vấn Ngay
                    <ArrowRight size={20} />
                  </Button>
                </Link>
                <a href="tel:+84123456789">
                  <Button variant="outline" size="lg" className="min-w-[200px]">
                    <Phone size={20} />
                    Gọi Hotline
                  </Button>
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400">
                <a href="mailto:contact@techvision.vn" className="hover:text-cyan-400 transition-colors">
                  contact@techvision.vn
                </a>
                <span className="hidden sm:block">•</span>
                <a href="tel:+84123456789" className="hover:text-cyan-400 transition-colors">
                  +84 123 456 789
                </a>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

