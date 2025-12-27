"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CaseStudy } from "./types";

interface ImageModalProps {
    selectedImage: CaseStudy | null;
    setSelectedImage: (image: CaseStudy | null) => void;
}

export default function ImageModal({ selectedImage, setSelectedImage }: ImageModalProps) {
    // Close modal on ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedImage) {
                setSelectedImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, setSelectedImage]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    if (!selectedImage || typeof window === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
                style={{
                    zIndex: 2147483647,
                    isolation: 'isolate',
                    position: 'fixed'
                }}
                onClick={() => setSelectedImage(null)}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

                {/* Close button */}
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group"
                >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </motion.button>

                {/* Image container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="relative max-w-3xl max-h-[60vh] w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={`relative w-full h-full flex items-center justify-center`}>
                        <div className={`relative ${selectedImage.type === "portrait"
                            ? "w-auto h-[60vh] max-w-full"
                            : "w-full h-auto max-h-[60vh]"
                            }`}>
                            <Image
                                src={selectedImage.image}
                                alt={selectedImage.alt}
                                width={selectedImage.type === "portrait" ? 1080 : 1920}
                                height={selectedImage.type === "portrait" ? 1920 : 1080}
                                className={`${selectedImage.type === "portrait"
                                    ? "w-auto h-full max-h-[60vh]"
                                    : "w-full h-auto max-h-[60vh]"
                                    } rounded-2xl shadow-2xl`}
                                quality={95}
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
}
