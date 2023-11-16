window.onload = function () {
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    let game; 

    startButton.addEventListener('click', () => {
        startGame();
    });
    startButton.addEventListener('mouseover', () => {
      startButton.style.cursor = 'pointer'
    })
    restartButton.addEventListener('click', () => {
        sfx.heal.play();
        restartGame();
    });
    restartButton.addEventListener('mouseover', () =>{
      restartButton.style.cursor = 'pointer'
    });

let sfx = {
  theme: new Howl({src:'./sfx/Theme.mp3'
  }),
  heal: new Howl({src: './sfx/PokemonHealing.mp3'
  }),
  wingFlap: new Howl({src: './sfx/flapped.mp3'
  }),
}
    function startGame() {
        console.log('start game');
        game = new Game();
        game.start();
    }

    function handleKeydown (event) {
      if (event.code == 'Space' || event.code == 'ArrowUp') {
        event.preventDefault();
        game.player.velocityY = -6;
      }
      sfx.wingFlap.play();
    }
    
  

    window.addEventListener("keydown", handleKeydown);

    function restartGame(){
      
        location.reload();
    }

}