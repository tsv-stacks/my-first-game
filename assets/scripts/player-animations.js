const canvas = document.getElementById("game");
const animationsSelect = document.getElementById("animations");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 600;
CANVAS_HEIGHT = canvas.height = 600;

const playerIdle = new Image();
playerIdle.src = "./assets/player/player-idle.png";
const playerRun = new Image();
playerRun.src = "./assets/player/player-run.png";
const playerDeath = new Image();
playerDeath.src = "./assets/player/player-death.png";
const playerHurt = new Image();
playerHurt.src = "./assets/player/player-hurt.png";
const playerJump = new Image();
playerJump.src = "./assets/player/player-jump.png";
const playerRoll = new Image();
playerRoll.src = "./assets/player/player-roll.png";
const playerSpin = new Image();
playerSpin.src = "./assets/player/player-spin.png";
const playerLand = new Image();
playerLand.src = "./assets/player/player-land.png";

const playerAnimations = [
  {
    animation: "idle",
    image: playerIdle,
    frames: 10,
  },
  {
    animation: "run",
    image: playerRun,
    frames: 8,
  },
  {
    animation: "death",
    image: playerDeath,
    frames: 10,
  },
  {
    animation: "hurt",
    image: playerHurt,
    frames: 4,
  },
  {
    animation: "jump",
    image: playerJump,
    frames: 3,
  },
  {
    animation: "roll",
    image: playerRoll,
    frames: 7,
  },
  {
    animation: "spin",
    image: playerSpin,
    frames: 6,
  },
  {
    animation: "land",
    image: playerLand,
    frames: 6,
  },
];

let playerState = "idle";
let selectedPlayerAnimation = playerIdle;
let frameX = 0;
let gameFrame = 0;
let playerDonorHeight = 48;
let playerDonorWidth = 48;
let playerAnimationFrames = 9;
const staggerFrames = 5;

animationsSelect.addEventListener("change", (event) => {
  const selectedAnimation = playerAnimations.find(
    (animation) => animation.animation === event.target.value
  );
  selectedPlayerAnimation = selectedAnimation.image;
  frameX = 0;
  gameFrame = 0;
  if (selectedAnimation.animation === "death") {
    playerDonorHeight = 64;
    playerDonorWidth = 64;
  } else {
    playerDonorHeight = 48;
    playerDonorWidth = 48;
  }
  playerAnimationFrames = selectedAnimation.frames - 1;
});

let playerImgWidth = 480;

const animate = () => {
  gameFrame++;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    selectedPlayerAnimation,
    frameX,
    0,
    playerDonorWidth,
    playerDonorHeight,
    0,
    CANVAS_HEIGHT - 72,
    72,
    72
  );
  if (gameFrame % staggerFrames === 0) {
    if (frameX < playerDonorWidth * playerAnimationFrames) {
      frameX += playerDonorWidth;
    } else {
      frameX = 0;
    }
  }

  requestAnimationFrame(animate);
};

animate();
