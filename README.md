![](./images/Flappymon-logo.png)

[Try yourself!](like to the game)

# Description 

Based on the popular game Flappybird, Flappymon adds a flavorful twist: it allows players to fly as Pidgey, the original "Route 1 Bird". As the player pushes further through the obstacles, they gain points in their score, leading them to evolution and more surprises. 

# Main Functions 
- The player controls the jumping for the "bird" using space or the up arrow
- upon the pressing of the previously mentioned buttons a jump movement happens and sfx play
- The bird is affected by realistic gravity, constantly pulling it down. 
- Once the bird clears a pipe, the obstacle is removed and the score increases. 
- At certain increments the player evolves and their sprite changes. 
- The pipes have a constant speed which simulates movement in the game.
- The pipes are added in using an in game timer based on the 60 fps. As certain score thresholds the interval is increased. 
- The Game Screen and Restart Screen both have background music as well as interactive sfx. 

# Backlog Functions 
- a Pause Button 
- a High Score Board

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

- window.onload()
    - addEventListener('click')
    - addEventListener('mouseover')
    - addEventListener('click')
    - addEventListener('mouseover)
    - sfx()
    - startGame()
    - handleKeydown (event) 
    - window.addEventListner('keydown')
    - restartGame()
    
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
    - this.gameEndScreen
    - this.player
    - this.music
    - this.timer
    - this.height
    - this.width
    - this.obstacles
    - this.score
    - this.lives
    - this.gameOver
- start()
- gameLoop()
- placePipesEasy()
- placePipesIntermediate()
- placePipesHard()
- update()
- incrementScore()
- endGame()

## pipe.js
- Pipe()
    - this.gameScreen
    - this.top
    - this.left
    - this.width
    - this.height
    - this.element 
    - this.element.src
    - this.element.style.position
    - this.element.style.width
    - this.element.style.height
    - this.element.style.left
    - this.element.style.top
    - this.gameScreen.appendChild(this.element)
- move()
- updatePositon()

# Extra Links

[Google Presentation](link to our slides)