let character = document.getElementById("character");
let block = document.getElementById("block");
let counter = 0;

const backgroundAudio = new Audio();
backgroundAudio.src = "./sound/techno-future-drone-main-9724 (1).mp3";
const jumpSound = new Audio();
jumpSound.src = "./sound/jump-15984-[AudioTrimmer.com].mp3";
document.getElementById("splash").addEventListener("click", remove);
if (document.getElementById("splash")) {
  block.style.animation = "none";
}

function remove() {
  let splash = document.getElementById("splash");
  splash.remove();
  block.style.animation = "block 2s infinite";
  block.style.animationTimingFunction = "linear";
  startGame();
  backgroundAudio.play();
}
