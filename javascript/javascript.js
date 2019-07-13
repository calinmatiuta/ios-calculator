//Blackjack
// let name;
// console.log(name);
// name = 'Calin Matiuta';
// console.log(name);
// name = "Emanuel Virca";
// console.log(name);

let firstName;
let lastName;
let fullName;
let age;
let yearOfBirth;
let monthOfBirth;
let dayOfBirth;
let birthDate;

firstName = "Calin";
lastName = "Matiuta";
age = 32;
yearOfBirth = "1987";
monthOfBirth = "11";
dayOfBirth = "21";

fullName = firstName + " " + lastName;
console.log(firstName, lastName, fullName);

birthDate = yearOfBirth + monthOfBirth + dayOfBirth;
console.log(birthDate);

let luckyNumber = +yearOfBirth + +monthOfBirth + +dayOfBirth;

console.log(luckyNumber);

let generateBtn = document.getElementById("generate");

console.log(generateBtn);

function getLuckyNumber() {
  console.log("I am inside a function!");
}

getLuckyNumber();

//let birtDate = new Date("1987.11.18");

// console.log(name);
// console.log(age);
// console.log(birtDate);

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "Ten",
  "Nine",
  "Eight",
  "Seven",
  "Six",
  "Five",
  "Four",
  "Three",
  "Two"
];

let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

hitButton.style.display = "none";
stayButton.style.display = "none";

newGameButton.addEventListener("click", function() {
  textArea.innerText = "Vezi ca incepe...";
  newGameButton.style.display = "none";
  hitButton.style.display = "inline";
  stayButton.style.display = "inline";
});

function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}
function getCardString(card) {
  return card.value + " of " + card.suit;
}
function getNextCard() {
  return deck.shift();
}
let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];
console.log("Welcome to Blackjack");

console.log("You are dealt:");
console.log("" + getCardString(playerCards[0]));
console.log("" + getCardString(playerCards[1]));


