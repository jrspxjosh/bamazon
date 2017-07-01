
SHOW DATABASES;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE departments (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
department_name VARCHAR(30) NOT NULL,
over_head_costs DECIMAL(10,2),
PRIMARY KEY (id)
);

CREATE TABLE products ( 
id INTEGER(11) AUTO_INCREMENT NOT NULL, 
product VARCHAR(30) NOT NULL,
department_id INTEGER(11) NOT NULL, 
price DECIMAL(10,2) NOT NULL, 
stock_quantity INTEGER(11) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(department_id) references departments(id)
);

CREATE TABLE sales (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_id INTEGER(11) NOT NULL, 
quantity_purchased INTEGER(11) NOT NULL,
created_at DATETIME,
PRIMARY KEY (id),
FOREIGN KEY(product_id) references products(id)
);





