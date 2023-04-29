const character = document.getElementById("character");
const block = document.getElementById("block");
const startBtn = document.getElementById("start-btn");

const checkStatus = () => {
  setInterval(() => {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
      block.classList.remove("blockanimate");
      alert("Game Over");
    }
  }, 10);
};

const jump = () => {
  if (character.classList != "animate") {
    character.classList.add("animate");
    setTimeout(() => {
      character.classList.remove("animate");
    }, 500);
  }
};

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

const startGame = () => {
  block.classList.add("blockanimate");
};

checkStatus();
