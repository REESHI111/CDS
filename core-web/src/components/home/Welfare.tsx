'use client';

import { motion } from 'framer-motion';

export default function Welfare() {
    return (
        <section className="bg-black text-white py-32 md:py-48 w-full border-t border-white/5 relative overflow-hidden">

            {/* Subtle Background Glow */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">

                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="md:w-1/3"
                    >
                        <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-6">
                            Our Welfare Pledge
                        </p>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                            Purpose <br /> Beyond Profit.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="md:w-2/3 flex flex-col gap-8 text-neutral-400 font-light text-lg md:text-xl leading-relaxed"
                    >
                        <p>
                            We believe true elite status is not just measured by digital architecture, but by the tangible impact we leave on the world around us.
                        </p>
                        <p>
                            A committed portion of CORE Consultancy’s agency revenue is directly pledged to the welfare, feeding, and protection of cows through sustained contributions to Gaushalas.
                        </p>
                        <p className="text-white font-medium border-l border-white/20 pl-6 mt-4">
                            Our success translates into meaningful, real-world care.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
