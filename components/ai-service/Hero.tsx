"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import { Container, Button } from "../common";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Spotlight } from "@/components/ui/spotlight";
// Removing SplineScene for now to focus on content and performance, or using a static image/simple effect if Spline is too heavy or specific to homepage.
// Or we can keep it if it adds value. The user wants "đẹp mắt".
// Let's use a simple abstract gradient orb or similar if SplineScene URL is specific to the robot.
// The user note says "AI robot" was hidden on mobile in previous tasks.
// I will keep the visual effects but maybe not the specific robot spline unless requested.
// For now, I'll use the spotlight and gradient orbs which look premium.

export default function Hero() {
    const { isDesktop, isMobile } = useIsMobile();

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-blue-500/20 rounded-full blur-3xl animate-orb-pulse`} />
                <div className={`absolute bottom-1/4 right-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-cyan-500/10 rounded-full blur-3xl animate-orb-pulse-delayed`} />
                {!isMobile && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-green-600/5 rounded-full blur-3xl animate-slow-rotate" />
                )}

                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(6, 182, 212, 0.5)" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 backdrop-blur-sm mb-6 sm:mb-8"
                    >
                        <Sparkles size={16} className="text-yellow-400" />
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Giải Pháp AI Toàn Diện
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Ứng dụng AI vào
                        <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                            Doanh Nghiệp Của Bạn
                        </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Tự động hóa quy trình, tăng hiệu suất làm việc, giảm thiểu chi phí vận hành với các giải pháp công nghệ tiên tiến.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {/* Scroll to contact/CTA section */}
                        <Link href="#tu-van" scroll={true}>
                            <Button size="lg" className="min-w-[200px] h-12 text-base group">
                                <Rocket className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                                Đặt lịch tư vấn ngay
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
