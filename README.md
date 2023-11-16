# Flappymon

[Try yourself!](like to the game)

![](./images/Flappymon-logo.png)

# Description 

Based on the popular game Flappybird, Flappymon adds a flavorful twist: it allows players to fly as Pidgey, the original "Route 1 Bird". As the player pushes further through the obstacles, they gain points in their score, leading them to evolution and more surprises. 

# Main Functions 
- The player controls the jumping for the "bird" using space or the up arrow
- The bird is affected by realistic gravity, constantly pulling it down. 
- Once the bird clears a pipe this is removed and the score increases. 
- At certain increments the player evolves and their sprite changes. 
- The pipes have a constant speed and interval in which they are set in. In higher levels the interval is increased. 

# Backlog Functions 
- a Pause Button 
- a High Score board
- music for the game

# Technologies Used

- HTML
- CSS
- CSS Keyframes and Animations
- Javascript
- DOM Manipulation

# States
- Start Screen
- Game Screen 
- Restart Screen

# Project Structure

## script.js

-

## bird.js

- Bird()
    - this.gameScreen
    - this.left
    - this.top
    - this.width
    - this.height
    - this.velocityY
    - this.gravity
    - this.birdSounds
    - this.element
    - this.element.src
    - this.element.style.position
    - this.element.style.transform
    - this.element.style.width
    - this.element.style.height
    - this.element.style.left
    - this.element.style.top
    - this.gameScreen.appendChild(this.element)
- move()
- updatePosition()
- firstEvolution()
- secondEvolution()
- didCollide(obstacle)

## game.js

- game()
    - this.startScreen
    - this.gameContainer
    - this.gameScreen
    

## obstacle.js