"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import { Container, Button } from "../common";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
    const { isMobile } = useIsMobile();

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-green-500/20 rounded-full blur-3xl animate-orb-pulse`} />
                <div className={`absolute bottom-1/4 right-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-emerald-500/10 rounded-full blur-3xl animate-orb-pulse-delayed`} />
                {!isMobile && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-600/5 via-emerald-600/5 to-cyan-600/5 rounded-full blur-3xl animate-slow-rotate" />
                )}

                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(34, 197, 94, 0.5)" />
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
                        <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            AI Marketing Solution
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Thu Hút Khách Hàng
                        <span className="block mt-2 bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                            Tiềm Năng Với AI
                        </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Giải pháp marketing tự động, xây dựng thương hiệu, có ngay tệp khách hàng tiềm năng với dịch vụ marketing đa kênh.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="#tu-van" scroll={true}>
                            <Button size="lg" className="min-w-[200px] h-12 text-base group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                                <Rocket className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                                Nhận Tư Vấn Miễn Phí
                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
