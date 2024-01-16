// require 'fs' and 'inquirer' to use those programs //
let fs = require('fs');
let inquirer = require('inquirer');
// require data from the shapes.js and questions.js to populate function below //
let questions = require('./lib/questions');
// descructuring the variable to pull in circle/triangle/square functions/classes used below //
let { Circle, Triangle, Square } = require('./lib/shapes');

// Initiate the inquirer prompt and SVG logo maker//
let generateSVG = () => {
    inquirer.prompt(questions)
        .then((data) => {
            // Console log to see if prompt is initiated and data is obtained //
            console.log('SVG file being created...');
            // Create a switch and case scenario to cycle through depending on data.shape selected //
            // Add a break at the end to show that function for the specific case is done //
            switch (data.shape) {
                case 'circle':
                    // Console log to ensure the correct shape that was chosen is put through the function //
                    console.log('Circle was chosen...');
                    // Create new variable for circle using "new Circle" //
                    let circle = new Circle(data.text, data.textColor, data.shape, data.shapeColor)
                    // Write selections/data to logo.svg file. console the error, or console.log that the logo is generated //
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

// Have funciton initiate when node index.js is entered in command line //
generateSVG();