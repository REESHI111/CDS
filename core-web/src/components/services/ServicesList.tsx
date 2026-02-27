'use client';

import { motion } from 'framer-motion';

import type { Service } from '@/lib/content';

type ServicesListProps = {
    services: Service[];
};

export default function ServicesList({ services }: ServicesListProps) {
    return (
        <div className="flex flex-col gap-0 border-t border-white/10">
            {services.map((service, index) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="py-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24 group"
                >
                    <div className="lg:w-1/3 flex items-center lg:items-start transition-transform duration-500 group-hover:translate-x-4">
                        <span className="text-2xl font-mono text-neutral-600 mr-6 w-12 hidden md:block">0{index + 1}</span>
                        <h2 className="text-3xl font-medium">{service.category}</h2>
                    </div>

                    <div className="lg:w-2/3 flex flex-col gap-6">
                        <p className="text-xl text-neutral-400 font-light leading-relaxed">
                            {service.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {service.stack.map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs font-mono uppercase tracking-widest border border-white/20 rounded-full text-neutral-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
