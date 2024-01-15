// require 'fs' and 'inquirer' to use those programs //
let fs = require('fs');
let inquirer = require('inquirer');
// require data from the shapes.js and questions.js to populate function below //
let questions = require('./lib/questions');
// descructuring the variable to pull in circle/triangle/square features used below //
let {Circle, Triangle, Square} = require('./lib/shapes');

// Initiate the questions and SVG logo maker//

let generateLogo = () => {
    inquirer.prompt(questions)
        .then((data) => {
            switch (`${data.shape}`) {
                case 'Circle':
                    let circle = new Circle(data.text, data.textColor, data.shapeColor)
                    fs.writeFile("examples/logo.svg", circle.createCircle(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Circle logo has been made!');
                        }
                    });
                    break;
                case 'Triangle':
                    let triangle = new Triangle(data.text, data.textColor, data.shapeColor)
                    fs.writeFile("examples/logo.svg", triangle.createTriangle(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Triangle logo has been made!');
                        }
                    });
                    break;
                case 'Square':
                    let square = new Square(data.text, data.textColor, data.shapeColor)
                    fs.writeFile("examples/logo.svg", square.createSquare(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Square logo has been made!');
                        }
                    });
                    break;
            }
        });
}

generateLogo();