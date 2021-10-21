import { detectCollision } from "./collisionDetection.js";



export default class Ball {
    constructor(game) {
        this.image = document.getElementById("img_ball");
        
        
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;


        this.game = game;

        this.position = {x: 312.5, y: 400};
        this.speed = {x: 4, y: -2};
        this.size = 16;
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
        );
    }

    update(deltaTime) {
        
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //wall on left or right
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }


        //wall on top or bottom
        if(this.position.y + this.size > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }




        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }

    }   

}
