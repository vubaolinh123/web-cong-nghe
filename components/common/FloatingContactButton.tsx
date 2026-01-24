"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import ProductShowcaseButton from "./ProductShowcaseButton";
import TechShowcaseButton from "../ai-service/TechShowcaseButton";

export default function FloatingContactButton() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "0584503333";
    const pathname = usePathname();

    // Only show ProductShowcaseButton on marketing pages
    const isMarketingPage = pathname?.startsWith("/dich-vu-marketing");
    // Only show TechShowcaseButton on technology page
    const isTechnologyPage = pathname === "/dich-vu-cong-nghe";
    // Homepage shows both showcase buttons
    const isHomePage = pathname === "/" || pathname === "";

    const contactOptions = [
        {
            name: "Zalo",
            icon: MessageCircle,
            href: `https://zalo.me/${phoneNumber}`,
            color: "from-blue-500 to-blue-600",
            hoverColor: "hover:from-blue-600 hover:to-blue-700",
        },
        {
            name: "Gọi điện",
            icon: Phone,
            href: `tel:${phoneNumber}`,
            color: "from-green-500 to-green-600",
            hoverColor: "hover:from-green-600 hover:to-green-700",
        },
    ];

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-2 sm:gap-4">
            {/* Product Showcase Button - Marketing pages and Homepage */}
            {(isMarketingPage || isHomePage) && <ProductShowcaseButton />}

            {/* Tech Showcase Button - Technology page and Homepage */}
            {(isTechnologyPage || isHomePage) && <TechShowcaseButton />}

            {/* Contact Options Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-2 sm:gap-3"
                    >
                        {contactOptions.map((option, index) => (
                            <motion.a
                                key={option.name}
                                href={option.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r ${option.color} ${option.hoverColor} text-white shadow-lg hover:shadow-xl transition-all duration-300 group min-w-[120px] sm:min-w-[140px]`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors flex-shrink-0">
                                    <option.icon size={16} className="sm:w-5 sm:h-5" />
                                </div>
                                <span className="font-medium text-xs sm:text-sm">{option.name}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${isOpen ? "rotate-0" : ""
                    }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact options"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? (
                        <X size={24} className="sm:w-7 sm:h-7" />
                    ) : (
                        <Phone size={24} className="sm:w-7 sm:h-7" />
                    )}
                </motion.div>
            </motion.button>

            {/* Floating Animation - Disabled on mobile for better performance */}
            <style jsx>{`
                @media (min-width: 640px) {
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }
                    
                    button:not(:hover) {
                        animation: float 3s ease-in-out infinite;
                    }
                }
            `}</style>
        </div>
    );
}
