
USE bamazon_db;

INSERT INTO departments (department_name, over_head_costs) VALUES ('Shoes', 100);
INSERT INTO departments (department_name, over_head_costs) VALUES ('Clothing', 100);
INSERT INTO departments (department_name, over_head_costs) VALUES ('Accessories', 100);


INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Boots', 1, 40.00, 100);
INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Sandals', 1, 20.00, 100);
INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Sneakers', 1, 30.00, 100);
INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Flip Flops', 1, 10.00, 100);


INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Pants', 2, 25.00, 100);
INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Shirts', 2, 20.00, 100);
INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Shorts', 2, 15.00, 100);

INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Belts', 3, 10.00, 100);
INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Handbags', 3, 15.00, 100);
INSERT INTO products (product, department_id, price, stock_quantity) VALUES ('Scarf', 3, 15.00, 100);

-- INSERT INTO sales (product_id, quantity_purchased, created_at) VALUES (, , NOW());
