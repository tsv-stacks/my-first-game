const backgroundImage1 = new Image();
backgroundImage1.src = "./assets/background/back.png";
const backgroundImage2 = new Image();
backgroundImage2.src = "./assets/background/middle.png";
const backgroundImage3 = new Image();
backgroundImage3.src = "./assets/background/foreground.png";
const backgroundImage3alt = new Image();
backgroundImage3alt.src = "./assets/background/foreground-empty.png";

let bggamespeed = 4;

class BGLayer {
  constructor(image, speedModifier, width) {
    this.image = image;
    this.speedModifier = speedModifier;
    this.height = 500;
    this.width = width;
    this.x = 0;
    this.y = 0;
    this.speed = bggamespeed * this.speedModifier;
    this.numImages = Math.ceil(CANVAS_WIDTH / this.width) + 1;
  }
  update() {
    this.speed = bggamespeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x += this.width;
    }
    this.x = Math.floor(this.x - this.speed);
    this.draw();
  }
  draw() {
    for (let i = 0; i < this.numImages; i++) {
      ctx.drawImage(
        this.image,
        this.x + i * this.width,
        this.y,
        this.width,
        this.height
      );
    }
  }
}

const layer1 = new BGLayer(backgroundImage1, 0.1, 163);
const layer2 = new BGLayer(backgroundImage2, 0.3, 372);
const layer3 = new BGLayer(backgroundImage3, 0.55, 1001);
const layer3a = new BGLayer(backgroundImage3alt, 0.55, 688);

function bganimate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  layer1.update();
  layer2.update();
  layer3.update();
  requestAnimationFrame(bganimate);
}

bganimate();
