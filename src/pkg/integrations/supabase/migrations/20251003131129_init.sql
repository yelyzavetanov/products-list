-- create schemas
create schema if not exists business;
create schema if not exists content;

-- create table order_options in business
create table if not exists business.order_options (
  id text primary key,
  option text
);

-- fill order_options table with data
insert into business.order_options (id, option) values
  ('1', 'Direct'),
  ('2', 'Reverse');
