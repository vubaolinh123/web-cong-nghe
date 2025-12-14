"use client";

import { motion } from "framer-motion";
import { Workflow, MessageSquare, Bot, Layout, CheckCircle } from "lucide-react";
import { Container } from "../common";

const services = [
    {
        icon: Workflow,
        title: "Automation (Low-code Platform)",
        description: "Tự động hóa quy trình làm việc với n8n - nền tảng low-code mạnh mẽ.",
        features: [
            "Tự động báo cáo và phân tích dữ liệu",
            "Nghiên cứu thị trường tự động",
            "Phân công và cập nhật công việc"
        ],
        color: "from-blue-400 to-cyan-400"
    },
    {
        icon: MessageSquare,
        title: "AI Chatbot",
        description: "Chatbot thông minh phục vụ khách hàng 24/7, tự động chăm sóc và chuyển đổi leads.",
        features: [
            "Tư vấn sản phẩm tức thì",
            "Thu thập thông tin khách hàng",
            "Chăm sóc khách hàng cũ"
        ],
        color: "from-green-400 to-emerald-400"
    },
    {
        icon: Bot,
        title: "AI Agent",
        description: "Các trợ lý AI chuyên biệt cho từng nhu cầu cụ thể.",
        features: [
            "Trợ lý Cá nhân: Quản lý lịch, email",
            "Sáng tạo Nội dung: Viết bài, thiết kế",
            "Quản lý: Giám sát vận hành, báo cáo"
        ],
        color: "from-purple-400 to-pink-400"
    },
    {
        icon: Layout,
        title: "Custom Websites & Apps",
        description: "Xây dựng website và ứng dụng tích hợp AI theo yêu cầu riêng của doanh nghiệp.",
        features: [
            "Thiết kế UX/UI tối ưu",
            "Tích hợp AI sẵn có",
            "Responsive mọi thiết bị"
        ],
        color: "from-orange-400 to-red-400"
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
                        Dịch Vụ Của Chúng Tôi
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Giải pháp công nghệ toàn diện giúp doanh nghiệp bứt phá
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

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
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
