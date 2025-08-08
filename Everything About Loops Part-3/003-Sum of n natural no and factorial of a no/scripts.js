// let pr = prompt("Enter any no ");
// if (pr === null) {
//   console.log("Program cancelled by the user");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       for (let i = 1; i <= n; i++) {
//         sum += i;
//       }
//       console.log(`Sum of n natural no is:- ${sum}`);
//     } else {
//       console.log("No should be positive or more than zero");
//     }
//   }
// }


// its factorial 

let pr = prompt("Enter any no ");
if (pr === null) {
  console.log("Program cancelled by the user");
} else {
  let n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      let fact = 1;
      for (let i = n; i>=1; i--) {
        fact *= i;
      }
      console.log(`Fact of n no is:- ${fact}`);
    } else {
      console.log("No should be positive or more than zero");
    }
  }
}
