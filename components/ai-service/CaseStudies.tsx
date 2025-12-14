"use client";

import { motion } from "framer-motion";
import { Container } from "../common";
import { ArrowRight, TrendingUp, Users, Clock, Database, BarChart3 } from "lucide-react";

const cases = [
    {
        title: "Calendar AI Agent cho TPBank",
        icon: Clock,
        challenge: "Quản lý lịch họp phức tạp cho đội ngũ",
        solution: "AI Agent tự động sắp xếp và tối ưu lịch làm việc",
        result: "Tiết kiệm 15 giờ/tuần cho bộ phận điều phối",
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        title: "AI Chatbot cho Thinh Phan Suit",
        icon: Users,
        challenge: "Tư vấn khách hàng về size, phong cách, chất liệu",
        solution: "Chatbot tích hợp kiến thức sản phẩm và tư vấn phong cách",
        result: "Tăng 40% tỷ lệ khách hàng đặt lịch thử đồ",
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Lead Generation cho Caffè Saphie",
        icon: TrendingUp,
        challenge: "Thu thập thông tin khách hàng tiềm năng",
        solution: "Hệ thống automation thu thập data khách phân loại leads tự động",
        result: "Tăng số lượng leads chất lượng mỗi tháng",
        color: "text-green-400",
        bg: "bg-green-400/10"
    },
    {
        title: "Read Invoice cho Ngân hàng",
        icon: Database,
        challenge: "Xử lý hàng nghìn hóa đơn thủ công",
        solution: "AI tự động đọc, phân loại và nhập dữ liệu từ hóa đơn",
        result: "Giảm 80% thời gian xử lý",
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    },
    {
        title: "AI Agent Quản lý cho Shop Apple",
        icon: BarChart3,
        challenge: "Theo dõi tình hình doanh số, số máy sửa chữa, thu cũ",
        solution: "Agent quản lý tạo báo cáo tự động",
        result: "Tối ưu 25% hiệu quả quản lý",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10" // Fixed color reference from text-cyan-400 to specific bg
    }
];

export default function CaseStudies() {
    return (
        <section className="py-20 sm:py-32 bg-slate-900/50">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Case Studies
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        Những câu chuyện thành công thực tế
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors flex flex-col h-full"
                        >
                            <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mb-6`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">{item.title}</h3>

                            <div className="space-y-4 flex-grow">
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Thách thức</h4>
                                    <p className="text-slate-300 text-sm">{item.challenge}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Giải pháp</h4>
                                    <p className="text-slate-300 text-sm">{item.solution}</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-800">
                                <h4 className="text-xs font-semibold text-green-500 uppercase tracking-wider mb-1">Kết quả</h4>
                                <p className="text-white font-medium text-sm flex items-center gap-2">
                                    {item.result}
                                    <ArrowRight size={14} className="text-green-500" />
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Summary Card for other systems */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: cases.length * 0.1 }}
                        className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center h-full"
                    >
                        <div className="mb-4">
                            <span className="text-4xl">🚀</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Các Hệ Thống Khác</h3>
                        <ul className="text-slate-400 text-sm space-y-2 mb-6">
                            <li>Tự động tạo content</li>
                            <li>Báo cáo tự động</li>
                            <li>Nhập liệu tự động</li>
                            <li>Research Agent</li>
                        </ul>
                        <p className="text-cyan-400 text-sm font-medium">Và nhiều hơn nữa...</p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
