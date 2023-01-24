---> Products Info <---
create table products_pctech (
    product_id serial primary key,
    pd_description: varchar(250),
    price: int,
    pc_name varchar(250),
    os varchar(100),
    qty varchar(250),
    cpu varchar(250),
    graphic_card varchar(250),
    ram varchar(250),
    motherboard varchar(250),
    storage varchar(250),
    pd_type varchar(20),
    pic_1 varchar(250),
    pic_2 varchar(250),
    pic_3 varchar(250),
    pic_4 varchar(250),
    pic_5 varchar(250),
);

-- ---> Pictures  <---
-- create table pic_pctech (
--     pic_id serial primary key,
--     product_id int REFERENCES products_pctech(product_id),
--     pic_1 varchar(250),
--     pic_2 varchar(250),
--     pic_3 varchar(250),
--     pic_4 varchar(250),
--     pic_5 varchar(250),
-- );

--->  Cart  <---
create table cart_pctech (
    cart_id serial primary key,
    product_id int,
    qty int
);

--->  User  <---
create table users (
    user_id serial primary key,
    firstName varchar(250),
    lastName varchar(100),
    email varchar(250),
    state varchar(250),
    street varchar(250),
    country varchar(250),
    zipCode int
);