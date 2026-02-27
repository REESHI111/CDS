'use client';

import { motion } from 'framer-motion';

export default function CareerPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 max-w-7xl tracking-wide flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-start text-left lg:w-1/2"
                >
                    <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-8">
                        Careers at CORE
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
                        Join the <br className="hidden md:block" /> Resistance.
                    </h1>
                    <p className="text-xl text-neutral-400 font-light max-w-2xl lg:mb-0">
                        We are always looking for elite engineers, visionary designers, and relentless operators who refuse to settle for mediocrity.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col text-left"
                >
                    <form className="bg-neutral-950 p-8 md:p-12 lg:p-16 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-colors">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                            <div>
                                <h3 className="text-3xl font-medium mb-4">Open Application</h3>
                                <p className="text-neutral-400 max-w-lg">
                                    Don&apos;t see a specific role? If you belong in the top 1% of your field, we want to talk to you. Show us your work.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <label className="flex-1 w-full flex items-center justify-center px-6 py-6 border border-dashed border-white/20 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                                <span className="text-neutral-400 flex flex-col items-center gap-3">
                                    <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <span className="text-sm font-medium tracking-wide text-white">Upload Resume</span>
                                    <span className="text-xs font-mono">PDF, DOC, DOCX up to 10MB</span>
                                </span>
                                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                            </label>

                            <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-6 bg-white text-black font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors shrink-0">
                                Transmit Portfolio
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </form>

                </motion.div>

            </div>
        </div>
    );
}
