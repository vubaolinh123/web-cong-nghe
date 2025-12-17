"use client";

import { motion } from "framer-motion";

export default function StrategyVideo() {
    return (
        <section className="py-20 bg-slate-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">1000 ĐƠN HÀNG / THÁNG</h2>
                    <p className="text-green-400 font-medium">Video hướng dẫn cách kéo tệp khách GROUP FACEBOOK tiềm năng</p>
                </div>

                <motion.div
                    className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-black aspect-video"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/m6lGgyleInU"
                        title="1000 đơn hàng / tháng, Video hướng dẫn cách kéo tệp khách GROUP FACEBOOK tiềm năng"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
