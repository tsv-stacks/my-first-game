const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 600;
CANVAS_HEIGHT = canvas.height = 600;
let playerState = "idle";
let frameX = 0;

let gameFrame = 0;
const staggerFrames = 4;

// rename all images
// import images

const playerIdle = new Image();
playerIdle.src = "./assets/player/player-idle.png";

playerIdleWidth = 480;

const animate = () => {
  gameFrame++;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerIdle, frameX, 0, 48, 48, 0, CANVAS_HEIGHT - 48, 50, 50);
  if (gameFrame % staggerFrames === 0) {
    if (frameX <= 431) {
      frameX += 48;
    } else {
      frameX = 0;
    }
  }

  requestAnimationFrame(animate);
};

animate();
