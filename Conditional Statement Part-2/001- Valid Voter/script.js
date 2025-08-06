let age = Number(prompt("Enter your age"));
console.log(age);

if (isNaN(age)) {
  console.log("Invalid Input");
} else if (age >= 18) {
  console.log("You are a valid voter");
} else {
  console.log("you are not a valid voter");
}
