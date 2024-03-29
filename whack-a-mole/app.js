const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
let peepTimeout;
let startTimeout;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHoles(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if(lastHole === hole) {
    return randomHoles(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHoles(holes);
  hole.classList.add('up');
  peepTimeout = setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) { 
      peep();
    }
  }, time);
}

function reset() {
  clearTimeout(peepTimeout);
  clearTimeout(startTimeout);
  holes.forEach((element) => {
    element.classList.remove('up');
  });
}

function startGame() {
  reset();
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  startTimeout = setTimeout(() => {
    timeUp = true;
  }, 10000);
}

function bonk(e) {
  if(!e.isTrusted) return; //cheater
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));