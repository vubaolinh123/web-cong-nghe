"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Target } from "lucide-react";

export default function Benefits() {
    const items = [
        {
            icon: Users,
            title: "TIẾP CẬN KHÁCH HÀNG",
            desc: "Việc mua và sở hữu trang fanpage nhiều like, nhiều follow hỗ trợ tiếp xúc được nhiều đối tượng trên Facebook tăng tương tác dễ dàng."
        },
        {
            icon: Rocket,
            title: "PHÁT TRIỂN THƯƠNG HIỆU",
            desc: "Càng nhiều người biết đến và quan tâm thì giá trị thương hiệu sẽ tăng. Trên Facebook, fanpage nhiều like sẽ khẳng định cho giá trị của thương hiệu, sản phẩm."
        },
        {
            icon: Target,
            title: "BÁN HÀNG HIỆU QUẢ",
            desc: "Fanpage nhiều like hỗ trợ bán hàng hiệu quả thông qua việc giúp đến gần nhiều thành viên, tăng cường uy tín thương hiệu để đi đến chuyển đổi."
        }
    ];

    return (
        <section className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-transparent border border-cyan-500/30 rounded-3xl p-8 hover:bg-slate-800/50 transition-all text-center group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                        >
                            <div className="w-16 h-16 mx-auto bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform shadow-lg shadow-green-500/30">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Banner Image */}
                <motion.div
                    className="mt-16 rounded-3xl overflow-hidden relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/image/fanpage_viral.png"
                        alt="Viral Marketing Banner"
                        className="w-full object-cover max-h-[500px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent flex items-center p-8 md:p-16">
                        <div className="max-w-xl">
                            <span className="text-green-400 font-bold tracking-widest uppercase mb-2 block">Viral Marketing</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Biến Mọi Nội Dung Trở Nên <span className="text-white">VIRAL</span></h2>
                            <p className="text-slate-200 text-lg mb-8">
                                Tiếp cận TRIỆU khách hàng không tốn 1 đồng chạy Ads nhờ sở hữu hệ thống Page vệ tinh chất lượng.
                            </p>
                            <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform">
                                Tìm Hiểu Ngay
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
