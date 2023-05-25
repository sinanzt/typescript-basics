// Partial
interface Todo {
    title: string;
    description: string;
}

function updateTodo (todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
    title: 'organize desk',
    description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});

console.log(todo2);

// Required

interface Props {
    a?: number;
    b?: string;
}

const obj: Props = { a: 5 }; // OK

// const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing

// Record
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const recordX: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};

console.log(recordX);

// Readonly
interface Todo2 {
    title: string;
}

const todo3: Readonly<Todo2> = {
    title: 'Delete inactive users',
};

//todo3.title = 'Hello'; // Error: cannot reassign a readonly property

// Omit

interface TodoFormOmit {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreviewFormOmit  = Omit<TodoFormOmit , 'description'>;

const todo: TodoPreviewFormOmit  = {
    title: 'Clean room',
    completed: false,
};

// Pick

interface TodoForPick {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreviewForPick = Pick<TodoForPick, 'title' | 'completed'>;

const todoPick: TodoPreviewForPick = {
    title: 'Clean room',
    completed: false,
};

// Exclude

type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = 4; // number | boolean

// ReturnType

type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 40,
  y: 50
};


// InstanceType

class C {
    x = 0;
    y = 0;
}

type T0 = InstanceType<typeof C>;  // C
const t0: T0 = new C();