let pr = prompt("Enter any no ");
if (pr === null) {
  console.log("Program cancelled by the user");
} else {
  let n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      let count = 0;
      let factors=[];
      for (let i = 1; i <= Math.floor(n/2); i++) {
        if (n % i === 0) {
          count++;
          factors.push(i)
        }
      }
      factors.push(n)
              console.log(`Factors of ${n} is:- ${factors}`);

    } else {
      console.log("No should be positive or more than zero");
    }
  }
}
