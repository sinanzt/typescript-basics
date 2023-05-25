function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        // value.id++; // Error: Cannot assign to 'id' because it is a read-only property.
    });
}
var result = {
    data: []
};
render(result);
var chars = ['A', 'B'];
var sum = function (a, b) { return a + b; };
function getApp() {
    var app = (function () { });
    app.version = '1.0';
    app.doSomething = function () { };
    return app;
}
var app1 = getApp();
app1();
var app2 = getApp();
app2.doSomething();
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);
