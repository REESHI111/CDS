import { unstable_noStore as noStore } from 'next/cache';

import { getSupabaseServerClient } from './supabase/server';

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image_url: string;
  linkedin_url: string;
  github_url: string;
  instagram_url: string;
  sort_order: number;
};

export type Brand = {
  id: number;
  name: string;
  image_url: string;
  sort_order: number;
};

export type FeaturedProject = {
  id: number;
  title: string;
  category: string;
  year_label: string;
  image_url: string;
  color_class: string;
  sort_order: number;
};

export type StudioProject = {
  id: number;
  title: string;
  category: string;
  year_label: string;
  image_url: string;
  color_class: string;
  col_span_class: string;
  aspect_class: string;
  sort_order: number;
};

export type Service = {
  id: number;
  category: string;
  description: string;
  stack: string[];
  sort_order: number;
};

export type Capability = {
  id: number;
  label: string;
  sort_order: number;
};

export async function getLeadershipVisible() {
  noStore();
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return false;
  }

  const { data } = await supabase
    .from('site_settings')
    .select('leadership_visible')
    .eq('id', 1)
    .maybeSingle();

  return data?.leadership_visible ?? false;
}

export async function getTeamMembers() {
  noStore();
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return [] as TeamMember[];
  }

  const { data } = await supabase
    .from('team_members')
    .select('*')
    .order('sort_order', { ascending: true });

  return (data ?? []) as TeamMember[];
}

export async function getBrands() {
  noStore();
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return [] as Brand[];
  }

  const { data } = await supabase
    .from('brands')
    .select('*')
    .order('sort_order', { ascending: true });

  return (data ?? []) as Brand[];
}

export async function getFeaturedProjects() {
  noStore();
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return [] as FeaturedProject[];
  }

  const { data } = await supabase
    .from('featured_projects')
    .select('*')
    .order('sort_order', { ascending: true });

  return (data ?? []) as FeaturedProject[];
}

export async function getStudioProjects() {
  noStore();
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return [] as StudioProject[];
  }

  const { data } = await supabase
    .from('studio_projects')
    .select('*')
    .order('sort_order', { ascending: true });

  return (data ?? []) as StudioProject[];
}

export async function getServices() {
  noStore();
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return [] as Service[];
  }

  const { data } = await supabase
    .from('services')
    .select('*')
    .order('sort_order', { ascending: true });

  return (data ?? []) as Service[];
}

export async function getCapabilities() {
  noStore();
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return [] as Capability[];
  }

  const { data } = await supabase
    .from('capabilities')
    .select('*')
    .order('sort_order', { ascending: true });

  return (data ?? []) as Capability[];
}
