"use client";

import { motion } from "framer-motion";

export default function TiktokBenefits() {
    const items = [
        {
            title: "CHIẾN DỊCH HÀNG THÁNG",
            subtitle: "TĂNG DOANH SỐ LÊN 20 LẦN",
            desc: "Bạn có kênh lên ý tưởng chiến dịch hàng tháng nâng cao uy tín doanh số lên gấp 20 lần bình thường từ sản phẩm và dịch vụ của bạn.",
            img: "/image/tiktok_growth_real.jpg",
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "KIẾM THÊM THU NHẬP",
            subtitle: "TỪ CÁC SẢN PHẨM NHÃN HÀNG",
            desc: "Hợp tác các nhãn hàng sản phẩm để làm tiếp thị liên kết phát triển doanh thu ngày càng bến vững viral sản phẩm của bạn lên tầm cao mới.",
            img: "/image/tiktok_shop_real.jpg",
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "TIẾT KIỆM THỜI GIAN",
            subtitle: "TĂNG 100 TRIỆU / THÁNG",
            desc: "Có kênh tiktok hàng 100.000 follow nhanh để phát triển video bán hàng và live bán hàng hiệu quả doanh thu đem về thu nhập hàng 100 triệu / tháng với sản phẩm mình có trong tay.",
            img: "/image/tiktok_live_real.jpg",
            color: "from-purple-500 to-violet-500"
        }
    ];

    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-[400px] aspect-[4/3]">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-[50px] opacity-20`} />
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                                <h3 className={`text-2xl md:text-4xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                                    {item.title}
                                </h3>
                                <h4 className="text-xl md:text-2xl font-bold text-white">
                                    {item.subtitle}
                                </h4>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
