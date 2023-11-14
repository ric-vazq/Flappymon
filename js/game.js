class Game {
    constructor () {
        this.startScreen = document.getElementById('game-intro');
        this.gameContainer = document.getElementById('game-container')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end');
        this.player = new Bird(
            this.gameScreen,
            100,
            900, 
            100,
            100
        ) 
        this.timer = 0
        this.height = 600; 
        this.width = 800; 
        this.obstacles = [];
        this.score = 50;
        this.lives = 1;
        this.gameOver = false; 
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = 'none';
        this.gameContainer.style.display = 'flex';

        this.gameLoop();
    }

    gameLoop() {
        this.timer++;
       // console.log(this.timer)
        if (this.gameOver) {
            return; 
        }
        this.update();
        this.placePipes()

        window.requestAnimationFrame(() => this.gameLoop());
    }

    placePipes(){
        if(this.timer%90 === 0){
            let randomNum = 0 - 300/4 - Math.random() * 300/2 ;
            let newPipeTop = new Pipe(this.gameScreen, randomNum, '/images/toppipe.png');
            let newPipeBottom = new Pipe(this.gameScreen, randomNum +500 , '/images/bottompipe.png');
            this.obstacles.push(newPipeBottom , newPipeTop);

        
        console.log(this.obstacles.length)}
    }

    update() {
        this.player.move();

        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();
      
            if (this.player.didCollide(obstacle)) {
              obstacle.element.remove();
              this.obstacles.splice(i, 1);
              this.lives--;
              i--;

            } else if (obstacle.left < -175) {
              this.score++;
              obstacle.element.remove();
              this.obstacles.splice(i, 1);
              i--;
            }
        }   
        if (this.lives === 0) {
            this.endGame();
        }
        
    }

    incrementScore() {
        this.score++;
        if (this.score === 50) {
            this.player.firstEvolution();
        } else if (this.score === 100) {
            this.player.secondEvolution();
        }
    }

    endGame(){
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());
        this.gameOver = true;
        this.gameContainer.style.display = 'none';
        this.gameEndScreen.style.display = 'flex';
    }

}