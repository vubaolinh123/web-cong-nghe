"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, Users, Smartphone, Building2, Eye, ThumbsUp } from "lucide-react";
import { Button, Container } from "@/components/common";

const caseStudies = [
    {
        id: 1,
        title: "Palado Việt Nam",
        category: "Marketing",
        description: "Thương hiệu thiết bị vệ sinh cao cấp với hệ thống showroom sang trọng tại Premium Plaza. Chúng tôi đồng hành xây dựng chiến lược Marketing tổng thể, khẳng định vị thế thương hiệu.",
        stats: [
            { label: "Hotline", value: "0915.73.22.55" },
            { label: "Showroom", value: "Palado Plaza" },
        ],
        image: "/case-studies/palado-real.png",
        color: "from-orange-500 to-amber-500",
        badge: "Premium Store",
    },
    {
        id: 2,
        title: "Ú Oà - Mẹ Bầu & Em Bé",
        category: "Fanpage",
        description: "Chuỗi cửa hàng Mẹ Bầu & Em Bé uy tín. Đồng hành cùng các mẹ trong hành trình nuôi dưỡng, chăm sóc con yêu với nội dung chia sẻ giá trị và cộng đồng sôi nổi.",
        stats: [
            { label: "Người theo dõi", value: "511K" },
            { label: "Đang theo dõi", value: "20" },
        ],
        image: "/case-studies/uoa-real.png",
        color: "from-pink-500 to-rose-500",
        badge: "511K Followers",
    },
    {
        id: 3,
        title: "HPMED Company",
        category: "Marketing",
        description: "Công ty thiết bị thẩm mỹ HPMED Việt Nam - Tiên Phong Công Nghệ, Dẫn Đầu Xu Hướng. Cung cấp các giải pháp thiết bị thẩm mỹ công nghệ cao hàng đầu.",
        stats: [
            { label: "Slogan", value: "Tiên Phong CN" },
            { label: "Hotline", value: "096.636.8299" },
        ],
        image: "/case-studies/hpmed-real.png",
        color: "from-yellow-400 to-orange-400",
        badge: "Top 1 Tech",
    },
    {
        id: 4,
        title: "Thiết Kế & Thi Công Nội Thất",
        category: "Group",
        description: "Cộng đồng Thừa Vũ Design - Kiến trúc & Nội thất. Nhóm công khai quy tụ những ý tưởng thiết kế độc đáo, là nơi kết nối uy tín giữa kiến trúc sư và chủ nhà.",
        stats: [
            { label: "Thành viên", value: "510.1K" },
            { label: "Bài viết", value: "Thảo luận sổi nổi" },
        ],
        image: "/case-studies/thua-vu-real.png",
        color: "from-blue-500 to-indigo-500",
        badge: "510K Members",
    },
    {
        id: 5,
        title: "Tama",
        category: "Tiktok",
        description: "Influencer Tama (@jjhahehi) với phong cách sáng tạo nội dung độc đáo. Kênh Tiktok triệu follow, video triệu view và lan tỏa năng lượng tích cực.",
        stats: [
            { label: "Follower", value: "1.1M" },
            { label: "Thích", value: "63.8M" },
        ],
        image: "/case-studies/tama-real.png",
        color: "from-cyan-400 to-blue-500",
        badge: "1.1M & 63.8M",
    },
];

export default function FeaturedCaseStudies() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const slideVariants = {
        hiddenRight: {
            x: "5%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-5%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeInOut" as const,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.98,
            transition: {
                duration: 0.4,
            },
        },
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    const currentCase = caseStudies[currentIndex];

    return (
        <section className="py-20 relative bg-slate-950 overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <Container>
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
                        Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stories</span>
                    </h2>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden md:flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-400 cursor-pointer transition-colors group">
                        See more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Floating Content Area */}
                <div className="relative min-h-[600px] md:min-h-[500px]">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={currentIndex}
                            variants={slideVariants}
                            initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                            animate="visible"
                            exit="exit"
                            className="md:absolute inset-0 w-full h-full"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 h-full items-center">

                                {/* Left Column: Text Content */}
                                <div className="order-2 md:order-1 flex flex-col justify-center relative z-10">
                                    {/* Category Badge */}
                                    <span className="inline-flex max-w-fit px-3 py-1 mb-6 rounded border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                                        {currentCase.category}
                                    </span>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                                    >
                                        {currentCase.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-slate-300 mb-8 text-base md:text-lg leading-relaxed max-w-lg"
                                    >
                                        {currentCase.description}
                                    </motion.p>

                                    {/* Stats (Inline) */}
                                    <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 text-sm">
                                        {currentCase.stats.map((stat, idx) => (
                                            <div key={idx} className="flex flex-col">
                                                <span className="text-slate-500 uppercase text-xs font-bold mb-1">{stat.label}</span>
                                                <span className="text-white font-semibold">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <Button
                                            href="#tu-van"
                                            className={`bg-orange-600 hover:bg-orange-500 text-white rounded-full px-8 border-none`}
                                        >
                                            Explore Now <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </motion.div>
                                </div>

                                {/* Right Column: Image */}
                                <div className="order-1 md:order-2 relative h-[300px] md:h-[450px] w-full">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group">
                                        {/* Glass Reflection Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

                                        <Image
                                            src={currentCase.image}
                                            alt={currentCase.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            priority
                                        />

                                        {/* Highlight Badge on Image - NEW REQUEST */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-lg">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentCase.color} animate-pulse`} />
                                                <span className="text-sm font-bold text-white">{currentCase.badge}</span>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Nav Buttons - Floating below image (Desktop) */}
                                    <div className="absolute -bottom-16 right-0 hidden md:flex gap-4">
                                        <button
                                            onClick={prevSlide}
                                            className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile Navigation (Visible only on mobile) */}
                <div className="flex md:hidden justify-center gap-4 mt-8">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-white flex items-center justify-center active:bg-slate-800"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-white flex items-center justify-center active:bg-slate-800"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

            </Container>
        </section>
    );
}
