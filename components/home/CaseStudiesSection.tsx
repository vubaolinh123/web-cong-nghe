"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, Users, FileText, BarChart3, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
    icon: React.ElementType;
    title: string;
    client: string;
    challenge: string;
    solution: string;
    result: string;
    color: string;
    bgGlow: string;
}

export default function CaseStudiesSection() {
    const caseStudies: CaseStudy[] = [
        {
            icon: Calendar,
            title: "Calendar AI Agent",
            client: "TPBank",
            challenge: "Quản lý lịch họp phức tạp cho đội ngũ",
            solution: "AI Agent tự động sắp xếp và tối ưu lịch làm việc",
            result: "Tiết kiệm 15 giờ/tuần cho bộ phận điều phối",
            color: "from-blue-400 to-cyan-500",
            bgGlow: "bg-blue-500/20",
        },
        {
            icon: MessageSquare,
            title: "AI Chatbot",
            client: "Thinh Phan Suit",
            challenge: "Tư vấn khách hàng về size, phong cách, chất liệu",
            solution: "Chatbot tích hợp kiến thức sản phẩm và tư vấn phong cách",
            result: "Tăng 40% tỷ lệ khách hàng đặt lịch thử đồ",
            color: "from-green-400 to-emerald-500",
            bgGlow: "bg-green-500/20",
        },
        {
            icon: Users,
            title: "Lead Generation",
            client: "Caffè Saphie",
            challenge: "Thu thập thông tin khách hàng tiềm năng",
            solution: "Hệ thống automation thu thập data và phân loại leads tự động",
            result: "Tăng số lượng leads chất lượng mỗi tháng",
            color: "from-purple-400 to-pink-500",
            bgGlow: "bg-purple-500/20",
        },
        {
            icon: FileText,
            title: "Read Invoice",
            client: "Ngân hàng",
            challenge: "Xử lý hàng nghìn hóa đơn thủ công",
            solution: "AI tự động đọc, phân loại và nhập dữ liệu từ hóa đơn",
            result: "Giảm 80% thời gian xử lý",
            color: "from-orange-400 to-red-500",
            bgGlow: "bg-orange-500/20",
        },
        {
            icon: BarChart3,
            title: "AI Agent Quản lý",
            client: "Shop Apple",
            challenge: "Theo dõi doanh số, sửa chữa, thu cũ của cửa hàng",
            solution: "Agent quản lý tạo báo cáo tự động",
            result: "Tối ưu 25% hiệu quả quản lý",
            color: "from-cyan-400 to-blue-500",
            bgGlow: "bg-cyan-500/20",
        },
        {
            icon: Zap,
            title: "Automation System",
            client: "Đa ngành",
            challenge: "Tự động hóa các tác vụ lặp đi lặp lại",
            solution: "Tự động tạo content, báo cáo, nhập liệu, research",
            result: "Giảm 60% thời gian thao tác thủ công",
            color: "from-yellow-400 to-orange-500",
            bgGlow: "bg-yellow-500/20",
        },
    ];

    return (
        <section className="relative py-8 sm:py-10 lg:py-0 lg:min-h-screen lg:h-full flex items-center justify-center bg-slate-950 overflow-hidden">
            {/* Background Effects - Smaller on mobile */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-4 sm:mb-5"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                        Dự Án{" "}
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            Thành Công
                        </span>
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto px-2 sm:px-0">
                        Khám phá cách chúng tôi giúp doanh nghiệp tận dụng sức mạnh AI để tối ưu vận hành
                    </p>
                </motion.div>

                {/* Case Studies Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-3">
                    {caseStudies.map((caseStudy, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="relative p-3 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 transition-all duration-300 h-full overflow-hidden">
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 ${caseStudy.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-1.5 sm:mb-2">
                                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${caseStudy.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <caseStudy.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-xs text-slate-500 font-medium">{caseStudy.client}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                                        {caseStudy.title}
                                    </h3>

                                    {/* Challenge & Solution */}
                                    <div className="space-y-1 mb-1.5 sm:mb-2">
                                        <div>
                                            <span className="text-xs text-slate-500 font-medium">Thách thức:</span>
                                            <p className="text-slate-400 text-xs leading-tight">{caseStudy.challenge}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs text-slate-500 font-medium">Giải pháp:</span>
                                            <p className="text-slate-400 text-xs leading-tight">{caseStudy.solution}</p>
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${caseStudy.color} bg-opacity-10 border border-slate-700`}>
                                        <span className="text-xs font-semibold text-white">{caseStudy.result}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="text-center mt-4 sm:mt-5"
                >
                    <Link href="/lien-he" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity group">
                        <span>Bắt đầu dự án của bạn</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
