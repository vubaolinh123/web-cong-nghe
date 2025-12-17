"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function GroupPricing() {
    const plans = [
        {
            price: "5.000.000 Đ",
            sales: "Đã bán 479",
            features: [
                "THÀNH VIÊN : > 20.000",
                "BÀN GIAO : 9 - 15 ngày",
                "ĐẶC ĐIỂM : VIỆT - THẬT & REAL",
                "BẢO HÀNH : vĩnh viễn",
                "HỖ TRỢ : ĐỔI TÊN GROUP",
                "SUPORT : CHUYÊN GIA 1:1 SUPORT 24/7",
                "HỖ TRỢ : CHỌN GROUP KÉO THÊM TỆP KHÁCH TIỀM NĂNG DÍNH TỪ KHÓA + TỆP NHÓM ĐỐI THỦ",
                "HỖ TRỢ : SEO TOP 7 THEO ĐỀ XUẤT FACEBOOK",
                "HỖ TRỢ : 500 LIKE 1 BÀI VIẾT GHIM NHÓM"
            ]
        },
        {
            price: "8.000.000 Đ",
            sales: "Phổ biến",
            highlight: true,
            features: [
                "THÀNH VIÊN : > 40.000",
                "BÀN GIAO : 20 - 30 ngày",
                "ĐẶC ĐIỂM : VIỆT - THẬT & REAL",
                "BẢO HÀNH : vĩnh viễn",
                "HỖ TRỢ : ĐỔI TÊN GROUP",
                "SUPORT : CHUYÊN GIA 1:1 SUPORT 24/7",
                "HỖ TRỢ : CHỌN GROUP KÉO THÊM TỆP KHÁCH TIỀM NĂNG DÍNH TỪ KHÓA + TỆP NHÓM ĐỐI THỦ",
                "HỖ TRỢ : SEO TOP > 1-5 THEO ĐỀ XUẤT FACEBOOK",
                "HỖ TRỢ : THIẾT KẾ 1 BANNER + ẢNH BÌA VIP KÉO KHÁCH",
                "HỖ TRỢ : 100-200 LIKE 5 BÀI GHIM NHÓM",
                "HỖ TRỢ : 30 COMMENT THEO KỊCH BẢN 5 GHIM NHÓM",
                "HỖ TRỢ : ĐĂNG BÀI CHĂM SÓC PHÁT TRIỂN NỘI DUNG GROUP 1 THÁNG"
            ]
        },
        {
            price: "20.000.000 Đ",
            sales: "Đã bán 278",
            features: [
                "THÀNH VIÊN : > 80.000",
                "BÀN GIAO : > 50 ngày",
                "ĐẶC ĐIỂM : VIỆT - THẬT & REAL",
                "BẢO HÀNH : vĩnh viễn",
                "HỖ TRỢ : ĐỔI TÊN GROUP",
                "SUPORT : CHUYÊN GIA 1:1 SUPORT 24/7",
                "HỖ TRỢ : CHỌN GROUP KÉO THÊM TỆP KHÁCH TIỀM NĂNG DÍNH TỪ KHÓA + TỆP NHÓM ĐỐI THỦ",
                "HỖ TRỢ : SEO TOP 1-3 THEO ĐỀ XUẤT FACEBOOK",
                "HỖ TRỢ : THIẾT KẾ 1 BANNER + 1 ẢNH BÌA VIP KÉO KHÁCH",
                "HỖ TRỢ : 200-500 LIKE 10 BÀI GHIM NHÓM",
                "HỖ TRỢ : 50 COMMENT THEO KỊCH BẢN /10 BÀI GHIM",
                "HỖ TRỢ : 2 VIDEO BRAND CỦA GROUP",
                "HỖ TRỢ : ĐĂNG BÀI CHĂM SÓC PHÁT TRIỂN NỘI DUNG GROUP 2 THÁNG",
                "HỖ TRỢ : SEEDING 10 KỊCH BẢN LÔI CUỐN GIÚP THU HÚT KHÁCH HÀNG MỤC TIÊU LỚN ĐÍCH PHỄU LỚN NHẤT"
            ]
        },
        {
            price: "50.000.000 Đ",
            sales: "Đã bán 78",
            features: [
                "THÀNH VIÊN : > 120.000",
                "BÀN GIAO : > 60 ngày",
                "ĐẶC ĐIỂM : VIỆT - THẬT & REAL",
                "BẢO HÀNH : vĩnh viễn",
                "HỖ TRỢ : ĐỔI TÊN GROUP",
                "SUPORT : CHUYÊN GIA 1:1 SUPORT 24/7",
                "HỖ TRỢ : CHỌN GROUP KÉO THÊM TỆP KHÁCH TIỀM NĂNG DÍNH TỪ KHÓA + TỆP NHÓM ĐỐI THỦ",
                "HỖ TRỢ : SEO TOP 1 THEO ĐỀ XUẤT FACEBOOK",
                "HỖ TRỢ : THIẾT KẾ 1 BANNER + 1 ẢNH BÌA VIP KÉO KHÁCH",
                "HỖ TRỢ : 200-500 LIKE 30 BÀI GHIM NHÓM & SHARE",
                "HỖ TRỢ : 70 COMMENT KỊCH BẢN / BÀI GHIM",
                "HỖ TRỢ : CHẠY ADS QUẢNG CÁO THU HÚT GROUP",
                "HỖ TRỢ : THIẾT KẾ 5 VIDEO THEO BRAND CỦA GROUP",
                "HỖ TRỢ : ĐĂNG BÀI CHĂM SÓC PHÁT TRIỂN NỘI DUNG GROUP 3 THÁNG KỊCH BẢN CHUẨN XÔI ĐỘNG",
                "HỖ TRỢ : SEEDING 10 KỊCH BẢN LÔI CUỐN GIÚP THU HÚT KHÁCH HÀNG MỤC TIÊU LỚN ĐÍCH PHỄU LỚN NHẤT"
            ]
        }
    ];

    return (
        <section className="py-20 bg-slate-950">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                        Bảng Giá Mua - Setup <span className="bg-blue-700 px-2 py-1">Group Facebook</span>
                    </h2>
                    <p className="text-slate-400">
                        Tùy vào nhu cầu sử dụng cũng như ngân sách dự chi khách hàng có thể chọn mua group với những gói giá tương ứng số thành viên sau đây:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden flex flex-col border transition-all duration-300 relative ${plan.highlight ? 'bg-green-900/30 border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.2)] transform md:-translate-y-4 z-10' : 'bg-slate-900 border-slate-700 hover:border-green-500/50'}`}
                        >
                            {plan.highlight && (
                                <div className="bg-green-600 text-white text-xs font-bold text-center py-1 absolute top-0 left-0 right-0 z-20">KHUYÊN DÙNG</div>
                            )}

                            <div className={`p-6 text-center ${plan.highlight ? 'bg-green-800/50' : 'bg-slate-800/50'}`}>
                                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-green-400' : 'text-green-500'}`}>{plan.price}</h3>
                                <span className="text-xs text-slate-400">{plan.sales}</span>
                            </div>

                            <div className="p-6 flex-grow">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => {
                                        const isBold = feature.includes("SEO TOP") || feature.includes("THÀNH VIÊN");
                                        return (
                                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                                                <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                                                <span className={isBold ? "text-white font-bold" : ""}>{feature}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="p-4 mt-auto grid grid-cols-2 gap-3">
                                <button className="py-2.5 rounded bg-green-700 text-white font-bold hover:bg-green-600 text-sm">
                                    TẶNG EBOOK
                                </button>
                                <a href="/lien-he" className="py-2.5 rounded bg-blue-600 text-white font-bold hover:bg-blue-500 text-center flex items-center justify-center text-sm">
                                    {index % 2 !== 0 ? 'BUY' : 'CALL'}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
