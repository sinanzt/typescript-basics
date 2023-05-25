class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumberExp');
  value.setValue(10);
  console.log(value.toString()); // myNumberExp: 10


// Default Value

class NamedValue2<T = string> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value2 = new NamedValue2('myNumber');
  value2.setValue('myValueExample2');
  console.log(value2.toString()); // myNumber: myValueExample2