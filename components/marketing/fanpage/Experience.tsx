"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Settings, Users2 } from "lucide-react";

export default function Experience() {
    const points = [
        {
            icon: Users2,
            title: "Chọn đối tác uy tín",
            desc: "Tìm kiếm và đánh giá tổng quan về uy tín thương hiệu và chất lượng dịch vụ trước khi liên hệ đặt mua fanpage từ Agency."
        },
        {
            icon: ShieldCheck,
            title: "Kiểm tra chất lượng",
            desc: "Được phép yêu cầu bên bán cung cấp thông tin Insight để đánh giá về chất lượng, tương tác, giới tính, độ tuổi xem có phù hợp sản phẩm không."
        },
        {
            icon: Settings,
            title: "Chính sách bảo hành",
            desc: "Để tránh rủi ro trong quá trình sử dụng, ASI Everest cam kết chính sách bảo hành rõ ràng, hỗ trợ đổi tên và back lại tiền nếu lỗi."
        },
        {
            icon: UserCheck,
            title: "Bàn giao toàn quyền",
            desc: "Yêu cầu bên bán chuyển giao toàn bộ quyền sở hữu fanpage (Admin) để khách hàng tự mình quản lý, bảo mật tuyệt đối."
        }
    ];

    return (
        <section className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        className="flex-1 space-y-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Kinh Nghiệm <br />
                                <span className="text-green-500">Mua Page Facebook</span>
                            </h2>
                            <p className="text-slate-400 text-lg">
                                Thị trường mua bán Page hiện nay "thượng vàng hạ cám". Dưới đây là những tiêu chí quan trọng bạn cần nằm lòng trước khi xuống tiền.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {points.map((point, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700">
                                    <div className="shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                                        <point.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute inset-0 bg-green-500/10 rounded-full blur-[80px]" />
                        <img
                            src="/image/fanpage_audit_real.jpg"
                            alt="Fanpage Audit Secure"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border border-green-500/20"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
