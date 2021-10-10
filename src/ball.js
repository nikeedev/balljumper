export default class Ball {
    constructor(game) {
        this.image = document.getElementById("img_ball");
        
        
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;


        this.postion = {x: 10, y: 10};

        this.speed = {x: 4, y: 2};

        this.size = 16;
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.postion.x, 
            this.postion.y, 
            this.size, 
            this.size
        );
    }

    update(deltaTime) {
        this.postion.x += this.speed.x;
        this.postion.y += this.speed.y;


        if(this.postion.x + this.size > this.gameWidth || this.postion.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if(this.postion.y + this.size > this.gameHeight || this.postion.y < 0) {
            this.speed.y = -this.speed.y;
        }
    }   

}