-- Enable Row Level Security on business.order_options
alter table business.order_options enable row level security;

-- Optional but recommended: force RLS even for superusers
alter table business.order_options force row level security;

-- Allow everyone to read from the table
create policy "Allow read access to everyone"
on business.order_options
for select
using (true);
