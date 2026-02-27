import { createClient } from '@supabase/supabase-js';

import { supabaseAnonKey, supabaseUrl } from './config';

export function getSupabaseServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
}
