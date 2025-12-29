"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from "next/image";
import { Eye } from "lucide-react";
import { CategoryKey, Category, CaseStudy } from "./types";
import { useIsMobile } from "@/hooks/useIsMobile";

// Import Swiper styles
import 'swiper/css';

interface CaseStudiesSliderProps {
    activeCategory: CategoryKey;
    activeCategoryData: Category;
    setSelectedImage: (image: CaseStudy | null) => void;
}

export default function CaseStudiesSlider({
    activeCategory,
    activeCategoryData,
    setSelectedImage
}: CaseStudiesSliderProps) {
    const { isMobile } = useIsMobile();

    // Wrapper components - no animation on mobile for performance
    const AnimationWrapper = isMobile ? ({ children }: { children: React.ReactNode }) => <>{children}</> : AnimatePresence;
    const ContentWrapper = isMobile ? 'div' : motion.div;
    const contentWrapperProps = isMobile ? { className: "mb-8" } : {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.4 },
        className: "mb-8"
    };

    return (
        <AnimationWrapper mode="wait">
            <ContentWrapper key={isMobile ? undefined : activeCategory} {...contentWrapperProps}>
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-green-500/10">
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
                        {activeCategoryData.caseStudies.map((study) => (
                            <SwiperSlide key={study.id}>
                                <div className="flex flex-col items-center">
                                    {/* Phone Frame */}
                                    <div
                                        className="relative group/phone cursor-pointer"
                                        onClick={() => setSelectedImage(study)}
                                    >
                                        {/* Phone Outer Frame with Gradient Border */}
                                        <div className={`relative p-[3px] rounded-[2.5rem] bg-gradient-to-br ${activeCategoryData.color} ${isMobile ? 'shadow-lg' : 'shadow-lg lg:shadow-2xl'}`}>
                                            <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                                {/* Screen Content */}
                                                <div className="relative aspect-[9/19] w-[200px] sm:w-[220px] lg:w-[240px] overflow-hidden">
                                                    <Image
                                                        src={study.image}
                                                        alt={study.alt}
                                                        fill
                                                        className={`object-cover object-top ${isMobile ? '' : 'lg:transition-transform lg:duration-500 lg:group-hover/phone:scale-105'}`}
                                                        sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                                                    />

                                                    {/* Gradient Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                                    {/* Eye Icon Overlay - Desktop only */}
                                                    {!isMobile && (
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                                            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${activeCategoryData.color} flex items-center justify-center shadow-xl backdrop-blur-sm`}>
                                                                <Eye className="w-7 h-7 text-white" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Glow Effect - Desktop only */}
                                        {!isMobile && (
                                            <div className={`hidden lg:block absolute -inset-4 bg-gradient-to-r ${activeCategoryData.color} rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-20 transition-opacity duration-500 -z-10`} />
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </ContentWrapper>
        </AnimationWrapper>
    );
}
