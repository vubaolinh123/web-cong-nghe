"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import Image from "next/image";
import { Eye } from "lucide-react";
import { CaseStudy, StatItem } from "./types";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

interface FeaturedProjectsMarketingProps {
    t: (key: string) => string;
    stats: StatItem[];
    setSelectedImage: (image: CaseStudy | null) => void;
}

export default function FeaturedProjectsMarketing({
    t,
    stats,
    setSelectedImage
}: FeaturedProjectsMarketingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            {/* Section Title */}
            <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {t('caseStudies.featuredTitle') || 'Dự Án Nổi Bật'}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
            </div>

            {/* Featured Projects Slider - LARGE */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-green-500/20 mb-12">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    speed={800}
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            translate: ["-100%", 0, -1],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    className="featured-projects-swiper"
                >
                    {/* Project 1 - VTV Partnership */}
                    <SwiperSlide>
                        <div className="relative bg-slate-900">
                            <div
                                className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden cursor-pointer group/image"
                                onClick={() => setSelectedImage({ id: 7, image: "/image/casestudies/marketing_7.jpg", alt: "VTV Partnership", type: "landscape" })}
                            >
                                <Image
                                    src="/image/casestudies/marketing_7.jpg"
                                    alt="VTV Partnership"
                                    fill
                                    className="object-contain bg-white transition-transform duration-500 group-hover/image:scale-105"
                                    sizes="100vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                        <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    </div>
                                </div>

                                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs font-bold shadow-lg">
                                        Media Partner
                                    </span>
                                </div>
                            </div>

                            <div className="relative p-4 sm:p-6 lg:p-8 bg-slate-900">
                                <div className="max-w-5xl mx-auto text-center">
                                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                                        VTV Partnership
                                    </h4>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                        Hợp tác truyền thông chiến lược cùng Đài Truyền Hình Việt Nam - VTV
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Project 2 - Palado */}
                    <SwiperSlide>
                        <div className="relative bg-slate-900">
                            <div
                                className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden cursor-pointer group/image"
                                onClick={() => setSelectedImage({ id: 8, image: "/image/casestudies/marketing_8.jpg", alt: "Palado Vietnam", type: "landscape" })}
                            >
                                <Image
                                    src="/image/casestudies/marketing_8.jpg"
                                    alt="Palado Vietnam"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                                    sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                        <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    </div>
                                </div>

                                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold shadow-lg">
                                        Brand Development
                                    </span>
                                </div>
                            </div>

                            <div className="relative p-4 sm:p-6 lg:p-8 bg-slate-900">
                                <div className="max-w-5xl mx-auto text-center">
                                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                                        Palado Vietnam
                                    </h4>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                        Phát triển thương hiệu thiết bị vệ sinh cao cấp Palado Việt Nam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Project 3 - HPMED Vietnam */}
                    <SwiperSlide>
                        <div className="relative bg-slate-900">
                            <div
                                className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden cursor-pointer group/image"
                                onClick={() => setSelectedImage({ id: 9, image: "/image/casestudies/marketing_11.webp", alt: "HPMED Vietnam", type: "landscape" })}
                            >
                                <Image
                                    src="/image/casestudies/marketing_11.webp"
                                    alt="HPMED Vietnam"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                                    sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                        <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    </div>
                                </div>

                                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-xs font-bold shadow-lg">
                                        Full Marketing
                                    </span>
                                </div>
                            </div>

                            <div className="relative p-4 sm:p-6 lg:p-8 bg-slate-900">
                                <div className="max-w-5xl mx-auto text-center">
                                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                                        HPMED Vietnam
                                    </h4>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                        Marketing toàn diện cho Công ty Thiết Bị Thẩm Mỹ HPMED Việt Nam - Tiên phong công nghệ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Project 4 - Real EMS */}
                    <SwiperSlide>
                        <div className="relative bg-slate-900">
                            <div
                                className="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden cursor-pointer group/image"
                                onClick={() => setSelectedImage({ id: 10, image: "/image/casestudies/marketing_10.jpg", alt: "Real EMS", type: "landscape" })}
                            >
                                <Image
                                    src="/image/casestudies/marketing_10.jpg"
                                    alt="Real EMS"
                                    fill
                                    className="object-contain bg-white transition-transform duration-500 group-hover/image:scale-105"
                                    sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-lime-500 to-green-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                        <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    </div>
                                </div>

                                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-lime-500 to-green-500 text-white text-xs font-bold shadow-lg">
                                        Product Launch
                                    </span>
                                </div>
                            </div>

                            <div className="relative p-4 sm:p-6 lg:p-8 bg-slate-900">
                                <div className="max-w-5xl mx-auto text-center">
                                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                                        Real EMS
                                    </h4>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                        Chiến dịch ra mắt sản phẩm tạo hình cơ thể Real EMS - Đốt mỡ, săn cơ ngay tại nhà
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Stats Section - Below Featured Projects */}
            {stats.length > 0 && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative group"
                        >
                            <div className="relative p-4 sm:p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />
                                <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.color} opacity-20 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                                </div>
                                <div className={`text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Separator - Compact with enhanced styling */}
            <div className="relative mb-6 mt-2">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                    <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 text-sm font-semibold">
                            {t('caseStudies.otherProjectsTitle') || 'Các Câu Chuyện Thành Công Khác'}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
