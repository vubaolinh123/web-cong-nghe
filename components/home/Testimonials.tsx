"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container, AnimatedSection } from "../common";

const testimonials = [
	  {
	    id: 1,
	    content:
			"ASI EVEREST đã giúp chúng tôi xây dựng hệ thống ERP hoàn chỉnh trong thời gian kỷ lục. Đội ngũ chuyên nghiệp, giao tiếp tốt và luôn đáp ứng mọi yêu cầu.",
	    author: "Nguyễn Văn A",
	    role: "CEO",
	    company: "ABC Corporation",
	    rating: 5,
	  },
	  {
	    id: 2,
	    content:
			"Ứng dụng di động họ phát triển cho chúng tôi đạt hơn 100k lượt tải trong tháng đầu tiên. Chất lượng vượt xa kỳ vọng!",
	    author: "Trần Thị B",
	    role: "Marketing Director",
	    company: "XYZ Retail",
	    rating: 5,
	  },
	  {
	    id: 3,
	    content:
			"Đối tác công nghệ đáng tin cậy nhất mà chúng tôi từng hợp tác. Họ không chỉ code, họ thực sự hiểu business của chúng tôi.",
	    author: "Lê Văn C",
	    role: "CTO",
	    company: "Tech Startup VN",
	    rating: 5,
	  },
	];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-slate-950">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Khách Hàng Nói Gì
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Câu Chuyện{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Thành Công
            </span>
          </h2>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 sm:p-12 border border-slate-700/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-cyan-500/20">
                <Quote size={64} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[current].author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {testimonials[current].author}
                  </div>
                  <div className="text-slate-400">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current ? "bg-cyan-400 w-8" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

