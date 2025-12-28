"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from "next/image";
import { Eye, Users, Heart, CheckCircle } from "lucide-react";
import { CaseStudy } from "./types";
import { useIsMobile } from "@/hooks/useIsMobile";

// Import Swiper styles
import 'swiper/css';

interface FeaturedProjectsTiktokProps {
    setSelectedImage: (image: CaseStudy | null) => void;
}

// TikTok projects data
const tiktokProjects = [
    {
        imageUrl: "/image/casestudies/tiktok_4.jpg",
        alt: "Tina Nguyen",
        followerCount: "263,2K",
        likeCount: "1,2Tr",
        name: "Tina Nguyen",
        verified: true,
    },
    {
        imageUrl: "/image/casestudies/tiktok_slider/tiktok_6.jpg",
        alt: "Tama",
        followerCount: "1,1Tr",
        likeCount: "63,8Tr",
        name: "Tama",
        verified: false,
    },
    {
        imageUrl: "/image/casestudies/tiktok_slider/tiktok_11.jpg",
        alt: "Chiêu Tài Mẫn Mẫn",
        followerCount: "57,1K",
        likeCount: "1,2Tr",
        name: "Chiêu Tài Mẫn Mẫn",
        verified: false,
    },
];

export default function FeaturedProjectsTiktok({ setSelectedImage }: FeaturedProjectsTiktokProps) {
    const { isMobile } = useIsMobile();

    // Wrapper component - no animation on mobile for performance
    const Wrapper = isMobile ? 'div' : motion.div;
    const wrapperProps = isMobile ? { className: "mb-12" } : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "mb-12"
    };

    return (
        <Wrapper {...wrapperProps}>
            {/* Section Title */}
            <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Dự Án Nổi Bật
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
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
                        768: { slidesPerView: 2.5, spaceBetween: 28 },
                        1024: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    freeMode={true}
                    autoplay={{ delay: 1, disableOnInteraction: false }}
                    loop={true}
                    speed={3000}
                    className="continuous-swiper !pb-12"
                >
                    {tiktokProjects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <div
                                    className="relative group/phone cursor-pointer"
                                    onClick={() => setSelectedImage({ id: 301 + index, image: project.imageUrl, alt: project.alt, type: "portrait" })}
                                >
                                    <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 shadow-2xl shadow-orange-500/30">
                                        <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                            <div className="relative aspect-[9/19] w-[200px] sm:w-[220px] lg:w-[240px] overflow-hidden">
                                                <Image
                                                    src={project.imageUrl}
                                                    alt={project.alt}
                                                    fill
                                                    className={`object-cover object-top ${isMobile ? '' : 'transition-transform duration-500 group-hover/phone:scale-105'}`}
                                                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                                                />

                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />

                                                {/* Eye Icon - Center - hidden on mobile */}
                                                {!isMobile && (
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                            <Eye className="w-6 h-6 text-white" />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Verified Badge - Top Right */}
                                                {project.verified && (
                                                    <div className="absolute top-4 right-4 z-10">
                                                        <div className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
                                                            <CheckCircle className="w-4 h-4 text-white" />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Stats Overlay - Bottom */}
                                                <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <div className="px-2.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg flex items-center gap-1.5">
                                                            <Users className="w-3.5 h-3.5 text-white" />
                                                            <span className="text-white font-bold text-xs">{project.followerCount}</span>
                                                        </div>
                                                        <div className="px-2.5 py-1.5 rounded-full bg-pink-500/30 border border-pink-500/50 backdrop-blur-sm flex items-center gap-1.5">
                                                            <Heart className="w-3.5 h-3.5 text-pink-400" />
                                                            <span className="text-pink-300 text-xs font-medium">{project.likeCount}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Glow Effect - Desktop only */}
                                    {!isMobile && (
                                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                    )}
                                </div>

                                {/* Project Name Only - Below */}
                                <div className="mt-5 text-center">
                                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center gap-1.5">
                                        {project.name}
                                        {project.verified && <CheckCircle className="w-4 h-4 text-cyan-400" />}
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Separator */}
            <div className="relative mb-6 mt-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                    <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 text-sm font-semibold">
                            Các Dự Án Khác
                        </span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
