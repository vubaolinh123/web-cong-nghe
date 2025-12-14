"use client";

import { motion } from "framer-motion";
import { Container } from "../common";

export default function Introduction() {
    return (
        <section className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-30" />

            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-cyan-500 tracking-widest uppercase mb-4"
                    >
                        Về Chúng Tôi
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-2xl sm:text-3xl md:text-3xl font-medium text-slate-200 leading-relaxed"
                    >
                        "Chúng tôi giúp doanh nghiệp tận dụng sức mạnh của <span className="text-cyan-400">AI</span> để tối ưu hóa vận hành. Từ tự động hóa các tác vụ lặp đi lặp lại đến xây dựng trợ lý thông minh, chúng tôi biến công nghệ AI thành <span className="text-purple-400">lợi thế cạnh tranh</span> thực sự cho doanh nghiệp bạn."
                    </motion.p>
                </div>
            </Container>
        </section>
    );
}
