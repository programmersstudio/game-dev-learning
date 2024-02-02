/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const X = document.getElementById("x"); // to display value of X on screen
const Y = document.getElementById("y"); // to display value of Y on screen
const ctx = canvas.getContext("2d");
const CANVAS_HEIGHT = (canvas.height = 324);
const CANVAS_WIDTH = (canvas.width = 576);

/**
 * CITY 1 ASSETS IMPORT
 */
const city1_1 = new Image();
city1_1.src = "./assets/city 1/1.png";
const city1_2 = new Image();
city1_2.src = "./assets/city 1/2.png";
const city1_3 = new Image();
city1_3.src = "./assets/city 1/3.png";
const city1_4 = new Image();
city1_4.src = "./assets/city 1/4.png";
const city1_5 = new Image();
city1_5.src = "./assets/city 1/5.png";
const city1_6 = new Image();
city1_6.src = "./assets/city 1/6.png";
const city1_10 = new Image();
city1_10.src = "./assets/city 1/10.png";
//=====================

const gameSpeed = 1;

class Layer {
  constructor(image, speedModifier) {
    this.image = image;
    this.x = 0; // horizontal
    this.y = 0; // vertical
    this.width = 576; // actual image dimensions
    this.height = 324; // actual image dimensions
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }
  update() {
    X.innerHTML = this.x;
    Y.innerHTML = this.y;
    this.speed = gameSpeed * this.speedModifier; // to make image speed relevant to gameSpeed
    if (this.x <= -this.width) {
      this.x = 0;
    }
    this.x = Math.floor(this.x - this.speed); // to eliminate decimal values
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x + this.width, // calculated width for the second image
      this.y,
      this.width,
      this.height
    );
  }
}

const cityLayers = [];
cityLayers.push(new Layer(city1_1, 1));
cityLayers.push(new Layer(city1_2, 1.4));
cityLayers.push(new Layer(city1_3, 1.8));
cityLayers.push(new Layer(city1_4, 2.2));
cityLayers.push(new Layer(city1_5, 4));
// cityLayers.push(new Layer(city1_6));
// cityLayers.push(new Layer(city1_10));

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  cityLayers.forEach((city) => {
    city.draw();
    city.update();
  });
  requestAnimationFrame(animate);
}

window.onload = function () {
  animate();
};
