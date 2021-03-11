const { prompt } = require('inquirer');
require('console.table');
const db = require('./db');


// db.viewDepartments()
// .then(departments => 
//   console.log(departments)
//   );
// db.viewRoles()
// .then(roles => 
//   console.log(roles)
//   );
// db.viewEmployees()
// .then(employees => 
//   console.log(employees)
//   );

const initialQuestion = [
  {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      {name: 'View all departments', value: 'viewDept'},
      {name: 'View all roles', value: 'viewRoles'},
      {name: 'View all employees', value: 'viewEmployees'},
      {name: 'Add department', value: 'addDept'},
      {name: 'Add a role', value: 'addRole' },
      {name: 'Add an employee', value: 'addEmployee'},
      {name: 'Update and employee role', value: 'updateEmployee'}

    ]

  }
]
prompt(initialQuestion)
.then(userChoice => {
  switch(userChoice.choice){
    case 'View Department':
      viewDepartments();
      console.log('You chose to viewDept')
      break;
    case 'viewRoles':
      viewRoles();
      break;
    case 'viewEmployees':
      viewEmployees();
      break;
    case 'addDept':
      addDept();
      break;
    case 'addRole':
      addRole();
      break;
    case 'addEmployee':
      addEmployee();
      break;
    case 'updateEmployee':
      updateEmployee();
      break;
  }
})

  function viewDepartments() {
    db.viewDepartments()
    .then(departments =>
      console.log(departments[0])
      );
  }
  function viewRoles() {
    db.viewRoles()
    .then(positions => 
      console.log(positions[0])
      );
  } 
  function viewEmployees() {
    db.viewEmployees()
    .then(employees =>
      console.table(employees[0])
      );
    }
    
    // employees.forEach(employee => {
    //   console.log(`ID: ${employee.id} | NAME: ${employee.first_name} ${employee.last_name} | Role ID: ${employee.role_id} | Manager ID: ${employee.manger_id}`);
    // })