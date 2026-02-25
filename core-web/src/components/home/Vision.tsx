'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Vision() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 90%', 'center center'],
    });

    const words = [
        "We", "don't", "just", "build.",
        "We", "research,", "architect,", "and",
        "engineer", "premium", "digital", "solutions."
    ];

    return (
        <section
            ref={containerRef}
            className="bg-white text-black py-24 md:py-32 relative w-full flex items-center justify-center overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                <p className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-12 text-center md:text-left">
                    The Vision
                </p>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] flex flex-wrap gap-x-3 gap-y-4">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

                        return (
                            <motion.span
                                key={i}
                                className="inline-block"
                                style={{ opacity }}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </h2>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-black/10 pt-16">
                    <div className="flex flex-col gap-4">
                        <span className="text-5xl font-light">01</span>
                        <h3 className="text-xl font-medium">Research</h3>
                        <p className="text-neutral-500 text-sm">Deep strategic analysis before a single line of code is ever written.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-5xl font-light">02</span>
                        <h3 className="text-xl font-medium">Architecture</h3>
                        <p className="text-neutral-500 text-sm">Scalable, secure engineering across Web, App, and AI platforms.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-5xl font-light">03</span>
                        <h3 className="text-xl font-medium">Execution</h3>
                        <p className="text-neutral-500 text-sm">Delivering premium, high-performance digital systems and social services.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
