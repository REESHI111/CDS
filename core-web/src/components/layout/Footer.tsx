'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-neutral-950 text-white w-full py-20 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 h-full flex flex-col justify-between mix-blend-difference">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="max-w-md">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                            Engineering the Digital Elite.
                        </h2>
                        <p className="text-neutral-400 text-lg">
                            Partner with CORE to architect your next digital advantage. No templates. No compromises.
                        </p>
                    </div>

                    <div className="flex gap-16">
                        <div className="flex flex-col gap-4">
                            <span className="text-sm font-semibold tracking-wider text-neutral-500 uppercase">Sitemap</span>
                            <Link href="/" className="hover:text-neutral-300 transition-colors">Home</Link>
                            <Link href="/services" className="hover:text-neutral-300 transition-colors">Services</Link>
                            <Link href="/studio" className="hover:text-neutral-300 transition-colors">Studio</Link>
                            <Link href="/vision" className="hover:text-neutral-300 transition-colors">Vision</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-sm font-semibold tracking-wider text-neutral-500 uppercase">Social</span>
                            <Link href="https://twitter.com" target="_blank" className="hover:text-neutral-300 transition-colors">Twitter (X)</Link>
                            <Link href="https://linkedin.com" target="_blank" className="hover:text-neutral-300 transition-colors">LinkedIn</Link>
                            <Link href="https://github.com" target="_blank" className="hover:text-neutral-300 transition-colors">GitHub</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                    <p>© {new Date().getFullYear()} CORE Consultancy. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
