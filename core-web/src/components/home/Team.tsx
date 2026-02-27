'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Linkedin, Instagram, Github } from 'lucide-react';

import type { TeamMember } from '@/lib/content';

type TeamProps = {
    members: TeamMember[];
};

export default function Team({ members }: TeamProps) {
    return (
        <section className="bg-white text-black py-32 md:py-48 w-full border-t border-black/5">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div>
                        <p className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-6">
                            Leadership
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                            The architects behind the execution.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                            className="group cursor-pointer flex flex-col"
                        >
                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100 mb-6">
                                <motion.div
                                    className="w-full h-full relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Image
                                        src={member.image_url}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 20vw"
                                    />
                                </motion.div>
                            </div>

                            <div className="flex justify-between items-start mt-2">
                                <div>
                                    <h3 className="text-base lg:text-lg font-medium tracking-wide mb-1 leading-tight">{member.name}</h3>
                                    <p className="text-[10px] lg:text-xs text-neutral-500 font-mono uppercase tracking-wider">{member.role}</p>
                                </div>
                                <div className="flex gap-2.5 items-center mt-1 shrink-0">
                                    <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                        <Linkedin className="w-[14px] h-[14px]" />
                                    </a>
                                    <a href={member.github_url} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                        <Github className="w-[14px] h-[14px]" />
                                    </a>
                                    <a href={member.instagram_url} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                        <Instagram className="w-[14px] h-[14px]" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
