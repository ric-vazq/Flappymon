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
}