// require 'fs' and 'inquirer' to use those programs //
let fs = require('fs');
let inquirer = require('inquirer');
// require data from the shapes.js and questions.js to populate function below //
let questions = require('./lib/questions');
// descructuring the variable to pull in circle/triangle/square features used below //
let {Circle, Triangle, Square} = require('./lib/shapes');

// Initiate the questions and SVG logo maker//

let init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            console.log('SVG file being created...');
            switch (data.shape) {
                case 'circle':
                    console.log('Circle was chosen...');
                    let circle = new Circle(data.text, data.textColor, data.shape, data.shapeColor)
                    fs.writeFile("examples/logo.svg", circle.createCircle(), (err) => 
                        err ? console.error(err) : console.log('Generated logo.svg!')
                        );
                    break;
                case 'triangle':
                    console.log('Triangle was chosen...');
                    let triangle = new Triangle(data.text, data.textColor, data.shape, data.shapeColor)
                    fs.writeFile("examples/logo.svg", triangle.createTriangle(), (err) =>
                        err ? console.error(err) : console.log('Generated logo.svg!')
                        );
                    break;
                case 'square':
                    console.log('Square was chosen...');
                    let square = new Square(data.text, data.textColor, data.shape, data.shapeColor)
                    fs.writeFile("examples/logo.svg", square.createSquare(), (err) =>
                    err ? console.error(err) : console.log('Generated logo.svg!')
                    );
                    break;
            }
        });
}

init();