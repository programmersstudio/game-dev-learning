/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const X = document.getElementById("x"); // to display value of X on screen
const Y = document.getElementById("y"); // to display value of Y on screen
const FLAP_SPEED = document.getElementById("flap_speed"); // to display value of Y on screen
const ctx = canvas.getContext("2d");
const CANVAS_HEIGHT = (canvas.height = 324);
const CANVAS_WIDTH = (canvas.width = 576);

/**
 * ENEMY ASSETS IMPORT
 */
const enemy_1 = new Image();
enemy_1.src = "./enemies/enemy1.png";
const enemy_2 = new Image();
enemy_2.src = "./enemies/enemy2.png";
const enemy_3 = new Image();
enemy_3.src = "./enemies/enemy3.png";
const enemy_4 = new Image();
enemy_4.src = "./enemies/enemy4.png";
//=====================

const gameSpeed = 1;
let gameFrame = 0;

class Enemy {
  constructor(image, speedModifier) {
    this.image = image;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = 293; // one image width
    this.height = 155; // standard image height
    this.x = Math.random() * (CANVAS_WIDTH - this.width);
    this.y = Math.random() * (CANVAS_HEIGHT - this.height);
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
    this.frames = 0;
    this.flapSpeed = Math.floor(Math.random() * 1 + 1);
  }

  update() {
    X.innerHTML = this.x;
    Y.innerHTML = this.y;
    FLAP_SPEED.innerHTML = this.flapSpeed;
    // this.speed = gameSpeed * this.speedModifier; // to make image speed relevant to gameSpeed
    // if (this.x <= -this.width) {
    //   this.x = 0;
    // }
    // this.x = Math.floor(this.x - this.speed); // to eliminate decimal values
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;
    // console.log(gameFrame);
    // console.log(this.flapSpeed);
    // console.log(gameFrame % this.flapSpeed);
    if (gameFrame % this.flapSpeed === 0) {
      this.frames >= 4 ? (this.frames = 0) : this.frames++;
      console.log("FRAMES : ", this.frames);
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frames,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x, // place on which asset should be drawn on the screen
      this.y, // place on which asset should be drawn on the screen
      this.width / 5, // place on which asset should be drawn on the screen
      this.height / 5 // place on which asset should be drawn on the screen
    );
  }
}

const enemyLayers = [];
enemyLayers.push(new Enemy(enemy_1, 1.2));

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemyLayers.forEach((enemy) => {
    enemy.draw();
    enemy.update();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

window.onload = function () {
  animate();
};
