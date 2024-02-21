export class Rectangle{
    private readonly _x: number;
    private readonly _y: number;
    private readonly _width: number;
    private readonly _height: number;
    private readonly _color: string;
    private ctx: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;


    constructor(width: number, height: number, color: string, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this._width = width;
        this._height = height;
        this._color = color;
    }

    public draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect((this.canvasElement.width / 2) - this.width / 2, (this.canvasElement.height / 2) - this.height / 2, this.width, this.height);
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get color(): string {
        return this._color;
    }
}