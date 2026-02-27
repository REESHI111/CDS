'use client';

import { createClient, SupabaseClient } from '@supabase/supabase-js';

import { supabaseAnonKey, supabaseUrl } from './config';

let browserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient() {
  if (!browserClient && supabaseUrl && supabaseAnonKey) {
    browserClient = createClient(supabaseUrl, supabaseAnonKey);
  }

  return browserClient;
}
