class Bird {
    constructor(gameScreen , left , top , width , height){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.velocityY = 0;
        this.gravity = 0.4;
        this.birdSounds = {
            levelUp:new Howl({src: './sfx/LevelUp.mp3'}),
    }
        this.element = document.createElement('img');
        this.element.src = './images/Pidgey-Sprite.png';
        this.element.style.position = 'absolute';
        this.element.style.transform = 'scaleX(-1)';
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.velocityY += this.gravity;
        this.top += this.velocityY;

        if (this.top < 10) {
            this.top = 10;
        }

        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10; 
        }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
    }
    firstEvolution() {
        this.element.src = './images/pidgeotto-sprite.png'
        this.birdSounds.levelUp.play();
    }
    secondEvolution() {
        this.element.src = './images/pidgeot-sprite.png'
        this.birdSounds.levelUp.play();
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
    ) {
        return true;
    } else {
        return false;
    }
    } 
}