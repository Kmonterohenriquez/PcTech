---> Product Info <---
create table product_pctech (
    product_id serial primary key,
    pc_name varchar(250),
    os varchar(100),
    cpu varchar(250),
    graphic_card varchar(250),
    ram varchar(250),
    motherboard varchar(250),
    storage varchar(250),
    type varchar(20)
);

---> Picture  <---
create table pic_pctech (
    pic_id serial primary key,
    product_id int REFERENCES product_pctech(product_id),
    pic_1 varchar(250),
    pic_2 varchar(250),
    pic_3 varchar(250),
    pic_4 varchar(250),
)


--->  Cart  <---
create table cart_pctech (
    cart_id serial primary key,
    product_id int REFERENCES product_pctech(product_id)
)