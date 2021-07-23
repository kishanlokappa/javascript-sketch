console.log('it works');

// select canvas , shake button, create context
const canvas = document.querySelector(`#etch-a-sketch`);
const shake = document.querySelector(`.shake`);

const ctx = canvas.getContext(`2d`);

// setup context to draw
const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineCap = `round`;
ctx.lineJoin = `round`;
ctx.lineWidth = 10;

ctx.beginPath();    //  Starts drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
