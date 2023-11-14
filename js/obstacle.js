class Obstacle {
    constructor (gameScreen) {
        this.gameScreen = gameScreen; 
        this.top = 0;
        this.left = 800;
        this.width = 60;
        this.height = 300; 
        this.element = document.createElement('img');
        this.element.src = './images/toppipe.png';

        this.element.style.position = 'relative';
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left -= 2;

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
    }
}