'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import type { StudioProject } from '@/lib/content';

type StudioGridProps = {
    projects: StudioProject[];
};

export default function StudioGrid({ projects }: StudioGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`group cursor-pointer ${project.col_span_class} flex flex-col`}
                >
                    <div className={`relative w-full ${project.aspect_class} overflow-hidden ${project.color_class}`}>
                        <motion.div
                            className="w-full h-full relative"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Image
                                src={project.image_url}
                                alt={project.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                sizes="(max-width: 768px) 100vw, 80vw"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </motion.div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:flex w-24 h-24 bg-white/10 backdrop-blur-md rounded-full items-center justify-center border border-white/20 text-xs font-medium tracking-widest uppercase">
                            View
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
    );
}
