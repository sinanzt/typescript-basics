// Return Type
function add(n1, n2) {
    return n1 + n2;
}
// Void
function log(message) {
    console.log(message);
}
// Parameters
function multiply(a, b) {
    return a * b;
}
// Optional Parameters
function buildName(firstName, lastName) {
    if (lastName)
        return "".concat(firstName, " ").concat(lastName);
    else
        return firstName;
}
// Default Parameters
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return "".concat(firstName, " ").concat(lastName);
}
// Named Parameters
function add1(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
// Rest Parameters
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
