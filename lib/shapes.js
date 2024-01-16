// Create a parent class for Shapes //
// Utilized code from constructor class activity in Module-10 //
// Add substring to text to limit characters to 3 if user types more //
class Shapes {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text.substring(0, 3);
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    // Create a text object using "this" color and text from constructor above. Pre-set size and weight to display in shape //
    // Utilized MDN Test-SVG website from Module resources to determine text format/style //
    // Function in parent allows it to be repeated in the children classes //
    createText() {
        return `<text x="150" y="100" font-size="50" font-weight="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

// Extend parent Shapes class to Circle class //
// Add function to set up size and fill in the svg element //
class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

    // Used MDN code for SVG shapes and SVG codepen to test out dimensions //
    createCircle() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>
    ${super.createText()}
    </svg>`;
    }
}

// Copy similar function for Traingle and Square //
// Triangle is actually a pologon with specific points // 
class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }


    createTriangle() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 0,200 300,200 fill="${this.shapeColor}"/>
    ${super.createText()}
    </svg>`;
    }
}

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

    createSquare() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>
    ${super.createText()}
    </svg>`;
    }
}

// To export multiple functions put in {} //
module.exports = { Shapes, Circle, Triangle, Square };
