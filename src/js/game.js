import * as domUpdate from './domUpdates'

export const startGame = () => {
  let minRange = 1;
  let maxRange = 100;
  let randomNum = generateRandomNum();
  function generateRandomNum() {
    return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  }
  const playerOne = {
    name: '',
    guess: ''
  }
  const playerTwo = {
    name: '',
    guess: ''
  }

}