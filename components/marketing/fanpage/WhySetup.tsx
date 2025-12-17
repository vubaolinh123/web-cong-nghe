"use client";

import { motion } from "framer-motion";

export default function WhySetup() {
    return (
        <section className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Tại Sao Cần <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Setup Fanpage/Group?</span>
                    </h2>
                    <p className="text-slate-400 max-w-4xl mx-auto text-lg leading-relaxed">
                        Mua và Setup <strong className="text-white">Fanpage Facebook</strong> là phương án đầu tiên của nhiều người khi họ bắt đầu kinh doanh.
                        Bởi vì hiện nay các hoạt động trên Facebook hết sức sôi nổi.
                        Nếu khách hàng cần mua và sở hữu 1 group nhiều thành viên, hãy liên hệ với ASI Everest để được tư vấn chốt đơn phù hợp.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                    {/* Visual Chart */}
                    <motion.div
                        className="flex-1 relative rounded-2xl overflow-hidden min-h-[400px]"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/image/fanpage_growth.png"
                            alt="Growth Chart"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Tăng Trưởng Thần Tốc</h3>
                            <p className="text-slate-300">Sở hữu ngay tệp khách hàng có sẵn, bỏ qua giai đoạn "build" từ con số 0 cực khổ.</p>
                        </div>
                    </motion.div>

                    {/* Youtube Embed */}
                    <motion.div
                        className="flex-1 bg-slate-900 rounded-2xl p-2 border border-slate-800 shadow-xl"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative w-full h-full min-h-[300px] lg:min-h-full rounded-xl overflow-hidden bg-black">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/pYVX5XDybwk"
                                title="Setup Nâng Cấp FANPAGE, 1000 Đơn hàng / tháng"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
