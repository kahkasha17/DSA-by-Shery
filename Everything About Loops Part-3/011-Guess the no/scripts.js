let random = Math.floor(Math.random() * 100 + 1);
console.log(random);
let userInput = 0;
let chance = 5;

while (chance > 0) {
  userInput = Number(prompt("Guess any no between 1 to 100"));

  if (isNaN(userInput) || userInput <= 0 || userInput > 100) {
    console.log(
      " Invalid Input \n Input should be number only between 1 to 100 "
    );
  } else {
    if (userInput > random) console.log("Too high");
    else if (userInput < random) console.log("Too low");
    else if (userInput === random) {
      console.log("You win");
      break;
    }
  }
  chance--;
}
if (chance === 0) {
  console.log("Chance over \nComputer win");
}
