"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from "next/image";
import { X } from "lucide-react";

// Import Swiper styles
import 'swiper/css';

interface ProductShowcaseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// All Case Studies images
const showcaseImages = [
    { src: "/image/casestudies/fanpage_1.jpg", alt: "Fanpage Case Study 1" },
    { src: "/image/casestudies/fanpage_2.jpg", alt: "Fanpage Case Study 2" },
    { src: "/image/casestudies/fanpage_3.jpg", alt: "Fanpage Case Study 3" },
    { src: "/image/casestudies/fanpage_6.jpg", alt: "Fanpage Case Study 6" },
    { src: "/image/casestudies/fanpage_7.jpg", alt: "Fanpage Case Study 7" },
    { src: "/image/casestudies/group_1.jpg", alt: "Group Case Study 1" },
    { src: "/image/casestudies/group_2.jpg", alt: "Group Case Study 2" },
    { src: "/image/casestudies/group_6.jpg", alt: "Group Case Study 6" },
    { src: "/image/casestudies/group_7.jpg", alt: "Group Case Study 7" },
    { src: "/image/casestudies/group_11.jpg", alt: "Group Case Study 11" },
    { src: "/image/casestudies/tiktok_1.jpg", alt: "TikTok Case Study 1" },
    { src: "/image/casestudies/tiktok_2.jpg", alt: "TikTok Case Study 2" },
    { src: "/image/casestudies/tiktok_4.jpg", alt: "TikTok Case Study 4" },
    { src: "/image/casestudies/tiktok_5.jpg", alt: "TikTok Case Study 5" },
    { src: "/image/casestudies/tiktok_slider/tiktok_13.jpg", alt: "TikTok Case Study 13" },
];

// Split images into 2 rows
const row1ImagesBase = showcaseImages.slice(0, 8);
const row2ImagesBase = showcaseImages.slice(8);

// Triple the arrays to ensure enough slides for smooth infinite loop
// (slidesPerView max is 7, so we need at least 3x = 21+ slides for seamless loop)
const row1Images = [...row1ImagesBase, ...row1ImagesBase, ...row1ImagesBase];
const row2Images = [...row2ImagesBase, ...row2ImagesBase, ...row2ImagesBase, ...row2ImagesBase];

// Reusable slide component
const SlideCard = ({ image, index, isMainRow = false }: {
    image: { src: string; alt: string };
    index: number;
    isMainRow?: boolean;
}) => (
    <div className={`flex flex-col items-center showcase-slide ${isMainRow ? 'main-row-slide' : ''}`}>
        <div className="relative p-[3px] rounded-[2rem] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 shadow-lg slide-content">
            <div className="relative bg-slate-900 rounded-[1.8rem] overflow-hidden">
                <div className="relative w-[120px] sm:w-[140px] lg:w-[160px] aspect-[9/16]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
                        priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
            </div>
        </div>
    </div>
);

export default function ProductShowcaseModal({ isOpen, onClose }: ProductShowcaseModalProps) {
    const backdropPointerRef = useRef({ x: 0, y: 0, active: false });

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const baseAutoplayConfig = {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: false,
    };

    const resumeAutoplay = (swiper: SwiperType) => {
        if (!swiper || swiper.destroyed || !swiper.autoplay) return;
        swiper.autoplay.start();
    };

    const handleTouchStart = (swiper: SwiperType) => {
        if (!swiper || swiper.destroyed || !swiper.autoplay) return;
        swiper.autoplay.stop();
    };

    const handleTouchEnd = (swiper: SwiperType) => {
        requestAnimationFrame(() => resumeAutoplay(swiper));
    };

    const handleBackdropPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget) return;
        backdropPointerRef.current = {
            x: e.clientX,
            y: e.clientY,
            active: true,
        };
    };

    const handleBackdropPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget || !backdropPointerRef.current.active) return;

        const dx = Math.abs(e.clientX - backdropPointerRef.current.x);
        const dy = Math.abs(e.clientY - backdropPointerRef.current.y);
        const isTap = dx < 10 && dy < 10;

        backdropPointerRef.current.active = false;

        if (isTap) {
            onClose();
        }
    };

    // Shared Swiper config for continuous autoplay + drag support
    const swiperBaseConfig = {
        modules: [Autoplay, FreeMode],
        spaceBetween: 10,
        slidesPerView: 2.15,
        loopAdditionalSlides: 12,
        freeMode: {
            enabled: true,
            sticky: false,
            momentum: true,
            momentumBounce: false,
            momentumRatio: 0.25,
            momentumVelocityRatio: 0.5,
        },
        loop: true,
        speed: 7000,
        watchSlidesProgress: true,
        allowTouchMove: true,
        simulateTouch: true,
        followFinger: true,
        threshold: 5,
        resistanceRatio: 0.85,
        touchStartPreventDefault: false,
        touchMoveStopPropagation: true,
        preventClicks: true,
        preventClicksPropagation: true,
        grabCursor: true,
        breakpoints: {
            0: { slidesPerView: 2.15, spaceBetween: 10 },
            375: { slidesPerView: 2.35, spaceBetween: 12 },
            430: { slidesPerView: 2.55, spaceBetween: 12 },
            640: { slidesPerView: 3.2, spaceBetween: 14 },
            768: { slidesPerView: 4.1, spaceBetween: 16 },
            1024: { slidesPerView: 5.2, spaceBetween: 20 },
            1280: { slidesPerView: 6.2, spaceBetween: 24 },
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-sm pt-[max(12px,env(safe-area-inset-top))] pb-[max(12px,env(safe-area-inset-bottom))] overscroll-contain"
                    onPointerDown={handleBackdropPointerDown}
                    onPointerUp={handleBackdropPointerUp}
                >
                    {/* Close Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        onClick={onClose}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        aria-label="Đóng"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.button>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10"
                    >
                        <h2 className="text-lg sm:text-xl font-bold text-white">
                            Các Dự Án Nổi Bật
                        </h2>
                        <p className="text-xs sm:text-sm text-white/60 mt-1">
                            Case Studies từ khách hàng của chúng tôi
                        </p>
                    </motion.div>

                    {/* Dual Row Sliders Container */}
                    <div
                        className="w-full flex flex-col gap-3 sm:gap-5 px-2 sm:px-4"
                        onClick={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        {/* Row 1: Left to Right with Center Zoom */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full"
                        >
                            <Swiper
                                {...swiperBaseConfig}
                                centeredSlides={true}
                                autoplay={baseAutoplayConfig}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                                onSliderFirstMove={handleTouchStart}
                                onTap={handleTouchEnd}
                                onTransitionEnd={handleTouchEnd}
                                className="!py-4 sm:!py-5 center-zoom-swiper showcase-row-swiper"
                            >
                                {row1Images.map((image, index) => (
                                    <SwiperSlide key={`row1-${index}`}>
                                        <SlideCard image={image} index={index} isMainRow={true} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>

                        {/* Row 2: Right to Left */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="w-full"
                        >
                            <Swiper
                                {...swiperBaseConfig}
                                centeredSlides={false}
                                autoplay={{
                                    ...baseAutoplayConfig,
                                    reverseDirection: true, // Reverse direction for row 2
                                }}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                                onSliderFirstMove={handleTouchStart}
                                onTap={handleTouchEnd}
                                onTransitionEnd={handleTouchEnd}
                                className="!py-3 sm:!py-4 showcase-row-swiper"
                            >
                                {row2Images.map((image, index) => (
                                    <SwiperSlide key={`row2-${index}`}>
                                        <SlideCard image={image} index={index} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </div>

                    {/* Bottom Hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/40"
                    >
                        Chạm nền tối để đóng
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
