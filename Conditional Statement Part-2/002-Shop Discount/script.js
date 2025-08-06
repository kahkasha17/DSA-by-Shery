let amount = Number(prompt("Enter your total amount"));
let totalamt;
let dis = 0;

//0-5000- 0%
//5001-7000- 5%
//7001-9000- 10%
//more than 9000- 20%

if (isNaN(amount) || amount <= 0) {
  console.log("Invalid Input");
} else if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount <= 7000) {
  dis = 5;
} else if (amount <= 9000) {
  dis = 10;
} else {
  dis = 20;
}

console.log(
  `Total amount Payable is:- ${Math.floor(
    amount - (amount * dis) / 100
  )} \nTotal discount received ${dis}%`
);
