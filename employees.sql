CREATE TABLE employees(
id serial PRIMARY KEY,
first_name VARCHAR(80) NOT NULL, 
last_name VARCHAR(80) NOT NULL, 
job_title VARCHAR(80) NOT NULL, 
annual_salary INT NOT NULL);

SELECT * FROM employees;

INSERT INTO employees(first_name, last_name, job_title, annual_salary)
VALUES ('Michael', 'Scott', 'Regional Manager', 78000),
('Dwight', 'Schrute', 'Assistant to the Assistant to the Regional Manager', 52500),
('Jim', 'Halpert', 'Sales Representative', 45000),
('Pam', 'Beesly', 'Receptionist', 37000),
('Toby', 'Flenderson', 'Human Resources', 50000);
