"use client";

import { motion } from "framer-motion";

interface BottomCTAProps {
    t: (key: string) => string;
}

export default function BottomCTA({ t }: BottomCTAProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
        >
            <p className="text-slate-400 text-sm mb-4">
                {t('caseStudies.cta.description') || 'Nhìn thấy kết quả tương tự này cho doanh nghiệp của bạn'}
            </p>
            <motion.a
                href="https://zalo.me/0584503333"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300"
            >
                {t('caseStudies.cta.button') || 'Tư Vấn Miễn Phí Ngay'}
            </motion.a>
        </motion.div>
    );
}
