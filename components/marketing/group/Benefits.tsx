"use client";

import { motion } from "framer-motion";

export default function Benefits() {
    const items = [
        {
            title: "XÂY DỰNG CỘNG ĐỒNG",
            desc: "Trở thành admin group facebook đồng nghĩa bạn đang có một cộng đồng người dùng cũng cùng quan tâm đến một chủ đề nào đó.",
            img: "/image/group/users.jpg"
        },
        {
            title: "HỖ TRỢ BÁN HÀNG",
            desc: "Đăng bán sản phẩm trong group, chia sẻ livestream vào group ... là phương án bán hàng hiệu quả cho người kinh doanh ở thời điểm hiện tại.",
            img: "/image/group/rocket.jpg"
        },
        {
            title: "PHÁT TRIỂN THƯƠNG HIỆU",
            desc: "Doanh nghiệp cũng có thể xây dựng hình ảnh thương hiệu trên group nhiều thành viên, lan truyền thông điệp hiệu quả nhất có thể.",
            img: "/image/group/shield.jpg"
        }
    ];

    return (
        <section className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-slate-900 rounded-[40px] p-8 border border-green-500/30 text-center hover:border-green-500 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 h-40 mb-6 flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-full object-contain drop-shadow-[0_0_15px_rgba(74,222,128,0.5)] transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="relative z-10 text-xl font-bold text-white mb-4 uppercase">{item.title}</h3>
                            <p className="relative z-10 text-slate-400 leading-relaxed text-sm lg:text-base">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
