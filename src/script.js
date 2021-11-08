
import Game from "./game.js";


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


const GAME_WIDTH = 625;
const GAME_HEIGHT = 500;


let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();



let lastTime = 0;
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;


    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
    
    game.update(deltaTime);
    game.draw(ctx);


    requestAnimationFrame(gameLoop);
}


requestAnimationFrame(gameLoop);


