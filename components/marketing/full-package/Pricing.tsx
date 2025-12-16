"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
    const plans = [
        {
            name: "Gói Cơ Bản",
            price: "Liên Hệ",
            desc: "Phù hợp cho Startups và doanh nghiệp nhỏ muốn bắt đầu hiện diện online.",
            features: [
                "Thiết lập Fanpage chuẩn SEO",
                "12 bài viết Content/tháng",
                "Thiết kế hình ảnh cơ bản",
                "Setup chiến dịch quảng cáo Facebook",
                "Báo cáo hiệu quả hàng tháng"
            ],
            color: "border-slate-700 bg-slate-900/50",
            btnColor: "bg-slate-700 hover:bg-slate-600",
            recommend: false
        },
        {
            name: "Gói Tăng Trưởng",
            price: "Đề Xuất",
            desc: "Dành cho doanh nghiệp muốn mở rộng thị trường và tăng trưởng doanh thu nhanh.",
            features: [
                "Tất cả quyền lợi Gói Cơ Bản",
                "20 bài viết Content/tháng",
                "Video ngắn (Reels/TikTok) - 4 video",
                "Quảng cáo đa kênh (FB + Google)",
                "Seeding tăng tương tác tự nhiên",
                "Chatbot trả lời tự động cơ bản"
            ],
            color: "border-cyan-500/50 bg-slate-900/80 shadow-[0_0_50px_rgba(6,182,212,0.15)]",
            btnColor: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25",
            recommend: true
        },
        {
            name: "Gói Toàn Diện",
            price: "VIP",
            desc: "Giải pháp A-Z cho tập đoàn và doanh nghiệp lớn cần thống lĩnh thị trường.",
            features: [
                "Chiến lược Marketing tổng thể",
                "Content Daily (30 bài/tháng)",
                "8 Video sản xuất chuyên nghiệp",
                "Quảng cáo đa nền tảng tối ưu chi phí",
                "Booking KOLs/KOCs",
                "Hệ thống Automation Marketing",
                "Đội ngũ support riêng 24/7"
            ],
            color: "border-purple-500/50 bg-slate-900/50",
            btnColor: "bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25",
            recommend: false
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Bảng Giá <span className="text-cyan-400">Dịch Vụ</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Lựa chọn gói dịch vụ phù hợp với quy mô và mục tiêu phát triển của doanh nghiệp bạn.
                        Cam kết minh bạch và hiệu quả cao nhất.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 border ${plan.color} flex flex-col`}
                        >
                            {plan.recommend && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-white text-sm font-bold rounded-full uppercase tracking-wider">
                                    Phổ biến nhất
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="text-3xl font-bold text-cyan-400 mb-4">{plan.price}</div>
                            <p className="text-slate-400 text-sm mb-8">{plan.desc}</p>

                            <div className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check size={18} className="text-green-400 mt-0.5 shrink-0" />
                                        <span className="text-slate-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/lien-he"
                                className={`w-full py-3 rounded-xl text-white font-bold text-center transition-all flex items-center justify-center gap-2 ${plan.btnColor}`}
                            >
                                Tư Vấn Ngay <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
