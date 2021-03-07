const inquirer = require('inquirer');
const table = require('console.table');
const connection = require('./db/connection');


 
// with placeholder
connection.query(
  'SELECT * FROM `employees` WHERE `employees` = ? AND `id` > ?',
  ['Kylo', 3],
  function(err, results) {
    console.log(results);
  }
);
