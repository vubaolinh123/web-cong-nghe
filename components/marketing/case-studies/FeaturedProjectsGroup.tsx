"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from "next/image";
import { Eye, Users } from "lucide-react";
import { CaseStudy } from "./types";

// Import Swiper styles
import 'swiper/css';

interface FeaturedProjectsGroupProps {
    setSelectedImage: (image: CaseStudy | null) => void;
}

// Phone mockup card component
const PhoneMockupCard = ({
    imageUrl,
    alt,
    memberCount,
    groupName,
    ownerName,
    gradientColors,
    shadowColor,
    badgeColor,
    onClick
}: {
    imageUrl: string;
    alt: string;
    memberCount: string;
    groupName: string;
    ownerName: string;
    gradientColors: string;
    shadowColor: string;
    badgeColor: string;
    onClick: () => void;
}) => (
    <div className="flex flex-col items-center">
        <div
            className="relative group/phone cursor-pointer"
            onClick={onClick}
        >
            <div className={`relative p-[3px] rounded-[2.5rem] bg-gradient-to-br ${gradientColors} shadow-lg lg:shadow-2xl ${shadowColor}`}>
                <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                    <div className="relative aspect-[9/19] w-[220px] sm:w-[260px] lg:w-[280px] overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={alt}
                            fill
                            className="object-cover object-top lg:transition-transform lg:duration-500 lg:group-hover/phone:scale-105"
                            sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${gradientColors} flex items-center justify-center shadow-xl backdrop-blur-sm`}>
                                <Eye className="w-7 h-7 text-white" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${gradientColors} shadow-lg`}>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-white" />
                                    <span className="text-white font-bold text-sm">{memberCount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`hidden lg:block absolute -inset-4 bg-gradient-to-r ${gradientColors} rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10`} />
        </div>
        <div className="mt-6 text-center max-w-[280px]">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                {groupName}
            </h4>
            <p className="text-slate-400 text-sm">
                Nhóm của <span className={badgeColor}>{ownerName}</span>
            </p>
            <div className="mt-2 flex items-center justify-center gap-2">
                <span className={`px-3 py-1 rounded-full ${badgeColor.includes('cyan') ? 'bg-blue-500/20 border-blue-500/30 text-blue-400' : 'bg-red-500/20 border-red-500/30 text-red-400'} border text-xs font-medium`}>
                    Nhóm Công khai
                </span>
            </div>
        </div>
    </div>
);

export default function FeaturedProjectsGroup({ setSelectedImage }: FeaturedProjectsGroupProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
        >
            {/* Section Title */}
            <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Dự Án Nổi Bật
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>

            {/* Phone Mockup Carousel */}
            <div className="relative">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    centeredSlides={false}
                    breakpoints={{
                        480: { slidesPerView: 1.5, spaceBetween: 20 },
                        640: { slidesPerView: 2, spaceBetween: 24 },
                        768: { slidesPerView: 2.5, spaceBetween: 32 },
                        1024: { slidesPerView: 3, spaceBetween: 48 },
                    }}
                    freeMode={true}
                    autoplay={{ delay: 1, disableOnInteraction: false }}
                    loop={true}
                    speed={3000}
                    className="continuous-swiper !pb-12"
                >
                    {/* Group 1: Thiết Kế & Thi Công Nội Thất */}
                    <SwiperSlide>
                        <PhoneMockupCard
                            imageUrl="/image/casestudies/group_1.jpg"
                            alt="Thiết Kế & Thi Công Nội Thất"
                            memberCount="510,1K"
                            groupName="Thiết Kế & Thi Công Nội Thất"
                            ownerName="Thừa Vũ Design"
                            gradientColors="from-blue-500 via-cyan-500 to-blue-600"
                            shadowColor="lg:shadow-blue-500/30"
                            badgeColor="text-cyan-400"
                            onClick={() => setSelectedImage({ id: 101, image: "/image/casestudies/group_1.jpg", alt: "Thiết Kế & Thi Công Nội Thất", type: "portrait" })}
                        />
                    </SwiperSlide>

                    {/* Group 2: Xuất Nhập Khẩu Logistics */}
                    <SwiperSlide>
                        <PhoneMockupCard
                            imageUrl="/image/casestudies/group_2.jpg"
                            alt="Xuất Nhập Khẩu Logistics"
                            memberCount="369,4K"
                            groupName="Xuất Nhập Khẩu Logistics"
                            ownerName="Phaata"
                            gradientColors="from-blue-500 via-cyan-500 to-blue-600"
                            shadowColor="lg:shadow-cyan-500/30"
                            badgeColor="text-cyan-400"
                            onClick={() => setSelectedImage({ id: 102, image: "/image/casestudies/group_2.jpg", alt: "Xuất Nhập Khẩu Logistics", type: "portrait" })}
                        />
                    </SwiperSlide>

                    {/* Group 3: Vận Chuyển Hàng Trung Quốc Về Việt Nam */}
                    <SwiperSlide>
                        <PhoneMockupCard
                            imageUrl="/image/casestudies/group_6.jpg"
                            alt="Vận Chuyển Hàng Trung Quốc Về Việt Nam"
                            memberCount="113,8K"
                            groupName="Vận Chuyển Hàng Trung Quốc Về VN"
                            ownerName="Vận Chuyển & Logistics"
                            gradientColors="from-red-500 via-orange-500 to-yellow-500"
                            shadowColor="lg:shadow-red-500/30"
                            badgeColor="text-orange-400"
                            onClick={() => setSelectedImage({ id: 106, image: "/image/casestudies/group_6.jpg", alt: "Vận Chuyển Hàng Trung Quốc Về Việt Nam", type: "portrait" })}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Separator */}
            <div className="relative mb-6 mt-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                    <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-sm font-semibold">
                            Các Dự Án Khác
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
