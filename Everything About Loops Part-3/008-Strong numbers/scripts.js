let pr = prompt("Enter any no ");
if (pr === null) {
  console.log("Program cancelled by the user");
} else {
  let n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      let temp = n;
      let sum = 0;
      while (n > 0) {
        let rem = n % 10; //145- 5
        n = Math.floor(n / 10); // 45
        let fact = 1;
        for (let i = 1; i <= rem; i++) {
          fact *= i;
        }
        console.log(fact);

        sum += fact;
      }
      console.log(temp, sum);
      if (temp === sum) {
        console.log("Strong no ");
      } else {
        console.log("not a strong no ");
      }
    } else {
      console.log("No should be positive or more than zero");
    }
  }
}
