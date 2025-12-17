"use client";

import { motion } from "framer-motion";
import { Check, Info, Phone } from "lucide-react";

export default function FanpagePricing() {
    const plans = [
        {
            price: "5. TRIỆU",
            sales: "Đã bán 375",
            color: "border-green-500",
            btnColor: "bg-green-500 hover:bg-green-600",
            features: [
                "THÀNH VIÊN FOLLOW : > 20.000",
                "BÀN GIAO : 9 - 15 ngày",
                "ĐẶC ĐIỂM : VIỆT - THẬT & REAL",
                "HỖ TRỢ : FANPAGE SEO TOP >3 ĐỀ XUẤT FACEBOOK",
                "HỖ TRỢ : ĐỔI TÊN FANPAGE",
                "HỖ TRỢ : CHUYÊN GIA 1:1 SUPORT 24/7",
                "HỖ TRỢ : CHỌN TỪ KHÓA KÉO THÊM TỆP KHÁCH TIỀM NĂNG DÍNH TỪ KHÓA 5 TỪ KHÓA + 5 PAGE ĐỐI THỦ",
                "HỖ TRỢ : LIKE & COMMENT THEO KỊCH BẢN CHO 3 BÀI VIẾT ĐẦU TIÊN ( hỗ trợ viết content seo 3 bài )"
            ]
        },
        {
            price: "8. TRIỆU",
            sales: "Đã bán 165",
            popular: true,
            color: "border-green-600 ring-2 ring-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]",
            bg: "bg-slate-800",
            btnColor: "bg-green-600 hover:bg-green-700",
            features: [
                "THÀNH VIÊN FOLLOW : > 40.000",
                "BÀN GIAO : 15 - 30 ngày",
                "ĐẶC ĐIỂM : VIỆT - THẬT & REAL",
                "HỖ TRỢ : FANPAGE SEO TOP >3 ĐỀ XUẤT FACEBOOK",
                "HỖ TRỢ : ĐỔI TÊN FANPAGE + SETUP CHUẨN SEO",
                "HỖ TRỢ : CHUYÊN GIA 1:1 SUPORT 24/7",
                "HỖ TRỢ : CHỌN KÉO THÊM TỆP KHÁCH TIỀM NĂNG DÍNH TỪ KHÓA 5 TỪ KHÓA",
                "HỖ TRỢ : LIKE 200-300 LIKE/ 5 BÀI VIẾT",
                "HỖ TRỢ : LIKE & COMMENT THEO KỊCH BẢN CHO 5 BÀI VIẾT ĐẦU TIÊN",
                "HỖ TRỢ : CHĂM SÓC + 1 tháng chăm nội dung page content hình ảnh tương tự ngành",
                "TẶNG : seeding 1 tháng like comment kịch bản tăng trafic tăng seo"
            ]
        },
        {
            price: "20. TRIỆU",
            sales: "Đã bán 95",
            color: "border-green-500",
            btnColor: "bg-green-500 hover:bg-green-600",
            features: [
                "THÀNH VIÊN FOLLOW : > 80.000",
                "BÀN GIAO : 30 - 40 ngày",
                "ĐẶC ĐIỂM : VIỆT - THẬT & REAL",
                "HỖ TRỢ : FANPAGE SEO TOP >1-3 ĐỀ XUẤT FACEBOOK",
                "HỖ TRỢ : ĐỔI TÊN FANPAGE + SETUP CHUẨN SEO",
                "HỖ TRỢ : CHUYÊN GIA 1:1 SUPORT 24/7",
                "HỖ TRỢ : CHỌN KÉO THÊM TỆP KHÁCH TIỀM NĂNG DÍNH TỪ KHÓA 5 TỪ KHÓA + 5 PAGE ĐỐI THỦ",
                "HỖ TRỢ : LIKE 350-700 LIKE/ 10 BÀI VIẾT",
                "HỖ TRỢ : LIKE & COMMENT THEO KỊCH BẢN CHO 10 BÀI VIẾT ĐẦU TIÊN",
                "HỖ TRỢ : CHĂM SÓC + 1 tháng chăm nội dung page + thiết kế brand banner",
                "TẶNG : seeding 1 tháng like comment kịch bản tăng trafic tăng seo"
            ]
        },
        {
            price: "50. TRIỆU",
            sales: "",
            color: "border-green-500",
            btnColor: "bg-green-500 hover:bg-green-600",
            features: [
                "THÀNH VIÊN FOLLOW : > 100.000",
                "BÀN GIAO : 60 ngày",
                "ĐẶC ĐIỂM : VIỆT - THẬT & REAL",
                "HỖ TRỢ : FANPAGE SEO TOP >1 ĐỀ XUẤT FACEBOOK",
                "HỖ TRỢ : ĐỔI TÊN FANPAGE + SETUP CHUẨN SEO",
                "HỖ TRỢ : CHUYÊN GIA 1:1 SUPORT 24/7",
                "HỖ TRỢ : LÊN TÍCH XANH",
                "HỖ TRỢ : LIKE -1000 LIKE/ 20 BÀI VIẾT",
                "HỖ TRỢ : SHARE LINK BÀI VIRAL TRÊN PAGE ĐỀ XUẤT",
                "HỖ TRỢ : LIKE & COMMENT KỊCH BẢN CHO 20 BÀI VIRAL (CHUẨN SEO NGÀNH)",
                "HỖ TRỢ : CHĂM SÓC + 2 tháng chăm nội dung (60 bài + video)",
                "TẶNG : seeding 2 tháng like comment kịch bản",
                "HỖ TRỢ QUẢNG CÁO CHỈ 5% : CHẠY ADS KÉO TRAFFIC VIỆT NAM"
            ]
        }
    ];

    return (
        <section id="price" className="py-20 bg-slate-950 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/10 via-slate-950 to-slate-950" />
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                        Bảng Giá Setup <span className="text-green-500">Fanpage</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Tùy vào nhu cầu sử dụng cũng như ngân sách dự chi khách hàng có thể chọn mua group với những gói giá tương ứng sau đây:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col relative border border-slate-800 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-300 ${plan.popular ? 'transform md:-translate-y-4 z-10 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.15)]' : ''}`}
                        >
                            {/* Header */}
                            <div className="p-6 text-center border-b border-slate-800 bg-slate-900/80">
                                <h3 className="text-3xl font-bold text-green-400 mb-2">{plan.price}</h3>
                                {plan.sales && <span className="text-xs font-bold text-slate-300 bg-slate-800 px-3 py-1 rounded-full inline-block border border-slate-700">{plan.sales}</span>}
                            </div>

                            {/* Features */}
                            <div className="p-6 flex-grow">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => {
                                        const isBold = feature.includes("FOLLOW") || feature.includes("TÍCH XANH") || feature.includes("BÀN GIAO");
                                        return (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                                <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                                <span className={isBold ? "text-white font-bold" : ""}>{feature}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* Footer */}
                            <div className="p-6 bg-slate-900/80 mt-auto flex gap-3 border-t border-slate-800">
                                <a href="/lien-he" className="block w-full py-3 rounded bg-red-600 text-white font-bold hover:bg-red-500 transition-colors uppercase text-center">
                                    Đăng Ký
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
