## CORE Web

Next.js frontend connected to Supabase for site content, contact submissions, and admin controls.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example` and fill:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

3. Run SQL from [`supabase/schema.sql`](./supabase/schema.sql) in your Supabase SQL editor.
4. In Supabase Auth, create an admin user (email/password).
5. Start dev server:

```bash
npm run dev
```

App runs on `http://localhost:6969`.

## Admin

- Visit `/admin`
- Sign in with Supabase Auth credentials
- Toggle Leadership section visibility and save

## Supabase-backed Content

Hardcoded arrays were replaced by Supabase tables:

- `site_settings`
- `team_members`
- `brands`
- `featured_projects`
- `studio_projects`
- `services`
- `capabilities`
- `contact_requests`

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
