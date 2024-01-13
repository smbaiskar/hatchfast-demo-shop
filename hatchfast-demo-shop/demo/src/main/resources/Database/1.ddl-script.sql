--POSTGRESQL 

--customer table


--Table: public.customer

DROP TABLE IF EXISTS public."customer" CASCADE;

CREATE TABLE IF NOT EXISTS public."customer"
(
    customer_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    fname character varying(20) COLLATE pg_catalog."default" NOT NULL,
    lname character varying(20) COLLATE pg_catalog."default" NOT NULL,
    user_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    password character varying(15) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "customer_pkey" PRIMARY KEY (customer_id)
)

;

ALTER TABLE IF EXISTS public."customer"
    OWNER to postgres;


--2.product table


--Table: public.product

DROP TABLE IF EXISTS public."product" CASCADE;

CREATE TABLE IF NOT EXISTS public."product"
(
    product_id integer NOT NULL,
    product_name character varying COLLATE pg_catalog."default" NOT NULL,
    price numeric(10,2) NOT NULL,
    description character varying(255) COLLATE pg_catalog."default" NOT NULL,
    image bytea NOT NULL,
    CONSTRAINT "product_pkey" PRIMARY KEY (product_id)
)

;

ALTER TABLE IF EXISTS public."product"
    OWNER to postgres;


   
--3.Cart



--Table: public.cart

DROP TABLE IF EXISTS public.cart CASCADE;

CREATE TABLE IF NOT EXISTS public.cart
(
    cart_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    product_id integer NOT NULL,
    customer_id integer NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT cart_pkey PRIMARY KEY (cart_id),
    CONSTRAINT cart_customer_id_fkey FOREIGN KEY (customer_id)
        REFERENCES public."customer" (customer_id) MATCH simple
        
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT cart_product_id_fkey FOREIGN KEY (product_id)
        REFERENCES public."product" (product_id) MATCH simple
        
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

;

ALTER TABLE IF EXISTS public.cart
    OWNER to postgres;


   
--4.Order

--Table: public.order

DROP TABLE IF EXISTS public."order" CASCADE;

CREATE TABLE IF NOT EXISTS public."order"
(
    order_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    customer_id integer NOT NULL,
    order_total numeric(10,2) NOT NULL,
    first_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    zipcode integer NOT NULL,
    tax numeric(10,2) NOT NULL,
    total_after_tax numeric(10,2) NOT NULL,
    CONSTRAINT order_pkey PRIMARY KEY (order_id),
    CONSTRAINT order_customer_id_fkey FOREIGN KEY (customer_id)
        REFERENCES public."customer" (customer_id) MATCH simple
        
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

;

ALTER TABLE IF EXISTS public."order"
    OWNER to postgres;


--5.Order_Item


--Table: public.order_item

DROP TABLE IF EXISTS public.order_item CASCADE;

CREATE TABLE IF NOT EXISTS public.order_item
(
    order_item_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    order_id integer NOT NULL,
    discounted_price numeric(10,2) NOT NULL,
    product_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    product_description character varying(255) COLLATE pg_catalog."default" NOT NULL,
    price numeric(10,2) NOT NULL,
    CONSTRAINT order_item_pkey PRIMARY KEY (order_item_id),
    CONSTRAINT orderitems_orderid_fkey FOREIGN KEY (order_id)
        REFERENCES public."order" (order_id) MATCH simple
        
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

;

ALTER TABLE IF EXISTS public.order_item
    OWNER to postgres;
    