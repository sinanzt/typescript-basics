let bool: boolean = true;

// bool = 1; // Error: Type '1' is not assignable to type 'boolean'.

let num: number = 1;
// num = true; // Error: Type 'true' is not assignable to type 'number'.

let str: string = 'string';
// str = 1; // Error: Type '1' is not assignable to type 'string'.

let obj: object = {};
// obj = 1; // Error: Type '1' is not assignable to type 'object'.

let strOrNum: string | number = 'string';
strOrNum = 1;
// strOrNum = true; // Error: Type 'true' is not assignable to type 'string | number'.

let any: any = {};
any = 1;
any = 'string';
any = true;

// Array
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// Tuple
let tuple: [boolean, number, string] = [true, 1, '2'];

// Function
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// Object
let obj1: object = { x: 1, y: 2 };
let obj2: { x: number; y: number } = { x: 1, y: 2 };

// undefined, null
let un: undefined = undefined;
let nu: null = null;

// void
let noReturn = () => { };

// any
let x;
x = 1;
x = [];
x = () => { };

// never
let error = () => {
    throw new Error('error');
}

let endlessLoop = () => {
    while (true) { }
}

let endless = () => {
    while (true) { }
}