# UGPAY - Deployment Guide

## 1. Set Up Supabase

### Create Project
1. Go to https://supabase.com and click **Start your project**
2. Sign in with GitHub/Google
3. Click **New project**
4. Choose your organization (or create one)
5. Fill in:
   - **Database password**: Create a strong password (save it!)
   - **Region**: Choose closest to your users (e.g., US East)
   - **Project name**: `ugpay`
6. Click **Create new project** (takes ~2 minutes)

### Run Migrations
1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **New query**
3. Open `supabase/migrations/001_initial_schema.sql` from this project
4. Paste the entire contents into the SQL editor
5. Click **Run** (bottom right)
6. Repeat for `supabase/migrations/002_seed_transactions.sql`

### Configure Auth (Optional - for real auth)
1. Go to **Authentication** → **Providers**
2. Enable **Email** (already enabled by default)
3. Disable **Confirm email** (for development):
   - Go to **Authentication** → **Providers** → **Email**
   - Toggle off **Confirm email**
4. Set up demo users:
   - Go to **Authentication** → **Users** → **Add user** → **Create new user**
   - Create `admin@ugpay.gov` with password `demo123`

### Get API Keys
1. Go to **Settings** (gear icon) → **API**
2. Copy the following values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...`

## 2. Configure Environment Variables

### Local Development
```bash
cd app
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

> **Note**: Leave these variables empty to run in demo mode (simulated auth, no database).

### Vercel Deployment
1. Go to https://vercel.com and sign in
2. Import your repository
3. In **Environment Variables**, add:
   - `VITE_SUPABASE_URL` → your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` → your Supabase anon key
4. Click **Deploy**

## 3. Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Set the **Root Directory** to `app`
5. Add environment variables (Step 2)
6. Click **Deploy**

### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy from the app directory
cd app
vercel

# For production
vercel --prod
```

## 4. Verify Deployment

1. Visit your Vercel URL (e.g., `https://ugpay.vercel.app`)
2. Log in with demo credentials:
   - Email: `admin@ugpay.gov`
   - Password: `demo123`
3. Verify Dashboard, Taxpayers, and Transactions pages load

## Project Structure

```
├── app/                          # Frontend (deployed to Vercel)
│   ├── src/
│   │   ├── lib/supabase.ts       # Supabase client
│   │   ├── stores/auth-store.ts  # Auth state (Supabase + demo)
│   │   ├── hooks/use-supabase-auth.ts
│   │   ├── types/database.ts     # Supabase-generated types
│   │   └── pages/                # Page components
│   ├── vercel.json               # Vercel config
│   └── .env.example              # Environment template
└── supabase/
    └── migrations/               # SQL migrations
        ├── 001_initial_schema.sql
        └── 002_seed_transactions.sql
```

## Demo Mode (No Supabase)

If Supabase env vars are not set, the app runs in demo mode:
- Authentication uses hardcoded demo users
- Data is displayed from static arrays in page components
- No database operations

This is useful for development and demos without a backend.
