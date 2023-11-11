window.onload = function () {
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    let game; 

    startButton.addEventListener('click', function () {
        startGame();
    });
    restartButton.addEventListener('click', () => {
        restartGame();
    });

    function startGame() {
        console.log('start game');
        game = new Game();
        game.start();
    }

    function handleKeydown (event) {
        const key = event.key;
        const possibleKeyStrokes = [
          "ArrowUp",
          "Spacebar"
        ];
        if (possibleKeyStrokes.includes(key)) {
          event.preventDefault();
    
          switch (key) {
            case "ArrowLeft":
              game.player.directionX = -1;
              break;
            case "ArrowUp":
              game.player.directionY = -1;
              break;
            case "ArrowRight":
              game.player.directionX = 1;
              break;
            case "ArrowDown":
              game.player.directionY = 1;
              break;  
          }
        }
      }

    window.addEventListener("keydown", handleKeydown);

    function restartGame(){
        console.log('restart game');
        location.reload();
    }

}