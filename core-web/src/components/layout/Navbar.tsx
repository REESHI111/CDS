'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
    { name: 'Work', href: '/studio' },
    { name: 'Services', href: '/services' },
    { name: 'Vision', href: '/vision' },
    { name: 'Welfare', href: '/welfare' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`fixed top-0 inset-x-0 w-full z-[100] transition-colors duration-300 ${hasScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/" className="text-xl font-medium tracking-tight relative group">
                    CORE
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </Link>

                <nav className="hidden md:flex gap-10">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/contact"
                    className="hidden md:flex px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                    Start Project
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-[110] relative text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-4 relative flex flex-col justify-between">
                        <span className={`w-full h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`w-full h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? '0%' : '-100%' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[105] flex flex-col justify-center items-center md:hidden pointer-events-auto"
                style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
            >
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-medium tracking-tight hover:text-neutral-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-8 px-8 py-3 rounded-full border border-white text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Start Project
                    </Link>
                </nav>
            </motion.div>
        </motion.header>
    );
}
