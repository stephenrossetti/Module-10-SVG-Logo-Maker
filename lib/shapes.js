// Create a parent class for Shapes //
// Utilized code from constructor class activity in Module-10 //
class Shapes {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

// Create a text object using "this" color and text from constructor above. Pre-set size and weight for easier display //
// Utilized MDN Test-SVG website from Module resources to determine text format //
createText() {
    return `<text x="100%" y="100%" font-size="30px" font-weight="700" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
}    
}

class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

createCircle() {
    return 
    `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
    ${super.createText()}
    </svg>`;
}
}

class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

// Used MDN code for SVG shapes and SVG codepen to test out dimensions //
createTriangle() {
    return 
    `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 0,200 300,200 stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
    ${super.createText()}
    </svg>`;
}
}

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

createSquare() {
    return 
    `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
    ${super.createText()}
    </svg>`;
}
}

module.exports = {Shapes, Circle, Triangle, Square};
