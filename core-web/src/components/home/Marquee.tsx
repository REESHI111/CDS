'use client';

import { motion } from 'framer-motion';

import type { Capability } from '@/lib/content';

type MarqueeProps = {
    capabilities: Capability[];
};

export default function Marquee({ capabilities }: MarqueeProps) {
    return (
        <section className="bg-black py-24 md:py-32 w-full overflow-hidden border-t border-b border-white/5">
            <div className="container mx-auto px-6 max-w-lg text-center mb-16">
                <p className="text-sm font-mono tracking-widest uppercase text-neutral-500">
                    Core Capabilities
                </p>
            </div>

            <div className="relative flex whitespace-nowrap overflow-hidden">
                {/* Left Gradient Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[200px] bg-gradient-to-r from-black to-transparent" />

                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
                    className="flex flex-row"
                >
                    {/* Double array to ensure seamless infinite looping */}
                    {[...capabilities, ...capabilities, ...capabilities].map((skill, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-medium px-8 text-neutral-300 transition-colors hover:text-white"
                        >
                            * {skill.label}
                        </span>
                    ))}
                </motion.div>

                {/* Right Gradient Fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[200px] bg-gradient-to-l from-black to-transparent" />
            </div>
        </section>
    );
}
