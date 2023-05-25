var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumberExp');
value.setValue(10);
console.log(value.toString()); // myNumberExp: 10
// Default Value
var NamedValue2 = /** @class */ (function () {
    function NamedValue2(name) {
        this.name = name;
    }
    NamedValue2.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue2.prototype.getValue = function () {
        return this._value;
    };
    NamedValue2.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue2;
}());
var value2 = new NamedValue2('myNumber');
value2.setValue('myValueExample2');
console.log(value2.toString()); // myNumber: myValueExample2
