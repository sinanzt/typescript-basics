abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle1 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}