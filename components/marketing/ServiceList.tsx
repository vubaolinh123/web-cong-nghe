"use client";

import { motion } from "framer-motion";
import { Megaphone, Users, Video, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Container, Button } from "../common";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        icon: Megaphone,
        title: "Marketing Tổng Thể A-Z",
        description: "Giải pháp marketing trọn gói từ A đến Z, bao gồm chiến lược, triển khai và tối ưu hiệu quả. Cam kết doanh số và ROI.",
        features: [
            "Lập kế hoạch marketing chi tiết",
            "Triển khai đa kênh đồng bộ",
            "Báo cáo và tối ưu liên tục",
            "Đội ngũ chuyên gia 1-1"
        ],
        color: "from-green-400 to-emerald-400",
        image: "/images/marketing_full_package_3d.png",
        href: "/dich-vu-marketing/marketing-tong-the"
    },
    {
        icon: Users,
        title: "Xây Group Facebook",
        description: "Xây dựng cộng đồng Facebook chất lượng cao, tương tác mạnh mẽ để phát triển thương hiệu bền vững và khai thác khách hàng tiềm năng.",
        features: [
            "Tạo và phát triển group từ 0",
            "Thu hút thành viên chất lượng",
            "Nội dung viral thu hút",
            "Quản lý và moderation 24/7"
        ],
        color: "from-blue-400 to-cyan-400",
        image: "/images/marketing_group_3d.png",
        href: "/dich-vu-marketing/xay-dung-group-facebook"
    },
    {
        icon: BarChart3,
        title: "Fanpage Truyền Thông & Ads",
        description: "Xây dựng và chăm sóc Fanpage chuyên nghiệp, kết hợp chạy quảng cáo Facebook Ads tối ưu chi phí, ra đơn ngay lập tức.",
        features: [
            "Thiết kế Fanpage chuyên nghiệp",
            "Nội dung sáng tạo hàng ngày",
            "Chạy Ads tối ưu chi phí",
            "Tăng followers thực chất lượng"
        ],
        color: "from-purple-400 to-pink-400",
        image: "/images/marketing_fanpage_3d.png",
        href: "/dich-vu-marketing/xay-dung-fanpage"
    },
    {
        icon: Video,
        title: "TikTok & Shop Livestream",
        description: "Xây dựng kênh TikTok triệu view và hệ thống TikTok Shop, tổ chức các phiên Livestream bán hàng chuyên nghiệp doanh thu khủng.",
        features: [
            "Setup kênh TikTok chuẩn SEO",
            "Sản xuất video viral trending",
            "TikTok Shop & Affiliate",
            "Livestream bán hàng chuyên nghiệp"
        ],
        color: "from-pink-400 to-red-400",
        image: "/images/marketing_tiktok_3d.png",
        href: "/dich-vu-marketing/xay-dung-tiktok-shop"
    }
];

export default function ServiceList() {
    return (
        <section id="services" className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <Container>
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Dịch Vụ Marketing <span className="text-cyan-400">Chuyên Sâu</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Hệ sinh thái giải pháp Marketing toàn diện, được may đo riêng cho từng mô hình doanh nghiệp
                    </motion.p>
                </div>

                <div className="space-y-24 sm:space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-700`} />
                                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-4"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className={`inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 mb-6`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                    {service.title}
                                </h3>

                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle className={`w-5 h-5 bg-gradient-to-br ${service.color} bg-clip-text text-transparent shrink-0`} />
                                            <span className="text-slate-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href={service.href}>
                                    <Button className="group bg-slate-100 hover:bg-white text-slate-900 font-bold px-8 py-6 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                                        Xem Chi Tiết Dịch Vụ
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
