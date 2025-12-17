"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const questions = [
        {
            q: "MUA GROUP LÀ GÌ NÓ AN TOÀN KHÔNG , HIỆU QUẢ KHÔNG ?",
            a: "Mua group là group tạo sẵn thậm trí book lượt tương tác vào group chuyển đổi tên cho khách hàng bàn giao lại cho người mua phương pháp này khá hiệu quả khi được chăm sóc group đều."
        },
        {
            q: "THỜI GIAN BÀN GIAO LÀ BAO LÂU ?",
            a: "Thời gian bàn giao sau 24h - 48h sau khi chúng tôi nhận được thanh toán tùy loại gói group của bạn lớn hay nhỏ để kịp bàn giao."
        },
        {
            q: "TỶ LỆ NGƯỜI DÙNG THẬT - VIỆT TRONG GROUP LÀ BAO NHIÊU ?",
            a: "Tỷ lệ này từ 95% trở lên chúng tôi có cam kết bảo hành cho các loại gói group từ 6 tháng - 1 năm - vĩnh viễn."
        },
        {
            q: "THÀNH VIÊN CÓ BỊ GIẢM SAU KHI MUA ?",
            a: "Điều này chắc chắn là không trường khi nhóm của bạn chăm sóc nội dung quá hỗn độn hoặc mang tính chất nguy hiểm cho người xem."
        },
        {
            q: "XÂY GROUP LÀ GÌ (SETUP) NÓ AN TOÀN KHÔNG , HIỆU QUẢ KHÔNG ?",
            a: "Xây setup group là xây từ tệp id và uid những tệp khách hàng từ những nhóm đối tượng fb và group fb tiềm năng nhất đem vào + sở thích share từ khóa liên quan + chủ đề liên quan mà tệp khách quan tâm. Phương thức này rất hiệu quả nếu được chăm sóc group thường xuyên."
        },
        {
            q: "TÔI CÓ BÁN ĐƯỢC HÀNG NGAY KHI CÓ GROUP ?",
            a: "Điều này chắc chắn là có bởi khi bạn có group bạn đã có thể đăng tải bán sản phẩm dịch vụ đồng thời khếch chương thương hiệu dịch vụ của bạn tới tệp khách hàng trong group cũng như ngoài group giúp tỷ lệ chuyển đổi sẽ tăng rất nhiều lần."
        }
    ];

    return (
        <section className="py-20 bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-2">CÂU HỎI THƯỜNG GẶP</h2>
                    <div className="text-white text-3xl font-bold bg-blue-600 inline-block px-3 py-1">GROUP FACEBOOK ?</div>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="border-b border-slate-800">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex items-center justify-between gap-4 text-left hover:text-green-400 transition-colors focus:outline-none"
                            >
                                <h3 className={`text-base md:text-lg font-bold ${openIndex === index ? 'text-green-500' : 'text-slate-300'}`}>
                                    {item.q}
                                </h3>
                                <div className={`p-1 rounded-full ${openIndex === index ? 'bg-green-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
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
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-slate-400 leading-relaxed pr-8">
                                            {item.a}
                                        </p>
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
