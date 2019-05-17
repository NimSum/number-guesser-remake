export const updateNumberRange = (min, max) => {
  document.querySelector('.curr-min-range').textContent = min
  document.querySelector('.curr-max-range').textContent = max
}

export const updateLatestScore = (idx, name, guess, message) => {
  document.querySelectorAll(`.player-${idx + 1}-name`).forEach(el => el.textContent = name);
  document.querySelector(`.player-${idx + 1}-guess`).textContent = guess;
  document.querySelector(`.player-${idx + 1}-feedback`).textContent = message;
}

export const addWinnerCard = (p1, p2, winner, count, time) => {
  document.querySelector('.winner-card-container').insertAdjacentHTML('afterbegin', `
    <article class="winner-card">
      <h4>
        <span class="card-p1-name">${p1}</span>
        vs
        <span class="card-p2-name">${p2}</span>
      </h4>
      <h3 class="winner-name">${winner}</h3>
      <h3>WINNER</h3>
      <div>
        <p><span class="guess-count">${count}</span> Guesses</p>
        <p><span class="guess-time">${time}</span> Mins</p>
        <button class="delete-card">X</button>
      </div>
    </article>
  `)
}

export const deleteCard = (e) => {
  e.target.parentElement.parentElement.remove();
}
