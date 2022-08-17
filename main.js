let character = document.getElementById("character");
let block = document.getElementById("block");
let counter = 0;

const backgroundAudio = new Audio();
backgroundAudio.src =
  "http://docs.google.com/uc?export=open&id=12HIvC0ZOlUdVEk9TsvVbJit3xY3JRisE";
const jumpSound = new Audio();
jumpSound.src =
  "http://docs.google.com/uc?export=open&id=1ANefDl3zStoPsOk_8fb7hTL0FcSnNVay";

document.getElementById("splash").addEventListener("click", remove);
if (document.getElementById("splash")) {
  block.style.animation = "none";
}

function removeSplash() {
  let splash = document.getElementById("splash");
  splash.removeSplash();
  block.style.animation = "block 1.5s infinite";
  block.style.animationTimingFunction = "linear";
  startGame();
  backgroundAudio.play();
}

function startGame() {
  function jumpCharacter() {
    if (character.classList != "animate") {
      character.classList.add("animate");
    }
    setTimeout(function () {
      character.classList.remove("animate");
    }, 500);
  }
  function control(e) {
    if (e.keyCode === 32) {
      jumpSound.play();
      jumpCharacter();
    }
  }

  document.addEventListener("keydown", control);
  let detectCollision = setInterval(function () {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 30 && blockLeft > 0 && characterTop >= 350) {
      block.style.animation = "none";
      function reloadPage() {
        if (alert(`game over your score is ${Math.floor(counter / 100)}`)) {
          console.log("alert");
        } else {
          window.location.reload();
        }
      }
      reloadPage();
      counter = 0;
    } else {
      counter++;
      let gameSpeed = document.getElementById("score");
      gameSpeed.innerHTML = Math.floor(counter / 100);
    }
  }, 10);
}

//TODO: MAKE A IF STATEMENT THAT INCREASES THE SPEED OF THE BLOCK EVERY TIME THE SCORE IS DOUBLED
//TODO: CHANGE THE IMGS INTO ACTUAL URL LINKS
//TODO: PUT SOUND EFFECTS AND BACKGROUND MUSIC

// if (counter.innerHTML === 5){
//   block.style.animation = 'block 1s infinite '
// }
// else if (counter.innerHTML === 10){
//   block.style.animation = 'block .5s infinite '
// }
// else if(counter.innerHTML === 20){
//   block.style.animation = 'block .3s infinite '

// }
