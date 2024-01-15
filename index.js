// require 'fs' and 'inquirer' to use those programs //
let fs = require('fs');
let inquirer = require('inquirer');
// require data from the shapes.js and questions.js to populate function below //
let questions = require('./lib/questions');
// descructuring the variable to pull in circle/triangle/square features used below //
let {Circle, Triangle, Square} = require('./lib/shapes');

