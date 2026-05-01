-- Seed transactions data
insert into transactions (taxpayer_id, type, amount, status, reference)
select id, 'Income Tax', 1250.00, 'completed', 'TRX-001' from taxpayers where tin = '123-45-6789'
on conflict do nothing;

insert into transactions (taxpayer_id, type, amount, status, reference)
select id, 'VAT', 3400.00, 'completed', 'TRX-002' from taxpayers where tin = '987-65-4321'
on conflict do nothing;

insert into transactions (taxpayer_id, type, amount, status, reference)
select id, 'Corporate Tax', 15200.00, 'pending', 'TRX-003' from taxpayers where tin = '11-222-3333'
on conflict do nothing;

insert into transactions (taxpayer_id, type, amount, status, reference)
select id, 'Income Tax', 890.00, 'completed', 'TRX-004' from taxpayers where tin = '444-55-6666'
on conflict do nothing;

insert into transactions (taxpayer_id, type, amount, status, reference)
select id, 'Property Tax', 2100.00, 'failed', 'TRX-005' from taxpayers where tin = '222-33-4444'
on conflict do nothing;

insert into transactions (taxpayer_id, type, amount, status, reference)
select id, 'Corporate Tax', 8750.00, 'pending', 'TRX-006' from taxpayers where tin = '55-666-7777'
on conflict do nothing;
