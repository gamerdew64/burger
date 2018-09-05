-- Deleting database
-- DROP DATABASE IF EXISTS burgers_db;

-- Create database
CREATE DATABASE burgers_db;

-- Using the database that was just created
USE burgers_db;

-- Create the table wishes.
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name varchar(75) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);
