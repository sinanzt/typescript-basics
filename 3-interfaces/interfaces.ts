interface List {
    readonly id: number;
    name: string;
    age?: number;
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        // value.id++; // Error: Cannot assign to 'id' because it is a read-only property.
    })
}

let result = {
    data: []
}

render(result);

interface StringArray {
    [index: number]: string
}

let chars: StringArray = ['A', 'B'];

interface Names {
    [x: string]: string;
    // y: number; // Error: Property 'y' of type 'number' is not assignable to string index type 'string'.
    [z: number]: string;
}

interface Sum {
    (x: number, y: number): number
}

let sum: Sum = (a, b) => a + b;

interface App {
    (): void;
    version: string;
    doSomething(): void;
}

function getApp() {
    let app: App = (() => { }) as App;
    app.version = '1.0';
    app.doSomething = () => { };
    return app;
}

let app1 = getApp();
app1();

let app2 = getApp();
app2.doSomething();

// ---------------------------------------------------------------- //

interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

console.log(coloredRectangle);