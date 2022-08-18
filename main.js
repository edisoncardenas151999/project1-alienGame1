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

function remove() {
  let splash = document.getElementById("splash");
  splash.remove();
  block.style.animation = "block 2s infinite";
  block.style.animationTimingFunction = "linear";
  startGame();
  backgroundAudio.play();
  
}
function startGame() {
  function jumpCharacter() {
    if (character.classList != "animationJump") {
      character.classList.add("animationJump");
    }
    setTimeout(function () {
      character.classList.remove("animationJump");
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
        } else {
          window.location.reload();
        }
      }
      reloadPage();
      counter = 0;
    } else {
      counter++;
      document.getElementById("score").innerHTML = Math.floor(counter / 100);
    }
    if(counter > 600){
      block.style.animation = "block 1.5s infinite"
    }
    if(counter > 1000 ){
      block.style.animation = "block 1s infinite"
    }
    if(counter > 1600){
      block.style.animation = "block .9s infinite"
    }
    if(counter > 1900){
      block.style.animation = "block .7s infinite"
    }
    if(counter > 3600){
      block.style.animation = "block .5s infinite"
    }
    
   
    
    // else {
    //   console.log('test')
    // }

    
  }, 10);
}

//TODO: MAKE A IF STATEMENT THAT INCREASES THE SPEED OF THE BLOCK EVERY TIME THE SCORE IS DOUBLED

// if (counter.innerHTML === 5){
//   block.style.animation = 'block 1s infinite '
// }
// else if (counter.innerHTML === 10){
//   block.style.animation = 'block .5s infinite '
// }
// else if(counter.innerHTML === 20){
//   block.style.animation = 'block .3s infinite '

// }
