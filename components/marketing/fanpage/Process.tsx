"use client";

import { motion } from "framer-motion";
import { FileSignature, MessagesSquare, BadgeDollarSign, Wallet, RefreshCw } from "lucide-react";

export default function Process() {
    const steps = [
        {
            num: "01",
            icon: FileSignature,
            title: "B1 ĐĂNG KÝ",
            desc: "Khách hàng lựa chọn và quyết định kiểu Fanpage & tệp từ khóa dính khách hàng mình mong muốn."
        },
        {
            num: "02",
            icon: MessagesSquare,
            title: "B2 TƯ VẤN",
            desc: "Khách hàng liên hệ yêu cầu tư vấn đặt mua Fanpage phù hợp nhu cầu sử dụng."
        },
        {
            num: "03",
            icon: BadgeDollarSign,
            title: "B3 BÁO GIÁ",
            desc: "ASI Everest đề xuất nhóm phù hợp và báo giá chi tiết cho từng chủ đề từng nhóm."
        },
        {
            num: "04",
            icon: Wallet,
            title: "B4 THANH TOÁN",
            desc: "Thanh toán phí đặt mua nhóm cho ASI Everest trước khi bàn giao."
        },
        {
            num: "05",
            icon: RefreshCw,
            title: "B5 BÀN GIAO",
            desc: "Đổi tên nhóm theo yêu cầu & cấp quyền quản trị viên và bàn giao Fanpage."
        }
    ];

    return (
        <section className="py-20 bg-slate-950 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
                        Quy Trình Triển Khai <span className="text-cyan-400">Dịch Vụ Setup</span> Fanpage
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`bg-slate-900/50 backdrop-blur-sm rounded-[30px] p-8 border border-slate-800 flex flex-col items-center text-center relative hover:-translate-y-2 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 text-cyan-400 flex items-center justify-center mb-6 shadow-lg">
                                <step.icon size={32} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
