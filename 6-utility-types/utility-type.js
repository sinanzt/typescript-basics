var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: 'organize desk',
    description: 'clear clutter'
};
var todo2 = updateTodo(todo1, {
    description: 'throw out trash'
});
console.log(todo2);
var obj = { a: 5 }; // OK
var recordX = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' }
};
console.log(recordX);
var todo3 = {
    title: 'Delete inactive users'
};
var todo = {
    title: 'Clean room',
    completed: false
};
var todoPick = {
    title: 'Clean room',
    completed: false
};
var value = 4; // number | boolean
var point = {
    x: 40,
    y: 50
};
// InstanceType
var C = /** @class */ (function () {
    function C() {
        this.x = 0;
        this.y = 0;
    }
    return C;
}());
var t0 = new C();
