DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE departments (
  id INT PRIMARY KEY
  dept_name VARCHAR(30)
);

CREATE TABLE positions (
  id INT PRIMARY KEY
  title VARCHAR(30)
  salary DECIMAL 
  department_id INT
);

CREATE TABLE employees (
  id INT PRIMARY KEY
  first_name VARCHAR(30)
  last_name VARCHAR(30)
  role_id INT
  manager_id INT
);