'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import type { FeaturedProject } from '@/lib/content';

type FeaturedWorkProps = {
    projects: FeaturedProject[];
};

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
    return (
        <section className="bg-black text-white py-32 md:py-48 w-full border-t border-white/5">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div>
                        <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-6">
                            Selected Works
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                            Evidence of execution.
                        </h2>
                    </div>
                    <button className="text-sm font-medium border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-0 lg:px-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className={`relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden ${project.color_class}`}>
                                <motion.div
                                    className="w-full h-full relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Image
                                        src={project.image_url}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Subtle Dark Overlay */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </motion.div>

                                {/* View Project Floating Tag on Hover (Desktop) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:flex w-24 h-24 bg-white/10 backdrop-blur-md rounded-full items-center justify-center border border-white/20 text-xs text-center font-medium tracking-widest uppercase leading-tight">
                                    Coming<br />Soon
                                </div>
                            </div>

                            <div className="mt-6 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-wide mb-2">{project.title}</h3>
                                    <p className="text-sm text-neutral-500 font-mono uppercase tracking-wider">{project.category}</p>
                                </div>
                                <span className="text-sm text-neutral-400 font-mono">{project.year_label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
