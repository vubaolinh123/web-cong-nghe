"use client";

import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                        Kênh <strong className="text-white">Group Facebook</strong> là phương án đầu tiên của nhiều người khi họ bắt đầu kinh doanh & phát triển uy tín kinh doanh.
                        Bởi vì hiện nay các hoạt động trong group hết sức sôi nổi.
                        Đặc biệt là các lĩnh vực dịch vụ, kinh doanh, bán hàng.
                    </p>
                    <p className="text-lg text-slate-400">
                        Nếu khách hàng cần mua và sở hữu 1 group nhiều thành viên, hãy liên hệ với
                        <span className="text-green-400 font-bold ml-1">ASI Everest</span> để được tư vấn đặt mua nhóm Facebook phù hợp.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
