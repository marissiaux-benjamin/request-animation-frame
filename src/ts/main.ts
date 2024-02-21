import {Rectangle} from "./shapes/Rectangle";

const canvasElement:HTMLCanvasElement = document.getElementById("my-canvas") as HTMLCanvasElement;
const ctx:CanvasRenderingContext2D = canvasElement.getContext('2d');
const shapes = [
    new Rectangle(200, 50, 'white', ctx, canvasElement),
    new Rectangle(50, 200, 'white',ctx, canvasElement)
];

ctx.fillStyle = "crimson";
ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

shapes.forEach((shape:Rectangle) => {
    shape.draw();
});