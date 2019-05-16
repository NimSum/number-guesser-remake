export const updateNumberRange = (min, max) => {
  document.querySelector('.curr-min-range').textContent = min
  document.querySelector('.curr-max-range').textContent = max
}

export const updateLatestScore = (idx, name, guess, message) => {
  document.querySelectorAll(`.player-${idx + 1}-name`).forEach(el => el.textContent = name);
  document.querySelector(`.player-${idx + 1}-guess`).textContent = guess;
  document.querySelector(`.player-${idx + 1}-feedback`).textContent = message;
}
