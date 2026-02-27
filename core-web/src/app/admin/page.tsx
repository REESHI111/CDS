'use client';

import { useCallback, useEffect, useState } from 'react';

import { getSupabaseBrowserClient } from '@/lib/supabase/client';

type AuthMode = 'loading' | 'authenticated' | 'unauthenticated';

export default function AdminPage() {
    const supabase = getSupabaseBrowserClient();
    const missingConfig = !supabase;
    const [authMode, setAuthMode] = useState<AuthMode>(missingConfig ? 'unauthenticated' : 'loading');
    const [leadershipVisible, setLeadershipVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [isBusy, setIsBusy] = useState(false);

    const loadSettings = useCallback(async () => {
        if (!supabase) return;

        const { data, error } = await supabase
            .from('site_settings')
            .select('leadership_visible')
            .eq('id', 1)
            .maybeSingle();

        if (error) {
            setStatusMessage(error.message);
            return;
        }

        setLeadershipVisible(data?.leadership_visible ?? false);
        setStatusMessage('');
    }, [supabase]);

    useEffect(() => {
        if (!supabase) {
            return;
        }

        const hydrate = async () => {
            const { data } = await supabase.auth.getSession();
            if (!data.session) {
                setAuthMode('unauthenticated');
                return;
            }

            setAuthMode('authenticated');
            await loadSettings();
        };

        hydrate();
    }, [loadSettings, supabase]);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!supabase) {
            setStatusMessage('Supabase is not configured.');
            return;
        }

        setIsBusy(true);
        setStatusMessage('');

        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                setStatusMessage(error.message);
                setIsBusy(false);
                return;
            }

            setAuthMode('authenticated');
            await loadSettings();
        } catch {
            setStatusMessage('Network request failed. Check browser extensions, firewall, or blocked requests to Supabase.');
            setIsBusy(false);
            return;
        }
        setIsBusy(false);
    };

    const handleSaveVisibility = async () => {
        if (!supabase) return;

        setIsBusy(true);
        setStatusMessage('');

        const { error } = await supabase
            .from('site_settings')
            .upsert(
                {
                    id: 1,
                    leadership_visible: leadershipVisible,
                    updated_at: new Date().toISOString(),
                },
                { onConflict: 'id' },
            );

        setIsBusy(false);

        if (error) {
            setStatusMessage(error.message);
            return;
        }

        setStatusMessage('Saved. Leadership visibility updated.');
    };

    const handleLogout = async () => {
        if (!supabase) return;

        await supabase.auth.signOut();
        setAuthMode('unauthenticated');
        setPassword('');
        setStatusMessage('');
    };

    if (authMode === 'loading') {
        return (
            <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
                <div className="max-w-xl mx-auto text-neutral-400">Loading admin...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
            <div className="max-w-xl mx-auto border border-white/10 bg-neutral-950 p-8">
                <h1 className="text-4xl font-medium tracking-tight mb-8">Admin</h1>

                {authMode === 'unauthenticated' ? (
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="admin-email" className="text-sm text-neutral-400">Email</label>
                            <input
                                id="admin-email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                className="w-full bg-black border border-white/15 px-4 py-3 outline-none focus:border-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="admin-password" className="text-sm text-neutral-400">Password</label>
                            <input
                                id="admin-password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                className="w-full bg-black border border-white/15 px-4 py-3 outline-none focus:border-white"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isBusy}
                            className="w-full bg-white text-black py-3 font-medium disabled:opacity-60"
                        >
                            {isBusy ? 'Signing in...' : 'Sign in'}
                        </button>
                    </form>
                ) : (
                    <div className="space-y-8">
                        <div className="flex items-center justify-between p-4 border border-white/10">
                            <div>
                                <p className="text-sm text-neutral-400 uppercase tracking-widest">Leadership Section</p>
                                <p className="text-xl mt-2">{leadershipVisible ? 'Visible to users' : 'Hidden from users'}</p>
                            </div>
                            <label className="relative inline-flex cursor-pointer items-center">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={leadershipVisible}
                                    onChange={(event) => setLeadershipVisible(event.target.checked)}
                                />
                                <div className="h-6 w-11 rounded-full bg-neutral-700 peer-checked:bg-white transition-colors" />
                                <span className="pointer-events-none absolute left-1 top-1 h-4 w-4 rounded-full bg-black transition-transform peer-checked:translate-x-5" />
                            </label>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleSaveVisibility}
                                disabled={isBusy}
                                className="flex-1 bg-white text-black py-3 font-medium disabled:opacity-60"
                            >
                                {isBusy ? 'Saving...' : 'Save Changes'}
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-5 py-3 border border-white/20"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}

                {missingConfig ? (
                    <p className="mt-6 text-sm text-neutral-300">
                        Supabase env vars are missing. Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
                    </p>
                ) : null}
                {statusMessage ? <p className="mt-6 text-sm text-neutral-300">{statusMessage}</p> : null}
            </div>
        </div>
    );
}
