"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const questions = [
        {
            q: "MUA KÊNH TIKTOK CÓ AN TOÀN KHÔNG?",
            a: "Hoàn toàn an toàn. ASI Everest cung cấp kênh TikTok sạch, đã được nuôi kỹ, follower thật 100% từ người dùng Việt. Chúng tôi bảo hành và hỗ trợ đổi tên, đổi thông tin bảo mật đầy đủ."
        },
        {
            q: "TÔI CÓ THỂ LIVE VÀ MỞ SHOP NGAY KHÔNG?",
            a: "Có. Các kênh do ASI Everest cung cấp đều đã đủ điều kiện để mở TikTok Shop và Livestream ngay lập tức. Chúng tôi hỗ trợ setup ban đầu để bạn bắt đầu bán hàng nhanh nhất."
        },
        {
            q: "FOLLOWER CÓ BỊ TỤT SAU KHI MUA KHÔNG?",
            a: "Tỷ lệ tụt là rất thấp và không đáng kể vì đây là người dùng thật. ASI Everest cam kết bảo hành lượng follower trọn đời cho các gói cao cấp."
        },
        {
            q: "LÀM SAO ĐỂ VIDEO CỦA TÔI LÊN XU HƯỚNG?",
            a: "Chúng tôi cung cấp các gói hỗ trợ nội dung, kịch bản video và seeding (tăng comment, like, share) để kích thích thuật toán TikTok đề xuất video của bạn lên xu hướng."
        },
        {
            q: "TÔI CHƯA BIẾT GÌ VỀ TIKTOK SHOP THÌ SAO?",
            a: "Đừng lo, ASI Everest có đội ngũ support 1:1 hướng dẫn bạn từ A-Z: cách đăng sản phẩm, cách vận hành shop, cách xử lý đơn hàng và tối ưu doanh thu."
        }
    ];

    return (
        <section className="py-20 bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase">CÂU HỎI THƯỜNG GẶP</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="border border-slate-800 rounded-2xl bg-slate-900/50 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-slate-800 transition-colors focus:outline-none"
                            >
                                <h3 className={`text-base md:text-lg font-bold ${openIndex === index ? 'text-pink-500' : 'text-slate-300'}`}>
                                    {item.q}
                                </h3>
                                <div className={`p-1 rounded-full ${openIndex === index ? 'bg-pink-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="border-t border-slate-800"
                                    >
                                        <div className="p-6 text-slate-400 leading-relaxed">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
