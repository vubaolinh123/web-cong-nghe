"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import { Eye, Users, CheckCircle } from "lucide-react";
import { CaseStudy } from "./types";
import { useFanpageTranslations } from "@/lib/i18n/pages/fanpage";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface FeaturedProjectsFanpageProps {
    setSelectedImage: (image: CaseStudy | null) => void;
}

// Featured Projects images (same as fanpage page)
const featuredImages = [
    "/image/casestudies/fanpage_1.jpg",
    "/image/casestudies/fanpage_6.jpg",
    "/image/casestudies/fanpage_7.jpg"
];

export default function FeaturedProjectsFanpage({ setSelectedImage }: FeaturedProjectsFanpageProps) {
    const t = useFanpageTranslations();

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
                    {t.caseStudies.featuredTitle}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>

            {/* Featured Phone Mockups Slider */}
            <div className="relative">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    breakpoints={{
                        480: { slidesPerView: 1.5, spaceBetween: 24 },
                        640: { slidesPerView: 2, spaceBetween: 32, centeredSlides: false },
                        1024: { slidesPerView: 3, spaceBetween: 48, centeredSlides: false },
                    }}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    loop={true}
                    speed={600}
                    className="fanpage-featured-swiper !pb-12"
                >
                    {t.caseStudies.featuredProjects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <div
                                    className="relative group/phone cursor-pointer"
                                    onClick={() => setSelectedImage({ id: 200 + index, image: featuredImages[index], alt: project.name, type: "portrait" })}
                                >
                                    {/* Phone Frame */}
                                    <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 shadow-2xl shadow-purple-500/30">
                                        <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                            <div className="relative aspect-[9/19] w-[200px] sm:w-[220px] lg:w-[240px] overflow-hidden">
                                                <Image
                                                    src={featuredImages[index]}
                                                    alt={project.name}
                                                    fill
                                                    className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                                                />

                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />

                                                {/* Eye Icon - Center */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                                        <Eye className="w-7 h-7 text-white" />
                                                    </div>
                                                </div>

                                                {/* Verified Badge - Top Right */}
                                                <div className="absolute top-4 right-4 z-10">
                                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                                                        <CheckCircle className="w-5 h-5 text-white" />
                                                    </div>
                                                </div>

                                                {/* Stats Overlay - Bottom */}
                                                <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex items-center gap-2">
                                                            <Users className="w-4 h-4 text-white" />
                                                            <span className="text-white font-bold text-sm">{project.followers.split(' ')[0]}</span>
                                                        </div>
                                                        <div className="px-3 py-1.5 rounded-full bg-purple-500/30 border border-purple-500/50 backdrop-blur-sm">
                                                            <span className="text-purple-300 text-xs font-medium">{project.badge}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Glow Effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                                </div>

                                {/* Project Name Only - Below */}
                                <div className="mt-5 text-center">
                                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center gap-2">
                                        {project.name}
                                        <CheckCircle className="w-4 h-4 text-blue-400" />
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
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                    <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-semibold">
                            {t.caseStudies.separator}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
