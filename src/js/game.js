import * as domUpdate from './domUpdates'
import Player from './Player';

export const startGame = () => {
  let minRange = 1;
  let maxRange = 100;
  let randomNum = generateRandomNum();
  let guessCount = 0;
  let timer = 1;
  const getValue = (className) => document.querySelector(className).value;
  const playerOne = new Player()
  const playerTwo = new Player()
  document.querySelector('.submit-guesses-btn')
    .addEventListener('click', handleSubmit);
  document.querySelector('.submit-new-range')
    .addEventListener('click', updateNumberRange);
  document.querySelector('.winner-card-container')
    .addEventListener('click', deleteCard);

  function deleteCard(e) {
    e.target.className === 'delete-card' && domUpdate.deleteCard(e)
  }

  function updateNumberRange(e) {
    e.preventDefault();
    minRange = parseInt(getValue('.new-min'));
    maxRange = parseInt(getValue('.new-max'));
    domUpdate.updateNumberRange(minRange, maxRange);
    randomNum = generateRandomNum()
  }

  function handleSubmit() {
    playerOne.name = getValue('.player-1-name-input');
    playerTwo.name = getValue('.player-2-name-input');
    playerOne.guess = getValue('.player-1-guess-input');
    playerTwo.guess = getValue('.player-2-guess-input');
    guessCount++;
    checkPlayerGuesses();
  }
  
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
        domUpdate.addWinnerCard(playerOne.name, playerTwo.name, player.name, guessCount, getTime());
        increaseNumRange();
      }
    })
  }

  const getTime = () => (timer / 60).toFixed(2);

  function increaseNumRange() {
    minRange < 11 ? minRange = 1 : minRange -= 10;
    maxRange += 10;
    randomNum = generateRandomNum();
    domUpdate.updateNumberRange(minRange, maxRange);
    guessCount = 0;
    timer = 1;
  }

  function generateRandomNum() {
    return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  }

  const timerInterval = () => setInterval(timer++, 1000);
  timerInterval()
}