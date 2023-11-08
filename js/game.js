class Game {
    constructor () {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.gameStats = document.getElementById('stats-container')
        this.player = null; 
        this.height = 600; 
        this.width = 800; 
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameOver = false; 
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.gameStats.style.display = 'block';

        this.gameLoop();
    }

    gameLoop() {
        if (this.gameOver) {
            return; 
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        console.log('Game Update');
    }
}