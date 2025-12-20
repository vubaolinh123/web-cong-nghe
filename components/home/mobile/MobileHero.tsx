"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Rocket } from "lucide-react";
import { Container, Button } from "../../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MobileHero() {
    const { dictionary } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 py-20">
            {/* Background Effects - Simplified for Mobile */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-xs font-medium">
                        <Sparkles size={14} className="text-yellow-400" />
                        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                            AI-First Company
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                        <span className="block">{dictionary.hero.title1}</span>
                        <span className="block mt-2">
                            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                {dictionary.hero.title2}
                            </span>
                            {" "} & {" "}
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                {dictionary.hero.title3}
                            </span>
                        </span>
                        <span className="block mt-2">{dictionary.hero.title4}</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                        {dictionary.hero.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col w-full gap-3 mt-4">
                        <Link href="/lien-he" className="w-full">
                            <Button size="lg" className="w-full group">
                                <Rocket className="mr-2" size={18} />
                                {dictionary.hero.ctaPrimary}
                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="w-full">
                            <Play className="mr-2" size={18} />
                            {dictionary.hero.ctaSecondary}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
