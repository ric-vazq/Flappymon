class Obstacle {
    constructor (gameScreen) {
        this.gameScreen = gameScreen; 
        this.top = 0;
        this.left = 800;
        this.width = 60;
        this.height = 300; 
        this.element = document.createElement('img');
        this.element.src = 'toppipe.png';

        this.element.style.position = 'relative';
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left -= 2;

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${left}px`
    }
}