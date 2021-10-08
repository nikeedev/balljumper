import Paddle from "./paddle.js";


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");


const GAME_WIDTH = 600;
const GAME_HEIGHT = 500;

ctx.clearRect(20, 20, 600, 500);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);


paddle.draw(ctx);


let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;


    ctx.clearRect(0, 0, 600, 500);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}


gameLoop();

