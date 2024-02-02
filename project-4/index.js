/**@type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

const enemyCount = 10;
const enemyObject = [];
let gameFrame = 0;

window.addEventListener("load", (e) => {
  class Enemy {
    constructor() {
      this.image = new Image();
      this.image.src = "./assets/enemies/enemy1.png";
      // this.speed = Math.random() * 8 - 4;
      this.spriteWidth = 293;
      this.spriteHeight = 155;
      this.width = this.spriteWidth / 2.5;
      this.height = this.spriteHeight / 1;
      this.x = Math.random() * (canvas.width - this.width);
      this.y = Math.random() * (canvas.height - this.height);
      this.frame = 0;
      this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update() {
      this.x += Math.random() * 5 - 2.5;
      this.y += Math.random() * 5 - 2.5;
      if (gameFrame % this.flapSpeed === 0)
        this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
    draw() {
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(
        this.image,
        0,
        0,
        this.spriteWidth,
        this.spriteHeight * this.frame,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  for (let i = 0; i < enemyCount; i++) {
    enemyObject.push(new Enemy());
  }

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemyObject.forEach((object) => {
      object.update();
      object.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
  }

  animate();
});
