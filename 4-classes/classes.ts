class Person {
    name: string;
}

const person = new Person();
person.name = "John";

console.log(person.name);

class Animal {
    constructor(name: string) {
        this.name = name;
    }

    name: string;
}

const animal = new Animal("Scooby");
console.log(animal.name);

// --------------------------------------------------

class Person1 {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person1 = new Person1("Tom");
console.log(person1.getName()); // person.name isn't accessible from outside the class since it's private


// --------------------------------------------------

class Person2 {
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person2 = new Person2("Alex");
console.log(person2.getName());


// --------------------------------------------------

// Exp: Extending classes, overriding methods, and using protected

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}