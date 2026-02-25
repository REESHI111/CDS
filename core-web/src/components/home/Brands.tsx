'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// To add your own custom logos, place the image files (e.g., .png or .svg) in the public/logos directory 
// and update the 'image' path below.
const LOGOS = [
    { name: 'Affinitty', image: '/logos/Affinitty.jpg' },
    { name: 'Elisium', image: '/logos/Elisium.png' },
    { name: 'Quikit', image: '/logos/Quikit.png' },
    { name: 'Cognosync', image: '/logos/cognosync.png' },
    { name: 'Autonomerz', image: '/logos/Autonomerz.png' },
];

export default function Brands() {
    return (
        <section className="bg-black text-white w-full border-t border-white/5 pt-32 pb-12">
            <div className="container mx-auto px-6 mb-16 text-center">
                <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-6">
                    Trusted By
                </p>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                    Organizations we operate with.
                </h2>
            </div>

            {/* Logo Marquee */}
            <div className="w-full overflow-hidden border-y border-white/5 py-12 relative flex items-center bg-white/[0.02]">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-16 md:gap-32 px-8 min-w-max items-center"
                    animate={{ x: [0, -1035] }} // Approximate width of one set, adjust as needed depending on image width
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Render twice for seamless looping */}
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
                        <div key={idx} className="flex items-center gap-6 group">
                            <div className="relative h-12 md:h-16 w-32 md:w-40 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                {/* The CSS filters below automatically turn any image black/white and theme-friendly */}
                                <Image
                                    src={logo.image}
                                    alt={logo.name}
                                    fill
                                    className="object-contain grayscale contrast-200 brightness-[3] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500 mix-blend-screen"
                                    sizes="(max-width: 768px) 128px, 160px"
                                />
                            </div>
                            <span className="text-xl font-medium tracking-widest uppercase text-neutral-600 group-hover:text-white transition-colors hidden lg:block whitespace-nowrap">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
