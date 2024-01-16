// Import code from shapes.js that we are testing //
let {Shapes, Circle, Triangle, Square} = require('./shapes');

// Utilize code from Module-10 Activties (Passing Test) as template //
// Also set up "test: jest" and link file in the package.json to be able to run npm test //
describe('Shapes', () => {
    // This will test the text rendered for all the logos //
    describe('logoText', () => {
        it('should return the characters (up to 3) for your logo', () => {
            const shapes = new Shapes('ABC', '#3358FF', 'circle', '#FF9F33');
            expect(shapes.createText()).toEqual(`<text x="150" y="100" font-size="50" font-weight="100" dominant-baseline="middle" text-anchor="middle" fill="#3358FF">ABC</text>`);
        });
    });
    // This will test the variables created in the Shapes class //
    describe('shapeInputs', () => {
        it('should return the correct shape data inputs from the command-line', () => {
            const shapes = new Shapes('ABC', '#3358FF', 'circle', '#FF9F33');
            expect(shapes.text).toBe('ABC');
            expect(shapes.textColor).toBe('#3358FF');
            expect(shapes.shape).toBe('circle');
            expect(shapes.shapeColor).toBe('#FF9F33');
        });
    });
});

// Copy similar input tests for circle since it effectively using the same inputs and functions as parent Shapes //
// Also test the shape dimensions and fill instead of the text input (since text is tested above. //
describe('Circle', () => {
    // This will test the text rendered for all the logos //
    describe('circleLogo', () => {
        it('should return the circle with proper dimensions/design and text', () => {
            const circle = new Circle('ABC', '#3358FF', 'circle', '#FF9F33');
            expect(circle.createCircle()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="#FF9F33"/>
    <text x="150" y="100" font-size="50" font-weight="100" dominant-baseline="middle" text-anchor="middle" fill="#3358FF">ABC</text>
    </svg>`);
        });
    });
    // This will test the variables created in the Shapes class //
    describe('circleInputs', () => {
        it('should return the correct circle data inputs from the command-line', () => {
            const circle = new Circle('ABC', '#3358FF', 'circle', '#FF9F33');
            expect(circle.text).toBe('ABC');
            expect(circle.textColor).toBe('#3358FF');
            expect(circle.shape).toBe('circle');
            expect(circle.shapeColor).toBe('#FF9F33');
        });
    });
});

// Triangle test //
describe('Triangle', () => {
    describe('triangleLogo', () => {
        it('should return the triangle with proper dimensions/design and text', () => {
            const triangle = new Triangle('ABC', '#3358FF', 'triangle', '#FF9F33');
            expect(triangle.createTriangle()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 0,200 300,200" fill="#FF9F33"/>
    <text x="150" y="100" font-size="50" font-weight="100" dominant-baseline="middle" text-anchor="middle" fill="#3358FF">ABC</text>
    </svg>`);
        });
    });
    describe('triangleInputs', () => {
        it('should return the correct triangle data inputs from the command-line', () => {
            const triangle = new Triangle('ABC', '#3358FF', 'triangle', '#FF9F33');
            expect(triangle.text).toBe('ABC');
            expect(triangle.textColor).toBe('#3358FF');
            expect(triangle.shape).toBe('triangle');
            expect(triangle.shapeColor).toBe('#FF9F33');
        });
    });
});

// Square test //
describe('Square', () => {
    describe('squareLogo', () => {
        it('should return the square with proper dimensions/design and text', () => {
            const square = new Square('ABC', '#3358FF', 'square', '#FF9F33');
            expect(square.createSquare()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="0" width="200" height="200" fill="#FF9F33"/>
    <text x="150" y="100" font-size="50" font-weight="100" dominant-baseline="middle" text-anchor="middle" fill="#3358FF">ABC</text>
    </svg>`);
        });
    });
    describe('squareInputs', () => {
        it('should return the correct square data inputs from the command-line', () => {
            const square = new Square('ABC', '#3358FF', 'square', '#FF9F33');
            expect(square.text).toBe('ABC');
            expect(square.textColor).toBe('#3358FF');
            expect(square.shape).toBe('square');
            expect(square.shapeColor).toBe('#FF9F33');
        });
    });
});