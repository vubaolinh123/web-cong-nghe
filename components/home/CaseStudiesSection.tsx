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
        <section className="relative py-12 sm:py-16 lg:py-0 lg:min-h-screen lg:h-full flex items-center justify-center bg-slate-950 overflow-hidden">
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
                    className="text-center mb-6 sm:mb-8"
                >
                    <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 block">
                        Case Studies
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
                        Dự Án{" "}
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            Thành Công
                        </span>
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto px-2 sm:px-0">
                        Khám phá cách chúng tôi giúp doanh nghiệp tận dụng sức mạnh AI để tối ưu vận hành
                    </p>
                </motion.div>

                {/* Case Studies Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                    {caseStudies.map((caseStudy, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="relative p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 transition-all duration-300 h-full overflow-hidden">
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 ${caseStudy.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                                        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <caseStudy.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        </div>
                                        <span className="text-xs text-slate-500 font-medium">{caseStudy.client}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {caseStudy.title}
                                    </h3>

                                    {/* Challenge & Solution */}
                                    <div className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3">
                                        <div>
                                            <span className="text-xs text-slate-500 font-medium">Thách thức:</span>
                                            <p className="text-slate-400 text-xs sm:text-sm">{caseStudy.challenge}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs text-slate-500 font-medium">Giải pháp:</span>
                                            <p className="text-slate-400 text-xs sm:text-sm">{caseStudy.solution}</p>
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${caseStudy.color} bg-opacity-10 border border-slate-700`}>
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
                    className="text-center mt-6 sm:mt-8"
                >
                    <Link href="/lien-he" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity group">
                        <span>Bắt đầu dự án của bạn</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
