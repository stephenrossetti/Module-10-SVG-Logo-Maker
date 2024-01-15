// I utilized code from Module-9-README Generator Challenge to copy question format//
// Created an array with command-line questions and utilizes that information for the sample SVG logo//
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for your logo:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a text color for your logo (name or #):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for your logo::',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a shape color for your logo (name or #):',
    },
];

module.exports = questions;