const Action = require('./action');
const inquirer = require('inquirer');
const Function = require('./function');
var prompt = require('prompt');
Action.Figlet('Todo App')
var list = [];
const fs = require('fs');
var questions = [{
  name: 'Operations',
  type: 'list',
  message: 'Which operation do you want to do',
  choices: ['Add Item', 'Remove Item', 'Search Item'],
}]
inquirer.prompt(questions).then((answers) => {
  if (answers.Operations == 'Add Item') {
    Function.addItem();
  }
  else if (answers.Operations == 'Remove Item') {
    Function.removeItem();
  }
  else if (answers.Operations == 'Search Item') {
    Function.searchItem();
  }
});