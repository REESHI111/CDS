-- Core content and admin controls
create table if not exists public.site_settings (
    id int primary key,
    leadership_visible boolean not null default false,
    updated_at timestamptz not null default now()
);

insert into public.site_settings (id, leadership_visible)
values (1, false)
on conflict (id) do nothing;

create table if not exists public.team_members (
    id bigint generated always as identity primary key,
    name text not null,
    role text not null,
    image_url text not null,
    linkedin_url text not null,
    github_url text not null,
    instagram_url text not null,
    sort_order int not null default 0
);

create table if not exists public.brands (
    id bigint generated always as identity primary key,
    name text not null,
    image_url text not null,
    sort_order int not null default 0
);

create table if not exists public.featured_projects (
    id bigint generated always as identity primary key,
    title text not null,
    category text not null,
    year_label text not null,
    image_url text not null,
    color_class text not null,
    sort_order int not null default 0
);

create table if not exists public.studio_projects (
    id bigint generated always as identity primary key,
    title text not null,
    category text not null,
    year_label text not null,
    image_url text not null,
    color_class text not null,
    col_span_class text not null,
    aspect_class text not null,
    sort_order int not null default 0
);

create table if not exists public.services (
    id bigint generated always as identity primary key,
    category text not null,
    description text not null,
    stack text[] not null default '{}',
    sort_order int not null default 0
);

create table if not exists public.capabilities (
    id bigint generated always as identity primary key,
    label text not null,
    sort_order int not null default 0
);

create table if not exists public.contact_requests (
    id bigint generated always as identity primary key,
    name text not null,
    email text not null,
    phone text not null,
    language text not null,
    details text not null,
    created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.site_settings enable row level security;
alter table public.team_members enable row level security;
alter table public.brands enable row level security;
alter table public.featured_projects enable row level security;
alter table public.studio_projects enable row level security;
alter table public.services enable row level security;
alter table public.capabilities enable row level security;
alter table public.contact_requests enable row level security;

-- Public read policies for site content
drop policy if exists "public_read_site_settings" on public.site_settings;
create policy "public_read_site_settings" on public.site_settings
for select using (true);

drop policy if exists "public_read_team_members" on public.team_members;
create policy "public_read_team_members" on public.team_members
for select using (true);

drop policy if exists "public_read_brands" on public.brands;
create policy "public_read_brands" on public.brands
for select using (true);

drop policy if exists "public_read_featured_projects" on public.featured_projects;
create policy "public_read_featured_projects" on public.featured_projects
for select using (true);

drop policy if exists "public_read_studio_projects" on public.studio_projects;
create policy "public_read_studio_projects" on public.studio_projects
for select using (true);

drop policy if exists "public_read_services" on public.services;
create policy "public_read_services" on public.services
for select using (true);

drop policy if exists "public_read_capabilities" on public.capabilities;
create policy "public_read_capabilities" on public.capabilities
for select using (true);

-- Authenticated admins can update settings
drop policy if exists "auth_write_site_settings" on public.site_settings;
create policy "auth_write_site_settings" on public.site_settings
for all to authenticated using (true) with check (true);

-- Public contact submissions
drop policy if exists "public_insert_contact_requests" on public.contact_requests;
create policy "public_insert_contact_requests" on public.contact_requests
for insert with check (true);

drop policy if exists "auth_read_contact_requests" on public.contact_requests;
create policy "auth_read_contact_requests" on public.contact_requests
for select to authenticated using (true);

-- Seed team
insert into public.team_members (name, role, image_url, linkedin_url, github_url, instagram_url, sort_order)
values
('Raviprakash Patel', 'Founder & Architect', '/team/Raviprakash.png', 'https://www.linkedin.com/in/raviprakash-patel-122690302/', 'https://github.com/REESHI111', 'https://www.instagram.com/rishi_2027_/', 1),
('Kush Kundariya', 'AI Engineer', '/team/kush.png', 'https://www.linkedin.com/in/kush-kundariya-6993ab286/', 'https://github.com/kush90811', 'https://www.instagram.com/kushkundariya/', 2),
('Prince Sikotra', 'ML Engineer', '/team/prince.png', 'https://www.linkedin.com/in/prince-sikotra-4a786a266/', 'https://github.com/prisik-45', 'https://www.instagram.com/_prisik_.45/', 3),
('Abhishek Mitra', 'AI-ML Developer', '/team/abhishek.png', 'https://www.linkedin.com/in/abh1shek-mitra/', 'https://github.com/abhish4k-467', 'https://www.instagram.com/abh1sh4k__/', 4),
('Mayur Patil', 'HR & Web Engineer', '/team/Mayur.png', 'https://www.linkedin.com/in/mayur-patil-345b85264/', 'https://github.com/Mjpatil077', 'https://www.instagram.com/mayurpatil3807/', 5),
('Shrey Desai', 'Media Head & Dev', '/team/shrey.png', 'https://www.linkedin.com/in/shrey-desai-223aa6209/', '#', 'https://www.instagram.com/shreydesai_1612/', 6)
on conflict do nothing;

insert into public.brands (name, image_url, sort_order)
values
('Affinitty', '/logos/Affinitty.jpg', 1),
('Elisium', '/logos/Elisium.png', 2),
('Quikit', '/logos/Quikit.png', 3),
('Cognosync', '/logos/cognosync.png', 4),
('Autonomerz', '/logos/Autonomerz.png', 5)
on conflict do nothing;

insert into public.featured_projects (title, category, year_label, image_url, color_class, sort_order)
values
('Project Alpha', 'Classified', 'Coming Soon', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', 'bg-zinc-900', 1),
('Project Beta', 'Classified', 'Coming Soon', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop', 'bg-neutral-900', 2),
('Project Gamma', 'Classified', 'Coming Soon', 'https://images.unsplash.com/photo-1635773054098-9caeb584c599?q=80&w=2565&auto=format&fit=crop', 'bg-stone-900', 3)
on conflict do nothing;

insert into public.studio_projects (title, category, year_label, image_url, color_class, col_span_class, aspect_class, sort_order)
values
('Aura Protocol', 'DeFi Architecture', '2026', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', 'bg-zinc-900', 'md:col-span-8', 'aspect-[16/9]', 1),
('Nexus OS', 'System Interface', '2025', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop', 'bg-neutral-900', 'md:col-span-4', 'aspect-[3/4]', 2),
('Vanguard Labs', 'Digital Strategy', '2025', 'https://images.unsplash.com/photo-1635773054098-9caeb584c599?q=80&w=2565&auto=format&fit=crop', 'bg-stone-900', 'md:col-span-6', 'aspect-square', 3),
('Echo Commerce', 'E-com Infrastructure', '2024', 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop', 'bg-zinc-950', 'md:col-span-6', 'aspect-[4/3]', 4)
on conflict do nothing;

insert into public.services (category, description, stack, sort_order)
values
('System Architecture', 'Designing resilient, scalable infrastructures for modern web applications.', '{"Next.js","Node.js","Supabase","AWS"}', 1),
('Product Engineering', 'End-to-end full stack development of complex digital platforms with absolute precision.', '{"React","TypeScript","Tailwind CSS","Framer Motion"}', 2),
('UI/UX Strategy', 'Architecting user interfaces designed to dominate markets and convert high-ticket leads.', '{"Figma","Design Systems","Prototyping","WebGL"}', 3)
on conflict do nothing;

insert into public.capabilities (label, sort_order)
values
('Web Design', 1),
('App Development', 2),
('AI-ML Solutions', 3),
('Agentic Solutions', 4),
('Next.js 14+', 5),
('Full-Stack Execution', 6),
('Motion Design', 7),
('WebGL', 8),
('UI/UX Strategy', 9),
('Performance Optimization', 10),
('Cloud Infrastructure', 11),
('Product Design', 12),
('Social Media Services', 13)
on conflict do nothing;
