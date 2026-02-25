'use client';

import { motion } from 'framer-motion';

const SERVICES = [
    {
        category: "System Architecture",
        description: "Designing resilient, scalable infrastructures for modern web applications.",
        stack: ["Next.js", "Node.js", "Supabase", "AWS"]
    },
    {
        category: "Product Engineering",
        description: "End-to-end full stack development of complex digital platforms with absolute precision.",
        stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
        category: "UI/UX Strategy",
        description: "Architecting user interfaces designed to dominate markets and convert high-ticket leads.",
        stack: ["Figma", "Design Systems", "Prototyping", "WebGL"]
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <div className="container mx-auto px-6 max-w-5xl">

                <div className="mb-24">
                    <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-6">
                        Capabilities
                    </p>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                        Technical Execution.
                    </h1>
                </div>

                <div className="flex flex-col gap-0 border-t border-white/10">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
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
                                    {service.stack.map(tech => (
                                        <span key={tech} className="px-3 py-1 text-xs font-mono uppercase tracking-widest border border-white/20 rounded-full text-neutral-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
