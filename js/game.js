class Game {
    constructor () {
        this.startScreen = document.getElementById('game-intro');
        this.gameContainer = document.getElementById('game-container')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end');
        this.player = new Bird(
            this.gameScreen,
            50,
            300, 
            75,
            75
        ) 
        this.music = {
            littleRoot: new Howl({
                src: ' ./sfx/LittleRoot.mp3'}),
            point: new Howl({
                src: './sfx/point.mp3'}),
            gotHit: new Howl({
                src: './sfx/Tackle.mp3'}),
            pokeCenter: new Howl({
                src: './sfx/PokemonCenter.mp3'
            }),
        }
        this.timer = 0
        this.height = 600; 
        this.width = 800; 
        this.obstacles = [];
        this.score = 0;
        this.lives = 1;
        this.gameOver = false; 
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = 'none';
        this.gameContainer.style.display = 'flex';
        this.music.littleRoot.play();
        this.music.pokeCenter.stop();

        this.gameLoop();
    }

    gameLoop() {
        this.timer++;
        if (this.gameOver) {
            return; 
        }
        this.update();
        if (this.score/2 < 50) {
            this.placePipesEasy();
        } else if (this.score/2 < 100) {
            this.placePipesIntermediate();
        } else {
            this.placePipesHard();
        }
        
        window.requestAnimationFrame(() => this.gameLoop());
    }

    placePipesEasy(){
        if(this.timer%120 === 0){
            let randomNum = 0 - 300/4 - Math.random() * 300/2 ;
            let newPipeTop = new Pipe(this.gameScreen, randomNum, "./images/toppipe.png");
            let newPipeBottom = new Pipe(this.gameScreen, randomNum + 500 , "./images/bottompipe.png");
            this.obstacles.push(newPipeBottom , newPipeTop);
        }
    }

    placePipesIntermediate() {
        if(this.timer%110 === 0){
            let randomNum = 0 - 300/4 - Math.random() * 300/2 ;
            let newPipeTop = new Pipe(this.gameScreen, randomNum, "./images/toppipe.png");
            let newPipeBottom = new Pipe(this.gameScreen, randomNum + 500 , "./images/bottompipe.png");
            this.obstacles.push(newPipeBottom , newPipeTop);
        }
    }

    placePipesHard() {
        if(this.timer%100 === 0){
            let randomNum = 0 - 300/4 - Math.random() * 300/2 ;
            let newPipeTop = new Pipe(this.gameScreen, randomNum, "./images/toppipe.png");
            let newPipeBottom = new Pipe(this.gameScreen, randomNum + 500 , "./images/bottompipe.png");
            this.obstacles.push(newPipeBottom , newPipeTop);
        }
    }

    update() {
        this.player.move();

        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();
            
            if (this.player.didCollide(obstacle)) {
                this.music.gotHit.play();
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                this.lives--;
                i--;

            } else if (obstacle.left < -60) {
              this.incrementScore();
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
        document.querySelector('#score').innerHTML = this.score/2; 
        if (this.score/2 === 50) {
            this.player.firstEvolution();
        } 
        else if (this.score/2 === 100) {
            this.player.secondEvolution();
        }
        this.music.point.play()
    }

    endGame(){
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());
        this.gameOver = true;
        this.gameContainer.style.display = 'none';
        this.gameEndScreen.style.display = 'flex';
        this.music.littleRoot.stop();
        this.music.pokeCenter.play();
    }
}