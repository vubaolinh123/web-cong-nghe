"use client";

import { motion } from "framer-motion";
import {
    MessageCircle,
    FileSignature,
    FileText,
    BadgeDollarSign,
    RefreshCcw
} from "lucide-react";

export default function Process() {
    const steps = [
        {
            num: "B1",
            icon: MessageCircle,
            title: "ĐĂNG KÝ",
            desc: "Khách hàng lựa chọn và quyết định kiểu group tên group tệp khách hàng mình mong muốn."
        },
        {
            num: "B2",
            icon: FileSignature,
            title: "TƯ VẤN",
            desc: "Khách hàng liên hệ yêu cầu tư vấn đặt mua nhóm facebook phù hợp nhu cầu sử dụng."
        },
        {
            num: "B3",
            icon: FileText,
            title: "LÊN HỢP ĐỒNG",
            desc: "ASI Everest đề xuất gói dịch vụ khách chọn gói hợp lý lên hợp đồng gửi khách xem qua duyệt."
        },
        {
            num: "B4",
            icon: BadgeDollarSign,
            title: "THANH TOÁN",
            desc: "Thanh toán phí đặt mua nhóm cho ASI Everest xác nhận và triển khai."
        },
        {
            num: "B5",
            icon: RefreshCcw,
            title: "BÀN GIAO",
            desc: "Đổi tên nhóm theo yêu cầu & cấp quyền quản trị viên và bàn giao nhóm group đúng hẹn hợp đồng."
        }
    ];

    return (
        <section className="py-20 bg-slate-900 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5 blur-[100px]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
                        Quy Trình Triển Khai Dịch Vụ Mua Bán <span className="text-blue-500 bg-white/10 px-2 rounded">Group Facebook</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-slate-950 rounded-[40px] p-8 border border-yellow-500/50 flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300 ${index === 4 ? 'lg:col-start-2' : ''}`}
                        >
                            <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 relative z-10">
                                <step.icon size={36} />
                            </div>

                            <div className="absolute top-8 left-8 text-4xl font-black text-slate-800 z-0 opacity-50">{step.num}</div>

                            <h3 className="text-xl font-bold text-black bg-white px-4 py-1 rounded-full mb-4 shadow-lg">{step.num} {step.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
