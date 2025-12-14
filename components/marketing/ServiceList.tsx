"use client";

import { motion } from "framer-motion";
import { Megaphone, Users, Video, BarChart3, CheckCircle } from "lucide-react";
import { Container } from "../common";

const services = [
    {
        icon: Megaphone,
        title: "Marketing Tổng Thể A-Z",
        description: "Giải pháp marketing trọn gói từ A đến Z, bao gồm chiến lược, triển khai và tối ưu hiệu quả.",
        features: [
            "Lập kế hoạch marketing chi tiết",
            "Triển khai đa kênh đồng bộ",
            "Báo cáo và tối ưu liên tục",
            "Đội ngũ chuyên gia 1-1"
        ],
        color: "from-green-400 to-emerald-400"
    },
    {
        icon: Users,
        title: "Xây Group Facebook Truyền Thông",
        description: "Xây dựng cộng đồng Facebook chất lượng cao, tương tác mạnh mẽ để phát triển thương hiệu.",
        features: [
            "Tạo và phát triển group từ 0",
            "Thu hút thành viên chất lượng",
            "Nội dung viral thu hút",
            "Quản lý và moderation 24/7"
        ],
        color: "from-blue-400 to-cyan-400"
    },
    {
        icon: BarChart3,
        title: "Fanpage Truyền Thông & Ads",
        description: "Xây dựng và chăm sóc Fanpage chuyên nghiệp, chạy quảng cáo Facebook hiệu quả cao.",
        features: [
            "Thiết kế Fanpage chuyên nghiệp",
            "Nội dung sáng tạo hàng ngày",
            "Chạy Ads tối ưu chi phí",
            "Tăng followers thực chất lượng"
        ],
        color: "from-purple-400 to-pink-400"
    },
    {
        icon: Video,
        title: "TikTok & Shop Livestream",
        description: "Xây dựng kênh TikTok và TikTok Shop, tổ chức livestream bán hàng chuyên nghiệp.",
        features: [
            "Setup kênh TikTok chuẩn SEO",
            "Sản xuất video viral trending",
            "TikTok Shop & Affiliate",
            "Livestream bán hàng chuyên nghiệp"
        ],
        color: "from-pink-400 to-red-400"
    }
];

export default function ServiceList() {
    return (
        <section id="services" className="py-20 sm:py-32 bg-slate-950 relative">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Dịch Vụ Marketing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Giải pháp marketing đa kênh giúp doanh nghiệp tiếp cận khách hàng hiệu quả
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm border border-white/10`}>
                                <service.icon className="text-white w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
