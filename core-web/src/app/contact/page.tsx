'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

export default function ContactPage() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState('submitting');
        setErrorMessage('');

        const supabase = getSupabaseBrowserClient();
        if (!supabase) {
            setFormState('error');
            setErrorMessage('Supabase is not configured.');
            return;
        }

        const formData = new FormData(e.currentTarget);
        const payload = {
            name: String(formData.get('name') ?? ''),
            email: String(formData.get('email') ?? ''),
            phone: String(formData.get('phone') ?? ''),
            language: String(formData.get('language') ?? ''),
            details: String(formData.get('details') ?? ''),
        };

        const { error } = await supabase.from('contact_requests').insert(payload);

        if (error) {
            setFormState('error');
            setErrorMessage(error.message);
            return;
        }

        e.currentTarget.reset();
        setFormState('success');
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 max-w-4xl">

                <div className="mb-24">
                    <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-6">
                        Connect
                    </p>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                        Call Request.
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-neutral-950 p-8 md:p-12 border border-white/10"
                >
                    {formState === 'success' ? (
                        <div className="py-24 text-center">
                            <h3 className="text-3xl font-medium mb-4">Inquiry Received.</h3>
                            <p className="text-neutral-400">Our team will review your requirements and contact you shortly.</p>
                            <button
                                onClick={() => setFormState('idle')}
                                className="mt-12 text-sm font-mono uppercase tracking-widest border-b border-white hover:text-neutral-400 hover:border-neutral-400 transition-colors pb-1"
                            >
                                Submit another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                            <div className="group relative z-0 w-full">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block py-4 px-0 w-full text-base lg:text-lg bg-transparent border-0 border-b border-neutral-800 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute text-neutral-500 text-lg duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                >
                                    Your Name
                                </label>
                            </div>

                            <div className="group relative z-0 w-full">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block py-4 px-0 w-full text-base lg:text-lg bg-transparent border-0 border-b border-neutral-800 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute text-neutral-500 text-lg duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                >
                                    Email Address
                                </label>
                            </div>

                            <div className="group relative z-0 w-full">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="block py-4 px-0 w-full text-base lg:text-lg bg-transparent border-0 border-b border-neutral-800 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute text-neutral-500 text-lg duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                >
                                    Phone Number
                                </label>
                            </div>

                            <div className="group relative z-0 w-full flex flex-col">
                                <label htmlFor="language" className="text-neutral-500 text-sm mb-2">Preferred Communication Language</label>
                                <select
                                    name="language"
                                    id="language"
                                    className="block py-4 px-0 w-full text-base lg:text-lg bg-transparent border-0 border-b border-neutral-800 appearance-none focus:outline-none focus:ring-0 focus:border-white transition-colors cursor-pointer"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled className="bg-neutral-900 text-neutral-500">Select a language...</option>
                                    <option value="english" className="bg-neutral-900 text-white">English</option>
                                    <option value="hindi" className="bg-neutral-900 text-white">Hindi</option>
                                    <option value="gujarati" className="bg-neutral-900 text-white">Gujarati</option>
                                    <option value="marathi" className="bg-neutral-900 text-white">Marathi</option>
                                    <option value="bengali" className="bg-neutral-900 text-white">Bengali</option>
                                </select>
                            </div>

                            <div className="group relative z-0 w-full mt-4">
                                <textarea
                                    name="details"
                                    id="details"
                                    rows={4}
                                    className="block py-4 px-0 w-full text-base lg:text-lg bg-transparent border-0 border-b border-neutral-800 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors resize-none"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="details"
                                    className="absolute text-neutral-500 text-lg duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                >
                                    Project Details
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={formState === 'submitting'}
                                className="mt-8 self-end px-12 py-4 bg-white text-black rounded-full font-medium tracking-wide hover:bg-neutral-200 transition-colors disabled:opacity-50 flex items-center gap-4"
                            >
                                {formState === 'submitting' ? 'Transmitting...' : 'Submit Request'}
                                {formState !== 'submitting' && (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                )}
                            </button>
                            {formState === 'error' ? (
                                <p className="text-sm text-red-400">{errorMessage}</p>
                            ) : null}
                        </form>
                    )}
                </motion.div>

            </div>
        </div>
    );
}
