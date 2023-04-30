const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 600;
CANVAS_HEIGHT = canvas.height = 600;
let playerState = "idle";

// rename all images
// import images

const playerIdle = new Image();
playerIdle.src = "./assets/player/player-idle.png";

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerIdle, 0, 0, 50, 50, 0, 0, 50, 50);
  requestAnimationFrame(animate);
};

animate();
