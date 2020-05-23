create table products_pctech (
    product_id serial primary key,
    pc_name varchar(250),
    os varchar(100),
    cpu varchar(250),
    graphic_card varchar(250),
    ram varchar(250),
    motherboard varchar(250),
    storage varchar(250),
    product_pic text,
    type varchar(20)
);
