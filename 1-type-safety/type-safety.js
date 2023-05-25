var bool = true;
// bool = 1; // Error: Type '1' is not assignable to type 'boolean'.
var num = 1;
// num = true; // Error: Type 'true' is not assignable to type 'number'.
var str = 'string';
// str = 1; // Error: Type '1' is not assignable to type 'string'.
var obj = {};
// obj = 1; // Error: Type '1' is not assignable to type 'object'.
var strOrNum = 'string';
strOrNum = 1;
// strOrNum = true; // Error: Type 'true' is not assignable to type 'string | number'.
var any = {};
any = 1;
any = 'string';
any = true;
// Array
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// Tuple
var tuple = [true, 1, '2'];
// Function
var add = function (x, y) { return x + y; };
var compute;
compute = function (a, b) { return a + b; };
// Object
var obj1 = { x: 1, y: 2 };
var obj2 = { x: 1, y: 2 };
// undefined, null
var un = undefined;
var nu = null;
// void
var noReturn = function () { };
// any
var x;
x = 1;
x = [];
x = function () { };
// never
var error = function () {
    throw new Error('error');
};
var endlessLoop = function () {
    while (true) { }
};
var endless = function () {
    while (true) { }
};
