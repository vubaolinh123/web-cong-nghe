"use client";

import { motion } from "framer-motion";
import { Container } from "../common";

export default function Introduction() {
    return (
        <section className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-30" />

            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-green-500 tracking-widest uppercase mb-4"
                    >
                        Về Dịch Vụ Marketing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-2xl sm:text-3xl md:text-3xl font-medium text-slate-200 leading-relaxed"
                    >
                        "Chúng tôi cung cấp giải pháp <span className="text-green-400">Marketing tổng thể A-Z</span>, giúp doanh nghiệp tiếp cận khách hàng tiềm năng qua đa kênh: Facebook, TikTok, Fanpage Ads và nhiều hơn nữa. Tất cả được <span className="text-emerald-400">tối ưu với AI</span> để đạt hiệu quả cao nhất."
                    </motion.p>
                </div>
            </Container>
        </section>
    );
}
