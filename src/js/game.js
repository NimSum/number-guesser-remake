import * as domUpdate from './domUpdates'
import Player from './Player';

export const startGame = () => {
  let minRange = 1;
  let maxRange = 100;
  const playerOne = new Player()
  const playerTwo = new Player()
  document.querySelector('.submit-guesses-btn')
    .addEventListener('click', handleSubmit)

  function handleSubmit() {
    const getValue = (className) => document.querySelector(className).value;
    playerOne.name = getValue('.player-1-name-input');
    playerTwo.name = getValue('.player-2-name-input');
    playerOne.guess = getValue('.player-1-guess-input');
    playerTwo.guess = getValue('.player-2-guess-input');
    checkPlayerGuesses();
  }
  const randomNum = generateRandomNum();
  console.log(randomNum)
  function checkPlayerGuesses() {
    [ playerOne, playerTwo ].forEach((player, idx) => {
      const { name, guess } = player;
      switch (true) {
      case guess < randomNum:
        domUpdate.updateLatestScore(idx, name, guess, 'Too Low!');
        break;
      case guess > randomNum:
        domUpdate.updateLatestScore(idx, name, guess, 'Too High!');
        break;
      default: 
        domUpdate.updateLatestScore(idx, name, guess, 'BOOM!');
      }
    })
  }

  function generateRandomNum() {
    return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  }


}