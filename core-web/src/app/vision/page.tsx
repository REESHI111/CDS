'use client';

import { motion } from 'framer-motion';

export default function VisionPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 max-w-4xl tracking-wide selection:bg-white selection:text-black">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-8">
                        The Vision
                    </p>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-16">
                        We don't just build. We architect.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
                >
                    <div className="text-lg text-neutral-400 font-light leading-relaxed flex flex-col gap-8">
                        <p>
                            In a digital landscape crowded with templates and compromises, CORE stands apart as an engineering elite. We partner with ambitious brands to construct platforms that don't just function—they dominate.
                        </p>
                        <p>
                            Our philosophy is rooted in absolute precision. Every line of code, every micro-interaction, and every architectural decision is calculated to deliver a flawless, high-performance experience.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 border-l border-white/10 pl-8">
                        <div>
                            <h3 className="text-2xl font-medium mb-4">Uncompromising Quality</h3>
                            <p className="text-sm text-neutral-500">We refuse to ship anything less than million-dollar quality. Our standards are defined by the top echelon of global digital execution.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-4">Technical Supremacy</h3>
                            <p className="text-sm text-neutral-500">From complex WebGL shaders to scalable Edge infrastructure, we wield modern technology to create unfair advantages for our clients.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
