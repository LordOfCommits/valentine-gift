const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const question = document.getElementById("question");
const buttonsContainer = document.querySelector(".buttons");

const catImg = document.getElementById("cat-img");

const gifs = {
  fingers: "./assets/cat-fingers.gif",
  nonono: "./assets/cat-nonono.gif",
  hearth: "./assets/cat-holds-hearth.gif",
  tongue: "./assets/cat-tongue.gif",
  fine: './assets/fine.gif',
  crying: './assets/crying.gif',
  angry: './assets/angry.gif',
  crying2: './assets/crying2.gif',
  love: './assets/love.gif'
};
let noButtonWidth = 200;
let yesButtonWidth = 200;
let clickCount = 0;


const moveButton = () => {
  const x = Math.floor(Math.random() * 80);
  const y = Math.floor(Math.random() * 80);

  noButton.style.left = `${x}%`;
  noButton.style.top = `${y}%`;
};

const noButtonText = [
  "Киця, ти промахнулась 😘",
  "Як це? Подумай ще!🤔",
  "Вже не весело. Переставай!🥺",
  "Ти тиснеш не ту кнопку! 🛑",
  'Кнопка "Так" зліва ⬅️',
  "У тебе останній шанс 😤",
];
const handleClickNo = () => {
  if (clickCount >= noButtonText.length) {
    catImg.src = gifs.tongue;
  } else {
    if (clickCount === 0) catImg.src = gifs.love;
    if (clickCount === 1) catImg.src = gifs.crying;
    if (clickCount === 2) catImg.src = gifs.angry;
    if (clickCount === 3) catImg.src = gifs.fine;
    if (clickCount === 4) catImg.src = gifs.crying2;
    if (clickCount > 5) catImg.src = gifs.nonono;
  }
  if (clickCount >= noButtonText.length) {
    noButton.classList.add("free");
    moveButton();
    noButton.textContent = "Серце не обманеш! 🏃‍♂️";
    yesButton.style.width = "300px";
    yesButton.style.height = "300px";
    yesButton.style.zIndex = "999";
    yesButton.style.fontSize = "100px";

    noButton.onmouseenter = moveButton;

    yesButton.style.fontSize = yesButtonWidth / 10 + "px";
  } else {
    noButton.innerText = noButtonText[clickCount];

    yesButtonWidth *= 1.3;
    yesButton.style.width = `${yesButtonWidth}px`;
    yesButton.style.fontSize = `${yesButtonWidth / 8}px`;
    clickCount++;
  }
};

const handleClickYes = () => {
  question.innerText = "Я знав 😚 Обожнюю тебе, моя кохана! 💕";
  catImg.src = gifs.hearth;
  buttonsContainer.style.display ='none'
};

noButton.addEventListener("click", handleClickNo);
yesButton.addEventListener("click", handleClickYes);
