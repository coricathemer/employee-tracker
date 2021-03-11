const connection = require('./connection');

class DB {
  constructor(connection) {
    this.connection = connection;
  }


  viewDepartments() {
    return this.connection.promise().query(
      'SELECT id, dept_name FROM departments'
      );
  }

  viewRoles() {
    return this.connection.promise().query(
      'SELECT id, title, salary, department_id FROM employeeDB.positons'
    );
  }

  viewEmployees() {
    return this.connection.promise().query(
      'SELECT * FROM employeeDB.employees'
    );
  }

  addDept(department) {
    return this.connection.promise().query(
      'INSERT INTO departments SET ?',
      {
        name: department
      }
    );
  }
   
  addRole(role, salary, department_id) {
    return this.connection.promise().query(
      'INSERT INTO roles SET ?',
      {
        title: role, 
        salary: salary,
        deoartment_id: department_id
      }
    );
  }
   
  addEmployee(first_name, last_name, role_id, manager_id) {
    return this.connection.promise().query(
      'INSERT INTO employees SET ?',
      {
        first_name: first_name,
        last_name: last_name, 
        role_id: role_id,
        manager_id: manager_id,
      }
    );
  }
   
  updateEmployee(role_id, employee_id) {
    return this.connection.promise().query(
      'UPDATE employees SET ? WHERE ?', 
      [
        {
          role_id: role_id
        },
        {
          id: employee_id,
        }
      ]
    );
  }
}
module.exports = new DB(connection); 