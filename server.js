const inquirer = require('inquirer');
const table = require('console.table');
// const connection = require('./db/connection');

function mainMenu(){
  //startup menu 

  inquirer.prompt(
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
  )

  .then(userChoice => {
    switch(userChoice.choice){
      case 'View Department':
        viewDept();
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
}

connection.query(
  'SELECT * FROM departments',
    function viewDept(err, results, fields) { 
      if(err) throw err, 
      console.log(results);
      console.log(fields);
      console.log(viewDept);
  }
);

function viewRoles() {
}

function viewEmployees() {
}

function addDept() {
}

function addRole() {
}

function addEmployee() {
}

function updateEmployee() {
}

mainMenu()
// with placeholder
// connection.query(
//   'SELECT * FROM `employees` WHERE `employees` = ? AND `id` > ?',
//   ['Kylo', 3],
//   function(err, results) {
//     console.log(results);
//   }
// );