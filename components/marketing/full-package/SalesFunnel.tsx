"use client";

import { motion } from "framer-motion";

export default function SalesFunnel() {
    const funnelStages = [
        {
            title: "ĐẦU PHỄU (TOFU)",
            subtitle: "Xây dựng nhận thức",
            desc: "Tiếp cận rộng rãi, thu hút khách hàng tiềm năng mới thông qua SEO, Social Media, Content Viral.",
            color: "bg-yellow-500",
            textColor: "text-yellow-400"
        },
        {
            title: "GIỮA PHỄU (MOFU)",
            subtitle: "Tạo sự quan tâm",
            desc: "Cung cấp giá trị, giáo dục khách hàng, giữ chân họ bằng nội dung hữu ích, Email Marketing, Retargeting.",
            color: "bg-orange-500",
            textColor: "text-orange-400"
        },
        {
            title: "CUỐI PHỄU (BOFU)",
            subtitle: "Thúc đẩy hành động",
            desc: "Chuyển đổi traffic thành đơn hàng với ưu đãi, bài bán hàng thuyết phục (Sales Page), chốt sale.",
            color: "bg-red-500",
            textColor: "text-red-400"
        }
    ];

    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Tối Ưu Chuyển Đổi Với <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                            Sales Funnel Đa Tầng
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed"
                    >
                        Tại VTS Marketing, chúng tôi thay đổi hoàn toàn cách quảng cáo truyền thống.
                        Thay vì chỉ tập trung đốt tiền vào quảng cáo hiển thị, chúng tôi "hình tượng hoá"
                        hành trình mua hàng và tối ưu từng điểm chạm từ người lạ thành khách hàng trung thành.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-blue-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />
                        <img
                            src="/image/real/sales_funnel.jpg"
                            alt="3D Sales Funnel Visualization"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border border-slate-700/50 hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                            <p className="text-white text-sm md:text-base font-medium text-center">
                                Phương pháp <span className="text-green-400 font-bold">SALE FUNNEL</span> giúp tối ưu ngân sách quảng cáo & đạt tỷ lệ chuyển đổi tốt nhất ngay từ giây phút đầu tiên.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stages Detail */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
                            {funnelStages.map((stage, index) => (
                                <div key={index} className="relative group">
                                    <span className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-slate-950 ${stage.color} group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />

                                    <h3 className={`text-2xl font-bold ${stage.textColor} mb-2`}>{stage.title}</h3>
                                    <div className="text-white font-medium mb-3 uppercase tracking-wide text-sm bg-slate-800/50 inline-block px-3 py-1 rounded-md">
                                        {stage.subtitle}
                                    </div>
                                    <p className="text-slate-400 leading-relaxed text-base">
                                        {stage.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/30 to-slate-900 p-6 rounded-2xl border border-blue-500/20 mt-8">
                            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                Chiến Lược Funnel Advertising
                            </h4>
                            <p className="text-slate-400 text-sm">
                                Khác với Agency truyền thống thường chỉ tập trung vào Đầu phễu, chúng tôi bắt đầu chiến dịch từ giai đoạn <strong className="text-white">BOFU (Cuối phễu)</strong> - nơi gần chuyển đổi nhất, giúp doanh nghiệp có doanh thu ngay lập tức để tái đầu tư mở rộng phễu.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
