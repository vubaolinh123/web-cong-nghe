"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, UserCircle2 } from "lucide-react";

export default function MarketingStrategy() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-green-600/10 rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Part 1: Reverse Funnel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent blur-2xl rounded-full" />
                        <img
                            src="/image/real/marketing_strategy.jpg"
                            alt="Reverse Sales Funnel Growth"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border border-yellow-500/20 hover:shadow-yellow-500/20 transition-shadow duration-500"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Chiều Ngược Lại Của <br />
                            <span className="text-yellow-400">Phễu Bán Hàng</span>
                        </h2>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-yellow-400 font-bold shrink-0 shadow-lg border border-yellow-500/20">01</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Thu Hút (Attraction)</h3>
                                    <p className="text-slate-400">Tạo nội dung hấp dẫn để khách hàng tự tìm đến thay vì làm phiền họ.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-yellow-400 font-bold shrink-0 shadow-lg border border-yellow-500/20">02</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Tương Tác (Interaction)</h3>
                                    <p className="text-slate-400">Xây dựng mối quan hệ, trò chuyện và giải quyết vấn đề của khách hàng.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-yellow-400 font-bold shrink-0 shadow-lg border border-yellow-500/20">03</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Chuyển Đổi (Conversion)</h3>
                                    <p className="text-slate-400">Khi niềm tin đủ lớn, khách hàng sẽ sẵn sàng chi trả cho sản phẩm/dịch vụ.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-slate-900 font-bold shrink-0 shadow-lg shadow-yellow-500/30">04</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Giao Dịch (Transaction)</h3>
                                    <p className="text-slate-400">Hoàn tất bán hàng và bắt đầu quy trình chăm sóc sau bán (Loyalty).</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: Target Persona */}
                <div className="bg-slate-800/50 rounded-[40px] p-8 md:p-12 border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold mb-6">
                                <UserCircle2 size={20} />
                                <span>Target Persona</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Chân Dung <br />
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Khách Hàng Mục Tiêu</span>
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Khách hàng mục tiêu của doanh nghiệp được thiết kế để đại diện cho những mong muốn và nhu cầu của 1 tệp khách hàng.
                                <br /><br />
                                Tạo cá tính cùng thông tin chi tiết cho từng phân khúc khách hàng giúp bạn nhắm mục tiêu tốt hơn trong các thông điệp quảng cáo/nội dung sau này.
                            </p>
                            <a href="#pricing" className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-cyan-500 pb-1 hover:text-cyan-400 transition-colors">
                                Xây dựng chiến lược ngay <ArrowUpRight size={18} />
                            </a>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/image/real/target_audience.jpg"
                                alt="Target Audience Persona AI"
                                className="w-full rounded-2xl shadow-2xl border border-slate-600/50 hover:border-cyan-500/50 transition-colors duration-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
