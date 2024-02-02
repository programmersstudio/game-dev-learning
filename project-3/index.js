const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

let gameSpeed = 10;
// let gameFrame = 0;

const bgLayer1 = new Image();
bgLayer1.src = "./assets/layer-1.png";
const bgLayer2 = new Image();
bgLayer2.src = "./assets/layer-2.png";
const bgLayer3 = new Image();
bgLayer3.src = "./assets/layer-3.png";
const bgLayer4 = new Image();
bgLayer4.src = "./assets/layer-4.png";
const bgLayer5 = new Image();
bgLayer5.src = "./assets/layer-5.png";

window.addEventListener("load", (e) => {
  // let verticalPosition = 0;
  // let verticalPosition2 = 1667;

  const slider = document.getElementById("slider");
  slider.value = gameSpeed;
  const showGameSpeed = document.getElementById("showGameSpeed");
  showGameSpeed.innerHTML = gameSpeed;
  slider.addEventListener("change", (e) => {
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = gameSpeed;
  });

  class Layer {
    constructor(image, speedModifier) {
      this.horizontal = 0;
      this.vertical = 0;
      this.width = 1667;
      this.height = 500;
      // this.horizontal2 = this.width;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = gameSpeed * this.speedModifier;
    }
    update() {
      this.speed = gameSpeed * this.speedModifier;
      // to make sure there is not gap between out images
      if (this.horizontal <= -this.width) {
        //   this.horizontal = this.width + this.horizontal2 - this.speed;
        this.horizontal = 0;
      }
      // to make sure there is not gap between out images
      // if (this.horizontal2 <= -this.width) {
      //   this.horizontal2 = this.width + this.horizontal - this.speed;
      // }
      // to make sure we do not have decimal values
      this.horizontal = Math.floor(this.horizontal - this.speed);
      // to make sure we do not have decimal values
      // this.horizontal2 = Math.floor(this.horizontal2 - this.speed);

      //   this.horizontal = (gameFrame * this.speed) % this.width;
    }
    draw() {
      ctx.drawImage(
        this.image,
        this.horizontal,
        this.vertical,
        this.width,
        this.height
      );
      ctx.drawImage(
        this.image,
        this.horizontal + this.width,
        this.vertical,
        this.width,
        this.height
      );
    }
  }

  const layer1 = new Layer(bgLayer1, 1);
  const layer2 = new Layer(bgLayer2, 1.2);
  const layer3 = new Layer(bgLayer3, 1.4);
  const layer4 = new Layer(bgLayer4, 1.6);
  const layer5 = new Layer(bgLayer5, 1.8);

  const gameObject = [layer1, layer2, layer3, layer4, layer5];
  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //   ctx.drawImage(bgLayer4, verticalPosition, 0);
    //   ctx.drawImage(bgLayer4, verticalPosition2, 0);

    //   // reset the postion of the asset if it goes out of the screen
    //   // 1667 because we know all of our images is this pixel wide
    //   if (verticalPosition < -1667)
    //     verticalPosition = 1667 + verticalPosition2 - gameSpeed;
    //   else verticalPosition -= gameSpeed;
    //   if (verticalPosition2 < -1667)
    //     verticalPosition2 = 1667 + verticalPosition - gameSpeed;
    //   else verticalPosition2 -= gameSpeed;

    gameObject.forEach((object) => {
      object.update();
      object.draw();
    });
    // gameFrame--;
    requestAnimationFrame(animate);
  }

  animate();
});
