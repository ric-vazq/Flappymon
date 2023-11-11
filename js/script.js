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
          "Space"
        ];
        if (possibleKeyStrokes.includes(key)) {
          event.preventDefault();
    
          switch (key) {
            case "ArrowUp":
              game.player.directionY = -1;
              break;
            case "Space":
              game.player.directionY = -1;
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