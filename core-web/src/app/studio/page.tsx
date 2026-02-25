'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PROJECTS = [
    {
        id: 1,
        title: 'Aura Protocol',
        category: 'DeFi Architecture',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        color: 'bg-zinc-900',
        colSpan: 'md:col-span-8',
        aspect: 'aspect-[16/9]'
    },
    {
        id: 2,
        title: 'Nexus OS',
        category: 'System Interface',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
        color: 'bg-neutral-900',
        colSpan: 'md:col-span-4',
        aspect: 'aspect-[3/4]'
    },
    {
        id: 3,
        title: 'Vanguard Labs',
        category: 'Digital Strategy',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1635773054098-9caeb584c599?q=80&w=2565&auto=format&fit=crop',
        color: 'bg-stone-900',
        colSpan: 'md:col-span-6',
        aspect: 'aspect-square'
    },
    {
        id: 4,
        title: 'Echo Commerce',
        category: 'E-com Infrastructure',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop',
        color: 'bg-zinc-950',
        colSpan: 'md:col-span-6',
        aspect: 'aspect-[4/3]'
    }
];

export default function StudioPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="mb-24 max-w-2xl">
                    <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-6">
                        The Studio
                    </p>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
                        Selected works & case studies.
                    </h1>
                    <p className="text-lg text-neutral-400 font-light">
                        An archive of engineered digital excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={`group cursor-pointer ${project.colSpan} flex flex-col`}
                        >
                            <div className={`relative w-full ${project.aspect} overflow-hidden ${project.color}`}>
                                <motion.div
                                    className="w-full h-full relative"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Image
                                        src={project.image}
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
                                <span className="text-sm text-neutral-400 font-mono">{project.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
