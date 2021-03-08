INSERT INTO departments (dept_name)
VALUES
('Managers'),
('Developers'),
('Interns'),
('Sales'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
('Manager', '150000', '1'),
('Senior Developer', '100000', '2'),
('Junior Developer', '75000', '3'),
('Intern', '30000', '4'),
('Sales Lead', '80000', '5'),
('Sales', '65000', '6');


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Luke', 'Skywalker', '1', NULL),
('Rick', 'Grimes', '2', '5'),
('Kylo', 'Ren', '3', NULL), 
('John', 'Doe', '4', '3');