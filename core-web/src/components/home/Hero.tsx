'use client';

import { motion, Variants } from 'framer-motion';

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white">
            {/* Premium Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-40 mix-blend-screen pointer-events-none"
                >
                    <source src="https://www.shutterstock.com/shutterstock/videos/3863263433/preview/stock-footage-blue-binary-code-data-stream-futuristic-digital-code-and-data-transfer.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none" />
            </div>

            <motion.div
                className="container mx-auto px-6 z-20 text-center flex flex-col items-center drop-shadow-2xl backdrop-blur-[2px] py-12 rounded-3xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    variants={itemVariants}
                    className="text-[10px] md:text-xs font-mono font-light text-white/60 mb-8 uppercase tracking-[0.5em]"
                >
                    CORE DIGITAL SOLUTIONS
                </motion.p>

                <div className="overflow-hidden pb-6">
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] drop-shadow-2xl"
                    >
                        Engineering
                    </motion.h1>
                </div>
                <div className="overflow-hidden pb-6">
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] drop-shadow-2xl"
                    >
                        the Digital <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 italic">Elite.</span>
                    </motion.h1>
                </div>

                <motion.p
                    variants={itemVariants}
                    className="mt-12 text-lg md:text-xl text-neutral-400 max-w-2xl font-light"
                >
                    We engineer premium Apps, Web Platforms, AI & ML Agents, Full-Stack Systems, and flawless UI/UX experiences, elevated by elite Social Media Services.
                </motion.p>

                <motion.div variants={itemVariants} className="mt-16">
                    <button className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden text-sm font-medium tracking-wide">
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Our Work
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-neutral-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                    </button>
                </motion.div>
            </motion.div>

            {/* Premium Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.4em]">Scroll</span>
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
                    <motion.div
                        className="w-full h-1/3 bg-white/80"
                        animate={{ y: [-24, 64] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
