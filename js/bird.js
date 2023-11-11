class Bird {
    constructor(gameScreen , left , top , width , height , imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionY = 1;
        this.element = document.createElement('img');
        this.element.src = imgSrc;

        this.element.style.position = 'relative';
        this.element.style.transform = 'scaleX(-1)';
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.top += this.directionY;

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

    didCollide() {}
}