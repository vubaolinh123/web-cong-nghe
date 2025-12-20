"use client";

import { motion } from "framer-motion";
import { Search, Share2, Mail, Globe, Users, MessageCircle } from "lucide-react";

export default function TrafficSources() {
    const sources = [
        {
            icon: Search,
            title: "SEO Traffic",
            desc: "Khách hàng đến từ công cụ tìm kiếm (Google) thông qua từ khoá tự nhiên, bền vững và miễn phí.",
            color: "text-blue-400",
            bg: "bg-blue-400/10 border-blue-400/20"
        },
        {
            icon: Users,
            title: "Social Media",
            desc: "Lượng truy cập từ các mạng xã hội (Facebook, TikTok, Instagram) - Nơi tập trung đông đảo khách hàng nhất.",
            color: "text-purple-400",
            bg: "bg-purple-400/10 border-purple-400/20"
        },
        {
            icon: Share2,
            title: "Paid Traffic",
            desc: "Lưu lượng truy cập trả phí (Ads). Cam kết ra đơn nhanh chóng, tiếp cận đúng đối tượng mục tiêu ngay lập tức.",
            color: "text-green-400",
            bg: "bg-green-400/10 border-green-400/20"
        },
        {
            icon: Mail,
            title: "Email Marketing",
            desc: "Chăm sóc và kéo khách hàng quay lại website từ danh sách email đã thu thập, tỷ lệ chuyển đổi cao.",
            color: "text-yellow-400",
            bg: "bg-yellow-400/10 border-yellow-400/20"
        },
        {
            icon: Globe,
            title: "Direct Traffic",
            desc: "Khách hàng nhập trực tiếp tên miền website. Thể hiện sức mạnh thương hiệu (Brand Awareness) cực lớn.",
            color: "text-cyan-400",
            bg: "bg-cyan-400/10 border-cyan-400/20"
        },
        {
            icon: MessageCircle,
            title: "Referral Traffic",
            desc: "Lượng truy cập được giới thiệu từ các trang web uy tín khác (Backlink, PR báo chí, Partner).",
            color: "text-pink-400",
            bg: "bg-pink-400/10 border-pink-400/20"
        }
    ];

    return (
        <section className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Đa Dạng Nguồn <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                                    Truy Cập (Traffic)
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Khi đã xác định được chân dung khách hàng, chúng tôi triển khai hệ thống "đổ" traffic từ đa kênh vào phễu bán hàng.
                                Mỗi nguồn traffic hoạt động độc lập nhưng bổ trợ mạnh mẽ cho nhau trong từng giai đoạn.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sources.map((source, index) => (
                                <div key={index} className={`p-5 rounded-xl border ${source.bg} hover:bg-opacity-20 transition-all cursor-none`}>
                                    <div className={`w-10 h-10 rounded-lg ${source.bg} flex items-center justify-center mb-3 ${source.color}`}>
                                        <source.icon size={20} />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">{source.title}</h3>
                                    <p className="text-slate-400 text-sm leading-snug">
                                        {source.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full" />
                        <img
                            src="/image/real/traffic_sources.jpg"
                            alt="Traffic Sources Network"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border border-orange-500/20"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
