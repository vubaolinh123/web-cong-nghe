"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from "next/image";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

// Import Swiper styles
import 'swiper/css';

interface ProductShowcaseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Case studies images data
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

export default function ProductShowcaseModal({ isOpen, onClose }: ProductShowcaseModalProps) {
    const { isMobile } = useIsMobile();

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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed inset-0 z-[60] flex items-center justify-center ${isMobile ? 'bg-black/95' : 'bg-black/90 backdrop-blur-md'
                        }`}
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.1 }}
                        onClick={onClose}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
                        aria-label="Đóng"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                    </motion.button>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
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

                    {/* Slider Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: 0.2 }}
                        className="w-full px-0"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            spaceBetween={isMobile ? 12 : 20}
                            slidesPerView="auto"
                            centeredSlides={false}
                            freeMode={true}
                            autoplay={{
                                delay: 1,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={isMobile ? 5000 : 4000}
                            className="product-showcase-swiper"
                        >
                            {showcaseImages.map((image, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{ width: 'auto' }}
                                >
                                    <div className="relative group cursor-pointer">
                                        {/* Image Container */}
                                        <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl border-2 border-white/10 ${isMobile ? '' : 'hover:border-purple-500/50 transition-colors duration-300'
                                            }`}>
                                            <div className={`relative ${isMobile
                                                    ? 'w-[140px] aspect-[9/16]'
                                                    : 'w-[180px] sm:w-[200px] lg:w-[220px] aspect-[9/16]'
                                                }`}>
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className={`object-cover object-top ${isMobile ? '' : 'group-hover:scale-105 transition-transform duration-500'
                                                        }`}
                                                    sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 220px"
                                                    loading="lazy"
                                                />

                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                            </div>
                                        </div>

                                        {/* Glow Effect - Desktop only */}
                                        {!isMobile && (
                                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>

                    {/* Bottom Hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/40"
                    >
                        Nhấn vào bất kỳ đâu để đóng
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
