-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Taxpayers table
create table if not exists taxpayers (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default now(),
  name text not null,
  tin text unique not null,
  status text not null check (status in ('active', 'under_review', 'inactive')) default 'active',
  balance numeric(12,2) not null default 0,
  email text not null
);

-- Transactions table
create table if not exists transactions (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default now(),
  taxpayer_id uuid references taxpayers(id) on delete cascade not null,
  type text not null,
  amount numeric(12,2) not null check (amount >= 0),
  status text not null check (status in ('completed', 'pending', 'failed')) default 'pending',
  reference text not null
);

-- Row Level Security
alter table taxpayers enable row level security;
alter table transactions enable row level security;

-- Anyone can read taxpayers and transactions (adjust for real auth later)
create policy "Taxpayers are viewable by everyone"
  on taxpayers for select
  using (true);

create policy "Transactions are viewable by everyone"
  on transactions for select
  using (true);

-- Only authenticated users can insert/update/delete (placeholder for now)
create policy "Taxpayers can be managed by authenticated users"
  on taxpayers for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Transactions can be managed by authenticated users"
  on transactions for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Seed data
insert into taxpayers (name, tin, status, balance, email) values
  ('John Smith', '123-45-6789', 'active', 2450.00, 'john.smith@email.com'),
  ('Jane Doe', '987-65-4321', 'active', 0.00, 'jane.doe@email.com'),
  ('ABC Corp', '11-222-3333', 'under_review', 15200.00, 'billing@abccorp.com'),
  ('Bob Wilson', '444-55-6666', 'active', 890.00, 'bob.wilson@email.com'),
  ('XYZ LLC', '77-888-9999', 'inactive', 0.00, 'admin@xyzllc.com'),
  ('Sarah Johnson', '222-33-4444', 'active', 3100.00, 'sarah.j@email.com'),
  ('Tech Solutions Inc', '55-666-7777', 'under_review', 8750.00, 'ap@techsolutions.com'),
  ('Mike Davis', '888-99-0000', 'active', 125.00, 'mike.davis@email.com')
on conflict (tin) do nothing;
