// let amount = Number(prompt("Enter your total amount"));
let amount = 4363;
console.log(amount);

if (amount >= 500) {
  console.log(`Total 500 notes:- ${Math.floor(amount / 500)}\n`);

  amount = amount % 500;
}
if (amount >= 200) {
  console.log(`Total 200 notes:- ${Math.floor(amount / 200)}\n`);

  amount = amount % 200;
}
if (amount >= 100) {
  console.log(`Total 100 notes:- ${Math.floor(amount / 100)}\n`);

  amount = amount % 100;
}
if (amount >= 50) {
  console.log(`Total 50 notes:- ${Math.floor(amount / 50)}\n`);

  amount = amount % 50;
}
if (amount >= 20) {
  console.log(`Total 20 notes:- ${Math.floor(amount / 20)}\n`);

  amount = amount % 20;
}
if (amount >= 10) {
  console.log(`Total 10 notes:- ${Math.floor(amount / 10)}\n`);

  amount = amount % 10;
}
if (amount >= 5) {
  console.log(`Total 5 notes:- ${Math.floor(amount / 5)}\n`);

  amount = amount % 5;
}
if (amount >= 2) {
  console.log(`Total 2 notes:- ${Math.floor(amount / 2)} \n`);

  amount = amount % 2;
}
if(amount ===1)
{console.log(`Total 1 notes:- ${amount }`);
}