'use client';

import { motion } from 'framer-motion';

export default function WelfarePage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black text-white relative overflow-hidden">

            {/* Subtle Background Glow */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">

                <div className="flex flex-col items-center text-center gap-16 md:gap-20">

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-3xl"
                    >
                        <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-8">
                            Our Welfare Pledge
                        </p>
                        <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
                            Purpose Beyond Profit.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="w-full max-w-3xl flex flex-col gap-8 text-neutral-400 font-light text-xl md:text-2xl leading-relaxed"
                    >
                        <p>
                            We believe true elite status is not just measured by digital architecture, but by the tangible impact we leave on the world around us.
                        </p>
                        <p className="text-white font-medium px-8 py-6 border-y border-white/10 my-4">
                            A committed portion of CORE Consultancy’s agency revenue is directly pledged to the welfare, feeding, and protection of cows through sustained contributions to Gaushalas.
                        </p>
                        <p>
                            Our success translates into meaningful, real-world care. Partnering with us means actively participating in localized welfare efforts while securing top-tier digital engineering.
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
