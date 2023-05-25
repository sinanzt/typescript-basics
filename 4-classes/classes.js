var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = "John";
console.log(person.name);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var animal = new Animal("Scooby");
console.log(animal.name);
// --------------------------------------------------
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person1 = new Person1("Tom");
console.log(person1.getName()); // person.name isn't accessible from outside the class since it's private
// --------------------------------------------------
var Person2 = /** @class */ (function () {
    function Person2(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2("Alex");
console.log(person2.getName());
var Rectangle = /** @class */ (function () {
    // using protected for these members allows access from classes that extend from this class, such as Square
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    // this toString replaces the toString from Rectangle
    Square.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return Square;
}(Rectangle));
