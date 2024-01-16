// test run from LitLab//
//const shape = new Triangle();
//shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

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
        it('should return the proper shape with proper dimensions/design and text', () => {
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
