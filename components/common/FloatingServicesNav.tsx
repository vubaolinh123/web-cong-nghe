"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Users, BarChart3, Video, LayoutGrid, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Service navigation items
const serviceItems = [
    {
        nameVI: "Marketing Tổng Thể",
        nameEN: "Full Marketing",
        icon: Megaphone,
        href: "/dich-vu-marketing/marketing-tong-the",
        gradient: "from-green-500 to-emerald-500",
        hoverGradient: "hover:from-green-600 hover:to-emerald-600",
    },
    {
        nameVI: "Xây Group Facebook",
        nameEN: "Facebook Group",
        icon: Users,
        href: "/dich-vu-marketing/xay-dung-group-facebook",
        gradient: "from-blue-500 to-cyan-500",
        hoverGradient: "hover:from-blue-600 hover:to-cyan-600",
    },
    {
        nameVI: "Xây Fanpage",
        nameEN: "Fanpage Ads",
        icon: BarChart3,
        href: "/dich-vu-marketing/xay-dung-fanpage",
        gradient: "from-purple-500 to-pink-500",
        hoverGradient: "hover:from-purple-600 hover:to-pink-600",
    },
    {
        nameVI: "TikTok Shop",
        nameEN: "TikTok Shop",
        icon: Video,
        href: "/dich-vu-marketing/xay-dung-tiktok-shop",
        gradient: "from-rose-500 to-pink-600",
        hoverGradient: "hover:from-rose-600 hover:to-pink-700",
    },
];

export default function FloatingServicesNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { language } = useLanguage();
    const isVI = language === 'vi';

    return (
        <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-50 flex flex-col items-start gap-2 sm:gap-3">
            {/* Service Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-1.5 sm:gap-2 mb-2"
                    >
                        {serviceItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r ${item.gradient} ${item.hoverGradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 group ${isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900' : ''}`}
                                    >
                                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors flex-shrink-0">
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <span className="font-medium text-xs sm:text-sm whitespace-nowrap">
                                            {isVI ? item.nameVI : item.nameEN}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="w-1.5 h-1.5 rounded-full bg-white ml-auto"
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Services navigation"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                        <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                </motion.div>

                {/* Pulse effect when closed */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
                )}
            </motion.button>

            {/* Floating Animation - Desktop only */}
            <style jsx>{`
                @media (min-width: 640px) {
                    @keyframes floatLeft {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-8px);
                        }
                    }
                    
                    button:not(:hover) {
                        animation: floatLeft 3s ease-in-out infinite;
                    }
                }
            `}</style>
        </div>
    );
}
