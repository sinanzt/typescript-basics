// Return Type
function add(n1: number, n2: number): number {
    return n1 + n2;
}

// Void
function log(message: string): void {
    console.log(message);
}

// Parameters
function multiply(a: number, b: number) {
    return a * b;
}

// Optional Parameters
function buildName(firstName: string, lastName?: string) {
    if (lastName) return `${firstName} ${lastName}`;
    else return firstName;
}

// Default Parameters
function buildName1(firstName: string, lastName = 'Smith') {
    return `${firstName} ${lastName}`;
}

// Named Parameters
function add1({ a, b }: { a: number; b: number }) {
    return a + b;
}


// Rest Parameters
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ');
}

// Type Aliases
type Point = {
    x: number;
    y: number;
};

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;