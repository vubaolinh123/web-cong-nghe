"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Users, CheckCircle } from "lucide-react";
import { CaseStudy } from "./types";

interface FeaturedProjectsFanpageProps {
    setSelectedImage: (image: CaseStudy | null) => void;
}

export default function FeaturedProjectsFanpage({ setSelectedImage }: FeaturedProjectsFanpageProps) {
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
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>

            {/* Phone Mockup - Single Fanpage */}
            <div className="flex justify-center">
                <div className="flex flex-col items-center">
                    {/* Phone Frame */}
                    <div
                        className="relative group/phone cursor-pointer"
                        onClick={() => setSelectedImage({ id: 200, image: "/image/casestudies/fanpage_1.jpg", alt: "Ú OÀ - Mẹ Bầu Và Em Bé", type: "portrait" })}
                    >
                        {/* Phone Outer Frame with Gradient Border */}
                        <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 shadow-2xl shadow-purple-500/30">
                            <div className="relative bg-slate-900 rounded-[2.3rem] overflow-hidden">
                                {/* Screen Content */}
                                <div className="relative aspect-[9/19] w-[240px] sm:w-[280px] lg:w-[300px] overflow-hidden">
                                    <Image
                                        src="/image/casestudies/fanpage_1.jpg"
                                        alt="Ú OÀ - Mẹ Bầu Và Em Bé"
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
                                        sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 300px"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                    {/* Eye Icon Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-60 lg:opacity-0 lg:group-hover/phone:opacity-100 transition-opacity duration-300">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl backdrop-blur-sm">
                                            <Eye className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Follower Badge */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                                        <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-white" />
                                                <span className="text-white font-bold text-sm">511K</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/phone:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>

                    {/* Fanpage Info Below Phone */}
                    <div className="mt-6 text-center max-w-[300px]">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                            Ú OÀ - Mẹ Bầu Và Em Bé
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                        </h4>
                        <p className="text-slate-400 text-sm">
                            Cửa hàng quần áo sơ sinh & trẻ em
                        </p>
                        <div className="mt-2 flex items-center justify-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium">
                                Trang
                            </span>
                            <span className="text-slate-500 text-xs">•</span>
                            <span className="text-pink-400 text-xs font-medium">
                                511K người theo dõi
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Separator */}
            <div className="relative mb-6 mt-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                    <div className="px-4 py-2 bg-slate-950 rounded-full border border-slate-800/50">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-semibold">
                            Các Dự Án Khác
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
