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
  setInterval(function () {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 30 && blockLeft > 0 && characterTop >= 350) {
      block.style.animation = "none";
      function reloadPage() {
        if (
          alert(
            `game over you survive for ${Math.floor(counter / 100)} seconds!`
          )
        ) {
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
    if (counter > 600) {
      block.style.animation = "block 1.5s infinite";
    }
    if (counter > 1000) {
      block.style.animation = "block 1s infinite";
    }
    if (counter > 1600) {
      block.style.animation = "block .9s infinite";
    }
    if (counter > 1900) {
      block.style.animation = "block .7s infinite";
    }
    if (counter > 3600) {
      block.style.animation = "block .6s infinite";
    }
  }, 10);
}
