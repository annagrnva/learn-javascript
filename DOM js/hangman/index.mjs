const words = ['cat', 'duck', 'mouse'];

const alphabet = ['a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'];


let liveCounter = 6;
let userAnswers = [];
const wordField = document.querySelector(".hangman-word");
const alphabetBtn = document.querySelector(".hangman-alphabet_btns");
let gameActive = true;
let currentWord = 0;
const gameResult = document.querySelector(".hangman-result-game");
const counter = document.querySelector(".hangman-live_counter");


function showField() {
  wordField.innerHTML = '';
  const wordArray = words.map(word => word.split(''));
  const idxWord = wordArray[currentWord];

  idxWord.forEach(letter => {
    const cell = document.createElement('div');
    cell.classList.add('hangman-word_line');
    cell.textContent = '_';
    wordField.appendChild(cell);
  })
};

function lifeCount() {
  const counter = document.querySelector(".hangman-live_counter");
  counter.classList.add(".hangman-live_counter");

  if (liveCounter > 0) {
    liveCounter = liveCounter - 1;
  };
  counter.textContent = `You have ${liveCounter} lives left`;
  checkGameOver()
};

function showAlphabet() {
  alphabet.forEach(letter => {
    const button = createButton(letter);
    alphabetBtn.appendChild(button);
  });
};

function createButton(letter) {
  const button = document.createElement('div');
  button.classList.add('btn');
  button.textContent = letter;

  button.addEventListener('click', () => buttonClick(letter));

  return button;
};

function buttonClick(letter) {
  if (!gameActive) return;
  const idxWord = words[currentWord];
  const wordLetter = idxWord.indexOf(letter);
  const lines = document.querySelectorAll(".hangman-word_line");

  if (wordLetter != -1) {
    userAnswers[wordLetter] = letter;
    lines[wordLetter].textContent = letter;
  } else {
    lifeCount();
  };

  checkGameOver();
};

function nextButton() {
  if (!gameActive) return;
  const nextwordBtn = document.querySelector(".hangman-btn_next-word")
  nextwordBtn.addEventListener('click', () => {
    userAnswers = []
    // console.log('ckeck users empty', userAnswers)
    const nextWordMessage = document.querySelector(".hamgman-nextWord_message")
    currentWord++
    if (currentWord >= words.length) {
      nextWordMessage.textContent = 'You have no more words';
      currentWord = 0;
    };
    showField()
  });
};


let countTrueAnswers = 0;
function checkGameOver() {
  console.log(userAnswers)
  console.log(words[currentWord])

  let filterUserAnswers = userAnswers.filter(item => {
    return Boolean(item)
  })
  console.log(filterUserAnswers)
  if (liveCounter <= 0) {
    gameResult.textContent = 'You lose the game';
    gameActive = false;
  } else if (filterUserAnswers.length === words[currentWord].length) {
    countTrueAnswers += 1
    console.log(countTrueAnswers)
    if (countTrueAnswers === words.length) {
      gameResult.textContent = 'You win the game';
      gameActive = false;
    }

  };
};

function resetGame() {
  liveCounter = 6;
  userAnswers = [];
  gameActive = true;

  const lines = document.querySelectorAll(".hangman-word_line");
  lines.forEach(line => {
    line.classList.add('hangman-word_line')
    line.textContent = '_';

  });
  const gameResult = document.querySelector(".hangman-result-game");
  gameResult.textContent = ' ';
  counter.textContent = '';

}

const playAgainBtn = document.querySelector(".hangman-btn");
playAgainBtn.addEventListener('click', () => {
  console.log(gameActive)
    resetGame();

});

showAlphabet()
showField()
nextButton()
