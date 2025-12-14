"use client";

import { motion } from "framer-motion";
import { Container } from "../common";

export default function CTASection() {
    return (
        <section className="py-20 text-center bg-slate-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl opacity-50" />

            <Container className="relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    SẴN SÀNG TĂNG TRƯỞNG?
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <p className="text-xl sm:text-2xl text-green-400 font-medium mb-4">
                        Đăng ký nhận tư vấn $0đ ngay hôm nay!
                    </p>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                        Đội ngũ chuyên gia của chúng tôi sẽ phân tích và đề xuất chiến lược marketing phù hợp nhất cho doanh nghiệp bạn.
                    </p>
                </motion.div>

            </Container>
        </section>
    );
}
