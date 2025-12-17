"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function TiktokPricing() {
    const plans = [
        {
            price: "5.000.000 Đ",
            sales: "Đã bán 165",
            features: [
                { text: "THÀNH VIÊN : > 7.000 follower", active: true },
                { text: "BÀN GIAO : 15 ngày", active: true },
                { text: "ĐẶC ĐIỂM : việt thật + real + tệp nuôi id seo", active: true },
                { text: "ĐẶC ĐIỂM : hỗ trợ bật live và bật tiktok shop", active: true },
                { text: "HỖ TRỢ : seeding 10 comment kịch bản / 10 video", active: false },
                { text: "HỖ TRỢ : seeding 5 phiên live bán hàng 100 mắt xem thật thu hút khách hàng", active: false },
                { text: "HỖ TRỢ : 8 bộ nội dung video theo chủ đề editor", active: true },
                { text: "HỖ TRỢ : kol koc chuyên nghành quay editor video review sản phẩm và nhãn hàng thương hiệu", active: false },
                { text: "BẢO HÀNH : 1 năm", active: true },
                { text: "HỖ TRỢ : đổi tên tiktok", active: true },
                { text: "SUPORT : 24/7", active: true },
                { text: "HỖ TRỢ : xây tiktok đủ lượng follower thành viên từ từ hiệu quả đúng quy trình và chuẩn quy chuẩn seo", active: true },
            ]
        },
        {
            price: "10.000.000 Đ",
            sales: "Đã bán 135",
            features: [
                { text: "THÀNH VIÊN : > 20.000 follower", active: true },
                { text: "BÀN GIAO : 25 ngày", active: true },
                { text: "ĐẶC ĐIỂM : việt thật + real + tệp nuôi id seo", active: true },
                { text: "ĐẶC ĐIỂM : hỗ trợ bật live và bật tiktok shop", active: true },
                { text: "HỖ TRỢ : seeding 10 comment kịch bản / 10 video", active: true },
                { text: "HỖ TRỢ : seeding 5 phiên live bán hàng 100 mắt xem thật thu hút khách hàng", active: true },
                { text: "HỖ TRỢ : 8 bộ nội dung video theo chủ đề editor", active: true },
                { text: "HỖ TRỢ : kol koc chuyên nghành quay editor video review sản phẩm và nhãn hàng thương hiệu", active: false },
                { text: "BẢO HÀNH : vĩnh viễn", active: true },
                { text: "HỖ TRỢ : đổi tên tiktok", active: true },
                { text: "SUPORT : 24/7", active: true },
                { text: "HỖ TRỢ : xây tiktok đủ lượng follower thành viên từ từ hiệu quả đúng quy trình và chuẩn quy chuẩn seo", active: true },
            ]
        },
        {
            price: "40.000.000 Đ",
            sales: "Đã bán 65",
            features: [
                { text: "THÀNH VIÊN : > 60.000 follower", active: true },
                { text: "BÀN GIAO : 40 ngày", active: true },
                { text: "ĐẶC ĐIỂM : việt thật + real + tệp nuôi id seo", active: true },
                { text: "ĐẶC ĐIỂM : hỗ trợ bật live và xây dựng tiktok shop", active: true },
                { text: "HỖ TRỢ : seeding 10 comment kịch bản / 10 video", active: true },
                { text: "HỖ TRỢ : seeding 10 phiên live bán hàng 100 mắt xem thật thu hút khách hàng", active: true },
                { text: "HỖ TRỢ : 8 bộ nội dung video theo chủ đề editor", active: true },
                { text: "HỖ TRỢ : kol koc chuyên nghành quay editor video review sản phẩm và nhãn hàng thương hiệu", active: false },
                { text: "BẢO HÀNH : vĩnh viễn", active: true },
                { text: "HỖ TRỢ : đổi tên tiktok", active: true },
                { text: "SUPORT : 24/7", active: true },
                { text: "HỖ TRỢ : xây tiktok đủ lượng follower thành viên từ từ hiệu quả đúng quy trình và chuẩn quy chuẩn seo", active: true },
            ]
        },
        {
            price: "70.000.000 Đ",
            sales: "Đã bán 85",
            features: [
                { text: "THÀNH VIÊN : > 90.000 follower", active: true },
                { text: "BÀN GIAO : 60 ngày", active: true },
                { text: "ĐẶC ĐIỂM : việt thật + real + tệp nuôi id seo", active: true },
                { text: "ĐẶC ĐIỂM : hỗ trợ bật live và xây dựng tiktok shop", active: true },
                { text: "HỖ TRỢ : seeding 100 comment kịch bản / 30 video", active: true },
                { text: "HỖ TRỢ : seeding 10 phiên live bán hàng 900-1600 mắt xem thật thu hút khách hàng", active: true },
                { text: "HỖ TRỢ : 18 bộ nội dung video theo chủ đề editor", active: true },
                { text: "HỖ TRỢ : kol koc chuyên nghành quay editor video review sản phẩm và nhãn hàng thương hiệu và CTy", active: true },
                { text: "BẢO HÀNH : vĩnh viễn", active: true },
                { text: "HỖ TRỢ : thay tên tiktok + từ khóa mô tả trang", active: true },
                { text: "SUPORT : 24/7", active: true },
                { text: "HỖ TRỢ : xây tiktok đủ lượng follower thành viên từ từ hiệu quả đúng quy trình và chuẩn quy chuẩn seo", active: true },
            ]
        }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Bảng Giá Mua - Setup <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">TikTok & Shop</span>
                    </h2>
                    <p className="text-slate-400">
                        (Bảng giá chưa bao gồm thuế VAT 8%)
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
                            className="rounded-3xl overflow-hidden flex flex-col border border-slate-800 bg-slate-900/50 hover:border-pink-500/50 transition-all duration-300 relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/10 to-transparent pointer-events-none" />

                            <div className="p-8 text-center border-b border-slate-800 relative z-10">
                                <h3 className="text-3xl font-black text-white mb-2">{plan.price}</h3>
                                <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 font-bold">
                                    {plan.sales}
                                </div>
                            </div>

                            <div className="p-6 flex-grow relative z-10">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className={`flex items-start gap-2 text-xs md:text-sm ${feature.active ? 'text-slate-300' : 'text-slate-600 line-through opacity-60'}`}>
                                            <div className="shrink-0 mt-0.5">
                                                {feature.active ? <Check size={14} className="text-green-500" /> : <X size={14} className="text-slate-600" />}
                                            </div>
                                            <span className={feature.text.includes("THÀNH VIÊN") ? "font-bold text-white" : ""}>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 mt-auto relative z-10">
                                <a
                                    href="/lien-he"
                                    className="block w-full py-3 rounded-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white font-bold text-center uppercase tracking-wide shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1"
                                >
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
