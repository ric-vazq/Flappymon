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
      if (event.code == 'Space' || event.code == 'ArrowUp') {
        event.preventDefault();
        game.player.velocityY = -8;
      }
    }
    

    window.addEventListener("keydown", handleKeydown);

    function restartGame(){
        console.log('restart game');
        location.reload();
    }

}