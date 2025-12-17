"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-slate-950 to-slate-950" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-bold mb-6 backdrop-blur-md">
                            DỊCH VỤ GROUP VIP #1 VIỆT NAM
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Xây Dựng <span className="text-green-500">Group Facebook</span> <br />
                            Trọn Gói Cùng <span className="text-yellow-500">ASI Everest</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Sở hữu cộng đồng <strong>100.000+ thành viên thật</strong>.
                            Kênh bán hàng tự động, uy tín và bền vững nhất trên mạng xã hội Facebook.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/lien-he"
                                className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transform hover:-translate-y-1 text-center"
                            >
                                Điền Thông Tin Triển Khai
                            </a>
                            <a
                                href="tel:0923451469"
                                className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2"
                            >
                                Tư Vấn: 0923.451.469
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <img
                            src="/image/group_hero.png"
                            alt="Group Community Network"
                            className="w-full h-auto drop-shadow-2xl animate-float"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
