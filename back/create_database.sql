CREATE OR REPLACE DATABASE product_management;
CREATE OR REPLACE TABLE product_management.category(
	id INT AUTO_INCREMENT,
	name VARCHAR(128) NOT NULL,
	PRIMARY KEY(id)
);
CREATE OR REPLACE TABLE product_management.product(
	id INT AUTO_INCREMENT,
	name VARCHAR(60),
	category INT REFERENCES category(id),
	price NUMERIC,
	serie INT,
	PRIMARY KEY(id)
);