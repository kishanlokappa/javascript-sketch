console.log('it works');

// select canvas , shake button, create context
const canvas = document.querySelector(`#etch-a-sketch`);
const shake = document.querySelector(`.shake`);
const MOVE_AMOUNT = 10;

const ctx = canvas.getContext(`2d`);

//set hue for line color
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;


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

//  write draw function
function draw(options) {

    hue = hue + 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.moveTo(x, y);


    switch (options.key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;

        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;

        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;

        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;


        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();

}

//  write handler for the keys
function handleKey(event) {
    if (event.key.includes('Arrow')) {
        event.preventDefault();
        draw({ key: event.key });
    }
}

//  clear / shake function
shake.addEventListener('click', clearCanvas)

function clearCanvas() {


    canvas.classList.add('shake');

    ctx.clearRect(0, 0, width, height); // clears canvas

    canvas.addEventListener('animationend', function () {
        console.log('shake that booty');
        canvas.classList.remove('shake');
    }, { once: true })
}

//  Listen for the arrow keys
window.addEventListener('keydown', handleKey);
