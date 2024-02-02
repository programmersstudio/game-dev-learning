const canvas = document.getElementById('one');
const ctx = canvas.getContext('2d');
console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './shadow_dog.png';

const spriteWidth = 573
const spriteHeight = 530

let frameX = 0;
let frameY = 1;
let maxFrame = 6;
let gameFrame = 0;
const staggerFrames = 3.5;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(50,50,100,100);

    // image, destination x, destination y, destination width, destination height
    // ctx.drawImage(playerImage, 0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    let position = Math.floor(gameFrame/staggerFrames) % maxFrame;
    frameX = position * spriteWidth
    // image, source x, source y, source width, source height, destination x, destination y, destination width, destination height
    ctx.drawImage(playerImage, frameX , frameY * spriteHeight, spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);

    if(gameFrame % staggerFrames == 0) {
        frameX < maxFrame ? frameX++ : frameX = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate)
}
animate()